import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
margin: 50px auto 50px auto;
display: inline-block;
font-size: 1.4rem;
`;

//export default class CoinList extends Component { // class component
export default function CoinList (props) { // functional componetn
    //render() {
        return (
            <CoinTable className="coin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {props.showCoinBalance ? <th>Balance</th>:<></>}
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
                    showCoinBalance = {props.showCoinBalance} />
                )
              }
            </tbody>
          </CoinTable>
        )
//    }
}
