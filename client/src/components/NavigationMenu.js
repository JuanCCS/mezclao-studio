import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {
    withStyles,
    createMuiTheme,
    MuiThemeProvider
}from '@material-ui/core/styles'

import {
    InputLabel,
    Input,
    InputAdornment,
    Button
} from '@material-ui/core'

import { Mail } from '@material-ui/icons'
import App from '../App';

const NavigationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavigationButton = styled(Button)`
    text-transform: lowercase !important;
    color: white !important;
    & span{
        color: white !important;
    }
`

class NavigationMenu extends Component {
    constructor(props){
        super(props)
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick(){
        if(this.props.hideOverlay != undefined){
            this.props.hideOverlay()
        }
    }

    render() {
        const { classes } = this.props;
        const self = this;
        return (
            <NavigationContainer>
                <NavigationButton onClick={()=>this.handleMenuClick('meetMariery')} color="primary"> m e e t . m e z c l a o </NavigationButton>
                <NavigationButton onClick={()=>this.handleMenuClick('work')} color="primary"> w o r k </NavigationButton>
                <NavigationButton onClick={()=>this.handleMenuClick('theShop')} color="primary"> t h e . s h o p </NavigationButton>
                <NavigationButton onClick={()=>this.handleMenuClick('sayHello')} color="primary"> s a y . h e l l o </NavigationButton>
                {this.props.hideOverlay!=undefined?<NavigationButton onClick={()=>this.handleMenuClick('closeOverlay')} color="primary"> X </NavigationButton>:<div style={{display: 'none'}}></div>}
                
            </NavigationContainer>
        )
    }
}

export default NavigationMenu;