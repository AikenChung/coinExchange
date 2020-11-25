import React, {useState, useEffect} from 'react';
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

//class App extends React.Component { // class component
function App (props) {
  /*state={
    balance: 10000,
    showBalance: true,     
    coinData:[]
  }*/
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () =>{
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
    //this.setState({ coinData: coinPriceData });
    setCoinData(coinPriceData);
  };

  useEffect( function(){
     if( coinData.length === 0 ){
        // component did mount
        componentDidMount();
     }else{
       // component did update
     }
  });


  

  const handleRefresh = async (key) => {
    console.log(key);
    let updatedCoinData = await axios.get(tickerUrl + key);
    console.log(updatedCoinData.data.quotes.USD.price);
    //const newCoinData = this.state.coinData.map( function( values ){
    const newCoinData = coinData.map( function( values ){
      let newValue = { ...values };
      if(key === values.key){
        newValue.price = formatPrice(updatedCoinData.data.quotes.USD.price);
      }
      return newValue;
    });  
    //this.setState({coinData: newCoinData});
    setCoinData(newCoinData);
  }

  const handleShowBalanceClick = () => {
    /*this.setState( function(oldState){
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });*/
    setShowBalance(oldValue => ! oldValue);
  }
  
  //render(){
    return (
      <AppDiv className="App">
        <CoinExchangeHeader />
        <AccountBalance amount={balance} 
                        showBalanceButton={showBalance} 
                        handleShowBalanceClick={handleShowBalanceClick}/>
        <CoinList coinData={coinData} 
                  handleRefresh={handleRefresh} 
                  showCoinBalance={showBalance} />;
      </AppDiv>
    );
  //}
}

export default App;
