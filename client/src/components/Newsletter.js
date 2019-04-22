import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {
    withStyles,
    createMuiTheme,
    MuiThemeProvider
}
    from '@material-ui/core/styles';

import {
    InputLabel,
    Input,
    InputAdornment,
    Button
} from '@material-ui/core'
import { Mail } from '@material-ui/icons'
import App from '../App';

const Container = styled.div`
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFF',
            main: '#FFF',
            dark: '#FFF',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#F00',
            main: '#F00',
            dark: '#F00',
            contrastText: '#F00',
        },
        error: {
            light: '#F00',
            main: '#F00',
            dark: '#F00',
            contrastText: '#F00',
        }
    }
});

const styles = {
    multilineColor: {
        color: 'white'
    }
}

const StyledButton = styled(Button)`
  background: #1ab687 !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  border-radius: 0px !important;
  text-transform: lowercase !important;
`

class Newsletter extends Component {

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Container>
                    <InputContainer>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder="e m a i l . a d r e s s"
                            color="primary"
                            InputProps={{
                                classes: {
                                    input: classes.multilineColor
                                }
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Mail color="primary" />
                                </InputAdornment>
                            }
                        />
                        <StyledButton>
                            s u b m i t
                </StyledButton>
                    </InputContainer>
                </Container>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Newsletter);