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
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
            <Section>
                Balance: ${this.props.amount}
                <button>{buttonText}</button>
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}