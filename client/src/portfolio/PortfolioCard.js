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
import {connect} from 'react-redux'
import {clientsSelected} from '../redux/portfolio'
import {withRouter} from 'react-router-dom'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    border-radius: 0px !important;
`

const PortfolioImage = styled.img`
    border-radius: 0px;
    width: 100%;
    height: auto;
    margin-bottom: -3px;
    z-index: 1;
`

const PortfolioTitle = styled.h5`
    color: white;
    font-weight: 400;
    text-align: center;
    border-radius: 0px;
`

const PortfolioDescription = styled.h6`
    color: white;
`

const PortfolioHover = styled.div`
    background: red;
    position: absolute;
    z-index: 9;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    &:hover{
        opacity: 1;
        transition: opacity .2s ease-out;
    }
`

const StyledCategoryName = styled.h5`
    letter-spacing: 0.5em;
    color: white !important;
`

/**
 * Card that renders an Portfolio Card sort of
 */
class PortfolioCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.renderClients = this.renderClients.bind(this)
    }

    componentDidUpdate(){
    }   

    renderClients(ev){
        ev.preventDefault();
        this.props.clientsSelected(this.props.category)
        this.props.history.push('/portfolio')
    }

    render() {
        const elementContent = this.props.category.name.split('_').join('.')
        const category = this.props.category
        const coverUrl = globals.serverUrl + '/' + category.name + '/cover'
        return (
            <FlexContainer>

                <a onClick={this.renderClients}>
                    <PortfolioImage src={coverUrl}></PortfolioImage>
                    <PortfolioHover backgroundColor={this.props.category.backgroundColor}>
                        <StyledCategoryName>
                            {elementContent}
                        </StyledCategoryName>
                    </PortfolioHover>
                </a>
            </FlexContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    clientsSelected: payload => dispatch(clientsSelected(payload))
  })
  
const reduxedComponent = connect(null, mapDispatchToProps)(PortfolioCard);

export default withRouter(reduxedComponent);