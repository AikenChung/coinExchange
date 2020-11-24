 
 import React, { Component } from 'react';
 //import './Coin.css';
 import PropTypes from 'prop-types';
 import styled from 'styled-components';
 
 const Styletd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

 export default class Coin extends Component {
     
    constructor(props){
        super(props);       
        this.handleClick = this.handleClick.bind(this);
    }
    /*
    componentDidMount(){
        const callback = () => {
            // set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;
            // DON'T DO THIS:
            // this.props.price = this.props.price * randomPercentage;
            // this.props.price only can be used in the constructor
            // There is a specific way to update the state outside of the constructor
            this.setState( function(oldState) {
                return{
                    price: oldState.price * randomPercentage
                };
            });
        };
        setInterval(callback, 5000);
    }*/
    
    handleClick(event){
        // Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
        /*const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return{
                price: oldState.price*randomPercentage
            };
        });*/
    }
    render() {
         return (
            <tr className="coin-row">
                <Styletd>{this.props.name}</Styletd>
                <Styletd>{this.props.ticker}</Styletd>
                <Styletd>${this.props.price}</Styletd>

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
     price: PropTypes.number.isRequired
 }