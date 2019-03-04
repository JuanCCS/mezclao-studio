import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'
import App from '../App';

const StyledAppBar = styled(AppBar)`
    box-shadow: none !important;
`

const MyToolbar = styled(Toolbar)`
    background-color: #f83c2d;
    box-shadow: none !important;
`;

const LogoTypography = styled.h2`
    color: white !important;
    font-size: 4vh;
    font-weight: 400;
    @media (max-width: 700px){
        font-size: 2vh !important;
    }
`

const Root = styled.div`
    flex-grow: 0;
    z-index: 10;
    position: absolute;
    top: 0;
    width: 100%;
    
`;

const AnimatedRoot = posed(Root)({
    start: {
        scaleY: 0,
        opacity: 0
    },
    loaded: {
        scaleY: 1,
        opacity: 1
    }
});

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { start: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ start: false });
        }, 500);
    }

    render() {
        return (<AnimatedRoot pose={this.state.start ? 'start' : 'loaded'}>
            <AppBar position="static">
                <MyToolbar>
                    <LogoTypography variant="h5">
                        m e z c l a o . s t u d i o
                    </LogoTypography>
                </MyToolbar>
            </AppBar>
        </AnimatedRoot>)
    }
}

export default MainMenu;