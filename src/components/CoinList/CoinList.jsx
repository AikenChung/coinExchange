import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
margin: 50px auto 50px auto;
display: inline-block;
font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <CoinTable className="coin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map(({name, ticker, price}) =>
                  <Coin key={ticker}
                        handleRefresh={this.props.handleRefresh} 
                        name={name} 
                        ticker ={ticker} 
                        price={price} />
                )
              }
            </tbody>
          </CoinTable>
        )
    }
}
