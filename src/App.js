import React from 'react';
import CoinList from './components/CoinList/CoinList';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { uuid } from 'uuidv4';
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
      coinData:[
        {
          key:uuid(),
          name: 'Bitcoin',
          ticker:'BTC',
          price: 9999.99,
        },
        {
          key:uuid(),
          name:'Ethereum',
          ticker:'ETH',
          price: 289.99
        },
        {
          key:uuid(),
          name: 'Tether',
          ticker:'USDT',
          price: 19.99
        },
        {
          key:uuid(),
          name: 'Ripple',
          ticker:'XRP',
          price: 0.29
        },
        {
          key:uuid(),
          name: 'Bitcoin Cash',
          ticker:'BCH',
          price: 207.75
        }
        /*<Coin name="Bitcoin" ticker="BTC" price={9999.99} />
        <Coin name="Ethereum" ticker="ETH" price={299.99} />
        <Coin name="Tether" ticker="USDT" price={19.99}/>
        <Coin name="Ripple" ticker="XRP" price={0.29}/>*/
      ]
    }
  }
  render(){

    return (
      <AppDiv className="App">
        <CoinExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </AppDiv>
    );
  }
}

export default App;
