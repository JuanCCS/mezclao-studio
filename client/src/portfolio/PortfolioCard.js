import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Paper,
    Grid,
    Typography
} from '@material-ui/core'

import PortfolioGallery from './PortfolioGallery';
import globals from '../globals';
import PortfolioClientView from './PortfolioClientView';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`

const PortfolioImage = styled.img`
    border-radius: 3px;
    width: 90%;
    height: auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`

const PortfolioTitle = styled.h5`
    color: white;
    font-weight: 400;
    text-align: center;

`

const PortfolioDescription = styled.h6`
    color: white;
`

/**
 * Card that renders an Portfolio Card sort of
 */
class PortfolioCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidUpdate(){
    }   


    render() {
        return (
            <FlexContainer>
                <PortfolioImage src={this.props.category.src}></PortfolioImage>
                
                <PortfolioTitle>{this.props.category.title}</PortfolioTitle>
                {/*
                <PortfolioDescription>{this.props.category.description}</PortfolioDescription>
                */}
            </FlexContainer>
        );
    }
}
export default PortfolioCard;