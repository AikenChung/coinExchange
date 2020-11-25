 
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styletd = styled.td`
    border: 1px solid #cccccc;
    width: 22vh;
`;
const TdControls = styled(Styletd)`
    width:34vw;
`;
const TdName = styled(Styletd)`
    width: 24vw;
`;
const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Coin (props) { // functional component
    const handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.Id); // If it's the class component, add this. in the begining
    }
    const handleBuy = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(true, props.Id); // If it's the class component, add this. in the begining
    }
    const handleSell = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(false, props.Id); // If it's the class component, add this. in the begining
    }
            
    let coinBalanceDisplay = props.showCoinBalance ? <Styletd>${props.balance}</Styletd> : <Styletd>-</Styletd>;
    return (
        <tr className="coin-row">
            <TdName>{props.name}</TdName>
            <Styletd>{props.ticker}</Styletd>
            <Styletd>${props.price}</Styletd>
            {coinBalanceDisplay}
            <TdControls>
                <form action="#" method="POST">
                    <Button className='btn btn-info' onClick={handleClick}>Refresh</Button>
                    <Button className='btn btn-warning' onClick={handleBuy}>Buy</Button>
                    <Button className='btn btn-danger' onClick={handleSell}>Sell</Button>
                </form>
            </TdControls>
        </tr>
    );
}
 
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    //balance: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    showCoinBalance: PropTypes.bool.isRequired
}