import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Paper, Typography, TextField } from '@material-ui/core'
import HeadingSeparator from '../components/HeadingSeparator'
import Spacer from '../components/Spacer'

const color = '#FFF'

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

const Container = styled.div`
  min-width: 100%;
  display: flex;
  background: #e96bbc !important;
  flex-direction: column;
  align-items: center;
`;

const StyledSvg = styled.object `
  min-width: 100%;
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: -30px;
  @media (max-width: 700px) {
    height: 200px;  
  }
`

const FormContainer = styled.form`
  width: 90%;
  height: 80%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e96bbc;
`

const StyledTextField = styled(TextField)`
  width: 80%;
`

const StyledButton = styled(Button)`
  background: #1ab687 !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  border-radius: 0px !important;
  text-transform: lowercase !important;
`

/**
 * Renders the About Section
 * 
 */
class ContactPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props
    return (
      <Container>
        <MuiThemeProvider theme={theme}>
          <Spacer height='30px' />
          <FormContainer noValidate autoComplete="off">
            <HeadingSeparator text='l e t s . w o r k . t o g e t h e r' style={{ fontWeight: '700' }}></HeadingSeparator>
            <StyledTextField
              id="standard-name"
              label="e m a i l"
              margin="normal"
            />
            <Spacer height="20px" />
            <StyledTextField
              id="standard-name"
              label="y o u r . n a m e"
              margin="normal"
            />
            <Spacer height="20px" />
            <StyledTextField
              id="standard-name"
              label="s u b j e c t"
              margin="normal"
            />
            <Spacer height="20px" />
            <StyledTextField
              id="standard-name"
              label="y o u r . m e s s a g e"
              margin="normal"
              multiline
            />
            <Spacer height="40px"></Spacer>
            <StyledButton color="primary">
              s u b m i t
            </StyledButton>
          </FormContainer>

        </MuiThemeProvider>
        <StyledSvg type="image/svg+xml" data="/images/contact/Plants.svg"></StyledSvg>
      </Container>
    )
  }
}

export default ContactPage;