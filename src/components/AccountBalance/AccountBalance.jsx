import React, { Component } from 'react'; // imrpcp
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 2px solid red;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    
    constructor(props){
        super(props);     
        this.handleShowBalanceClickButton = this.handleShowBalanceClickButton.bind(this);
    }

    handleShowBalanceClickButton(event){
        // Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleShowBalanceClick();
    }

    render() {
        const buttonText = this.props.showBalanceButton ? 'Hide Balance' : 'Show Balance';
        let balanceContent = 'Balance$'+ this.props.amount;
        const balanceDisplay = this.props.showBalanceButton ? balanceContent : '';
        return (
            <Section>
                    {balanceDisplay}
                <button onClick={this.handleShowBalanceClickButton}>{buttonText}</button>
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
    showBalanceButton: PropTypes.bool.isRequired
}