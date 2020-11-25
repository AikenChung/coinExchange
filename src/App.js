import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';
import axios from 'axios';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(20,56,97);
color: #cccccc;
`;

const COIN_COUNT = 10;
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App (props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () =>{
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
    setCoinData(coinPriceData);
  };

  useEffect( function(){
     if( coinData.length === 0 ){
        // component did mount
        componentDidMount();
     }
  });

  const handleAddBalance = () => {
    setBalance(oldValue => oldValue+1200);
  }
  
  const handleTransaction = (isBuy, valueChangeId) => {
    var balancechange = isBuy ? 1 : -1;
    const newCoinData = coinData.map(function(values){
      let newValues = {...values};
      if(valueChangeId === values.key){
        newValues.balance += balancechange;
        setBalance(oldBalance => oldBalance - balancechange * newValues.price);
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const handleRefresh = async (key) => {
    console.log(key);
    let updatedCoinData = await axios.get(tickerUrl + key);
    console.log(updatedCoinData.data.quotes.USD.price);
    const newCoinData = coinData.map( function( values ){
      let newValue = { ...values };
      if(key === values.key){
        newValue.price = formatPrice(updatedCoinData.data.quotes.USD.price);
      }
      return newValue;
    });  
    setCoinData(newCoinData);
  }

  const handleShowBalanceClick = () => {
    setShowBalance(oldValue => ! oldValue);
  }

  return (
    <AppDiv className="App">
      <CoinExchangeHeader />
      <AccountBalance amount={balance} 
                      showBalanceButton={showBalance} 
                      handleShowBalanceClick={handleShowBalanceClick}
                      handleAddBalance={handleAddBalance}/>
      <CoinList coinData={coinData} 
                handleRefresh={handleRefresh}
                handleTransaction={handleTransaction} 
                showCoinBalance={showBalance} />;
    </AppDiv>
  );
}

export default App;
