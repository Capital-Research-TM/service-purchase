import React from 'react';
import styled from 'styled-components';

// const MiddleBarWrapper = styled.div `
//     border: 1px solid black;
//     width: 228px;
// `


const MiddleBarWrapper = styled.div `
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
`

const ShareLine = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const ShareText = styled.div `
    margin-right: 5px;
    font-size: 13px;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 20px;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    color : ${props => props.open ? "black" : "white"};
`

const ShareInput = styled.input `
    text-align: right;
    width: 40px;
    border:1px solid black;
    background: black;
    color: #8c8c8e; 
    border-radius: 2px;
    padding-right: 5px;
    margin-right: 20px;
    margin-bottom: 4px;
    ${ShareLine}: hover & {
        border-color: #8c8c8e;
    }
`
const MarketPriceText = styled(ShareText) `
    color: #f45531;
`
const MarketPrice = styled(ShareText) `
`

class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MiddleBarWrapper open={this.props.open}>
                <ShareLine>
                    <ShareText>Shares</ShareText>
                    <form>
                        <ShareInput type='text' value='0'/>
                    </form>
                </ShareLine>
                <ShareLine>
                <MarketPriceText>Market Price</MarketPriceText>
                <MarketPrice>$999.99</MarketPrice>
                </ShareLine>
            </MiddleBarWrapper>
        )
    }
}

export default MiddleBar;

