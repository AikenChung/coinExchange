import React from 'react';
import CoinList from './components/CoinList/CoinList';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
//import { uuid } from 'uuidv4';
import styled from 'styled-components';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(20,56,97);
color: #cccccc;
`;

//function App() {
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      balance: 10000,
      showBalance: true,     
      coinData:[
        {
          name: 'Bitcoin',
          ticker:'BTC',
          balance: 0.5,
          price: 9999.99,
        },
        {
          name:'Ethereum',
          ticker:'ETH',
          balance: 32.1,
          price: 289.99
        },
        {
          name: 'Tether',
          ticker:'USDT',
          balance: 0.1,
          price: 19.99
        },
        {
          name: 'Ripple',
          ticker:'XRP',
          balance: 0.23,
          price: 0.29
        },
        {
          name: 'Bitcoin Cash',
          ticker:'BCH',
          balance: 0.17,
          price: 207.75
        }       
      ]
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleShowBalanceClick = this.handleShowBalanceClick.bind(this);
  }
  
  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function({ticker, name, price, balance}){
      let newPrice = price;
      if(valueChangeTicker === ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice*randomPercentage;
      }
      return{
        ticker: ticker,
        name: name,
        price: newPrice,
        balance: balance
      }
    });
    this.setState({coinData: newCoinData});
  }

  handleShowBalanceClick(){
    if(this.state.showBalance){
      this.setState({showBalance: false});
    }else{
      this.setState({showBalance: true}); 
    }
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
