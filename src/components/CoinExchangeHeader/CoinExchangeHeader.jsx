import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const ImgStyled = styled.img`
  height: 8rem;
  pointer-events: none;
`;

const HeaderStyled = styled.header`
background-color: #282c34;
min-height: 10vh;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
color: white;
`;

const H1 = styled.h1`
    font-size: 3rem;
    line-height:8rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class CoinExchangeHeader extends Component {
    render() {
        return (
            <HeaderStyled>
                <ImgStyled src={logo} alt="React logo" className="App-logo"/>
                <H1>
                Coin Exchange 2020
                </H1>       
            </HeaderStyled>
        )
    }
}
