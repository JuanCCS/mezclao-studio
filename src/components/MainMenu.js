import React, { Component } from 'react';
import styled from 'styled-components'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'

const Root = styled.div`
    flex-grow: 1;
`;

class MainMenu extends Component {
    render() {
        return (<Root>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        m e z c l a o . s t u d i o
                    </Typography>
                </Toolbar>
            </AppBar>
        </Root>)
    }
}

export default MainMenu;