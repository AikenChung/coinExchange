//import React, { Component } from 'react'; // imrpcp
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    line-height: 3rem;
    display: inline-block;
`;
const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em;
    vertical-align: middle;
    text-align: left;
`;
const Button = styled.button`
    margin: 0 8px;
`;
const BalanceToggleButton = styled(Button)`
    width: 150px;
`;
var formatter = Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
});
//export default class AccountBalance extends Component { // class component
export default function AccountBalance (props) {    // functional component

    const handleShowBalanceClickButton = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleShowBalanceClick();
    }


    const buttonText = props.showBalanceButton ? 'Hide Balance' : 'Show Balance';
    let balanceContent = <>{formatter.format(props.amount)}</>;
    let hideBalanceContent = '\u00A0';
    const buttonClass = 'btn ' + (props.showBalanceButton ? 'btn-warning' : 'btn-info');
    const balanceDisplay = props.showBalanceButton ? balanceContent : hideBalanceContent;
    return (
        <>
            <Balance>{balanceDisplay}</Balance>
            <Section>
                <BalanceToggleButton 
                    onClick={handleShowBalanceClickButton}
                    className={buttonClass}>
                    {buttonText}
                </BalanceToggleButton>
                <Button className="btn btn-success"
                        onClick={props.handleAddBalance}>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    );
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
    showBalanceButton: PropTypes.bool.isRequired
}