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
import AboutMarieryPage from './about/AboutMarieryPage';
import ViewportContext from './components/ViewportContext.js';

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
    this.state = { width: 0, height: window.innerHeight, scrollY: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  handleScroll(event) {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ViewportContext.Provider value={this.state.scrollY}>
          <Container height={this.state.height}>
            {/*
          <LoadingScreen />
          */}
            <MainMenu />

            <HomePage width={this.state.width} />


            <PortfolioPage />

            <AboutMezclaoPage />
            <ShopPage />
           
          <AboutMarieryPage></AboutMarieryPage>

          { /*
          <HeadingSeparator text="c o n t a c t . m e"/>
    
          <ContactPage />
           */ }
            <Footer />
          </Container>
        </ViewportContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
