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
    height: 100%;
    padding: 20px;
`

const StyledGridRow = styled(Grid)`
    height: 100%;
`

const ImgContainer = styled(Grid)`

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
            <div></div>
        );
    }
}
export default PortfolioCard;