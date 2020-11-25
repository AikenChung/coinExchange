//import React, { Component } from 'react'; // imrpcp
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 2px solid red;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

//export default class AccountBalance extends Component { // class component
export default function AccountBalance (props) {    // functional component

    const handleShowBalanceClickButton = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleShowBalanceClick();
    }

    //render() {
        const buttonText = props.showBalanceButton ? 'Hide Balance' : 'Show Balance';
        let balanceContent = 'Balance $'+ props.amount;
        const balanceDisplay = props.showBalanceButton ? balanceContent : '';
        return (
            <Section>
                    <>{balanceDisplay}</>
                <button onClick={handleShowBalanceClickButton}>{buttonText}</button>
            </Section>
        );
    //}
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
    showBalanceButton: PropTypes.bool.isRequired
}