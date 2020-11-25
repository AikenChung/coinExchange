 
 import React, { Component } from 'react';
 //import './Coin.css';
 import PropTypes from 'prop-types';
 import styled from 'styled-components';
 
 const Styletd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

 export default class Coin extends Component {

    handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.Id);
    }
    render() {
         let coinBalanceDisplay = this.props.showCoinBalance ? <Styletd>${this.props.balance}</Styletd> : <></>;
         return (
            <tr className="coin-row">
                <Styletd>{this.props.name}</Styletd>
                <Styletd>{this.props.ticker}</Styletd>
                <Styletd>${this.props.price}</Styletd>
                {coinBalanceDisplay}
                <Styletd>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Styletd>
            </tr>
         );
     }
}
 
 Coin.propTypes = {
     name: PropTypes.string.isRequired,
     ticker: PropTypes.string.isRequired,
     //balance: PropTypes.number.isRequired,
     price: PropTypes.number.isRequired,
     showCoinBalance: PropTypes.bool.isRequired
 }