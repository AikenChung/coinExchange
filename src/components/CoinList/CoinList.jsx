import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
  font-size: 1rem;
`;

export default function CoinList (props) { // functional componetn
  return (
      <CoinTable className="table table-primary table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map(({key, name, ticker, price, balance}) =>
            <Coin
              key={key} 
              Id={key}                       
              name={name} 
              ticker ={ticker} 
              balance = {balance}
              price={price} 
              handleRefresh={props.handleRefresh}
              showCoinBalance = {props.showCoinBalance}
              handleTransaction = {props.handleTransaction} />
          )
        }
      </tbody>
    </CoinTable>
  )
} 
