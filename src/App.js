import React, { Component } from 'react';
import styled from 'styled-components';
import HomePage from './home/HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Helvetica'
    ].join(','),
  },
});


const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <HomePage>
          </HomePage>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
