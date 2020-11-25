import React from 'react';
import CoinList from './components/CoinList/CoinList';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
//import { uuid } from 'uuidv4';
import styled from 'styled-components';
import axios from 'axios';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(20,56,97);
color: #cccccc;
`;

const COIN_COUNT = 10;
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
const formatPrice = price => parseFloat(Number(price).toFixed(4));

class App extends React.Component {
  
  state={
    balance: 10000,
    showBalance: true,     
    coinData:[]
  }
  
  componentDidMount = async () =>{
    //let response = await axios.get('https://api.coinpaprika.com/v1/tickers');
    let response = await axios.get('https://api.coinpaprika.com/v1/coins');
    let coinIds = response.data.slice(0,COIN_COUNT).map( coin => coin.id);   
    const promises = coinIds.map(id => axios.get(tickerUrl + id));   
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,          
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      };
    });
    // Retrieve the prices
    this.setState({ coinData: coinPriceData });
  };
  

  handleRefresh = async (key) => {
    console.log(key);
    let updatedCoinData = await axios.get(tickerUrl + key);
    const newCoinData = this.state.coinData.map( function( values ){
      let newValue = { ...values };
      if(key === values.Id){
        newValue.price = formatPrice(updatedCoinData.data.quotes.USD.price);
      }
      return newValue;
    });  
    this.setState({coinData: newCoinData});
  }

  handleShowBalanceClick = () => {
    this.setState( function(oldState){
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  
  render(){

    return (
      <AppDiv className="App">
        <CoinExchangeHeader />
        <AccountBalance amount={this.state.balance} 
                        showBalanceButton={this.state.showBalance} 
                        handleShowBalanceClick={this.handleShowBalanceClick}/>
        <CoinList coinData={this.state.coinData} 
                  handleRefresh={this.handleRefresh} 
                  showCoinBalance={this.state.showBalance} />;
      </AppDiv>
    );
  }
}

export default App;
