 
// import React, { Component } from 'react'; // For class component
import React from 'react';
 //import './Coin.css';
 import PropTypes from 'prop-types';
 import styled from 'styled-components';
 
 const Styletd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

 //export default class Coin extends Component { // Class component
 export default function Coin (props) { // functional component
    const handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.Id); // If it's the class component, add this. in the begining
    }
    //render() {
         let coinBalanceDisplay = props.showCoinBalance ? <Styletd>${props.balance}</Styletd> : <></>;
         return (
            <tr className="coin-row">
                <Styletd>{props.name}</Styletd>
                <Styletd>{props.ticker}</Styletd>
                <Styletd>${props.price}</Styletd>
                {coinBalanceDisplay}
                <Styletd>
                    <form action="#" method="POST">
                        <button onClick={handleClick}>Refresh</button>
                    </form>
                </Styletd>
            </tr>
         );
     //}
}
 
 Coin.propTypes = {
     name: PropTypes.string.isRequired,
     ticker: PropTypes.string.isRequired,
     //balance: PropTypes.number.isRequired,
     price: PropTypes.number.isRequired,
     showCoinBalance: PropTypes.bool.isRequired
 }