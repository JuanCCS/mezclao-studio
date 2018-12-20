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
  background-color: 'red';
  height: ${props => props.height ? props.height + 'px' : "100%"};
`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container height={this.state.height}>
          <HomePage>
          </HomePage>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
