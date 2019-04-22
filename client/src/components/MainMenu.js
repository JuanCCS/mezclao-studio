import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core'
import {
    withStyles,
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';

import App from '../App';

const StyledAppBar = styled(AppBar)`
    box-shadow: none !important;
`

const MyToolbar = styled(Toolbar)`
    background-color: #f83c2d;
    box-shadow: none !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const StyledSvg = styled.img`
  color: white !important;
  fill: white !important;
  height: 32px;
  padding: 5px;
  margin-right: 2px;
  @media (max-width: 700px){
    height: 24px;
  }
`

const PosedSvg = posed(StyledSvg)({
    enter: {
        scale: 1,
        transition: {
            duration: 100
        }
    },
    clicked: {
        scale: 1.1,
        transition: {
            duration: 100
        }
    }
})

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                start: true,
                animState: 'enter'
            };

        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ start: false });
        }, 500);
    }

    handleMenuClick() {
        this.setState({ animState: 'clicked' })
        let self = this;
        setTimeout(() => {
                    self.props.showOverlay()
                    self.setState({animState: 'enter'})
        }, 100)
    }

    render() {
        const { classes } = this.props
        return (<AnimatedRoot pose={this.state.start ? 'start' : 'loaded'}>
            <AppBar position="static">
                <MyToolbar>
                    <LogoTypography variant="h5">
                        m e z c l a o . s t u d i o
                    </LogoTypography>
                    <IconButton onClick={this.handleMenuClick} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <PosedSvg pose={this.state.animState} src='images/menu/MainMenu.svg'></PosedSvg>
                    </IconButton>
                </MyToolbar>
            </AppBar>
        </AnimatedRoot>)
    }
}

export default withStyles(styles)(MainMenu);