import React, { Component } from 'react';
import styled from 'styled-components';
import HomePage from './home/HomePage';
import PortfolioPage from './portfolio/PortfolioPage';
import AboutPage from './about/AboutMezclaoPage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ShopPage from './shop/ShopPage';
import ContactPage from './contact/ContactPage';
import Footer from './footer/Footer'
import HeadingSeparator from './components/HeadingSeparator';
import MainMenu from './components/MainMenu';
import AboutMezclaoPage from './about/AboutMezclaoPage';
import LoadingScreen from './loading/LoadingScreen';

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

const Spacer = styled.div`
  height: ${props => props.height ? props.height : 0};
`

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
          {/* <LoadingScreen /> */}
          <MainMenu />
          <Spacer height={this.state.width > 600? '64px': '56px'}></Spacer>
          <HomePage width={this.state.width}/>
          <HeadingSeparator text="m y . p o r t f o l i o"/>

          <PortfolioPage />
          <HeadingSeparator text="m e e t . m e z c l a o"/>
        
          <AboutMezclaoPage />
          <HeadingSeparator text="t h e . s h o p"/>


 
          <ShopPage />
          <HeadingSeparator text="m e e t . m a r i e r y"/>
             {/*
          <ContactPage />
          <Footer />
    */}
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
