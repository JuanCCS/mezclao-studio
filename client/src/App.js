import React, { Component } from 'react'
import styled from 'styled-components'
import HomePage from './home/HomePage'
import PortfolioPage from './portfolio/PortfolioPage'
import AboutPage from './about/AboutMezclaoPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import ShopPage from './shop/ShopPage'
import ContactPage from './contact/ContactPage'
import Footer from './footer/Footer'
import HeadingSeparator from './components/HeadingSeparator'
import MainMenu from './components/MainMenu'
import AboutMezclaoPage from './about/AboutMezclaoPage'
import LoadingScreen from './loading/LoadingScreen'
import AboutMarieryPage from './about/AboutMarieryPage'
import ViewportContext from './components/ViewportContext.js'
import ReactInstagram from './instagram/ReactInstagram'
import MenuOverlay from './components/MenuOverlay'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PortfolioGallery from './portfolio/PortfolioGallery'

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
  height: "100%";
`

const StyledHomePageContainer = styled.div`
  &::-webkit-scrollbar { 
                display: none !important; 
            }
            
  width: 100%;
  min-height: 100%;
  background-color: 'red';
  height: "100%";

`

const HomePageContent = (props) => {
  return (
    <StyledHomePageContainer>

      

      <HomePage />

      <PortfolioPage />

      <AboutMezclaoPage />
      <ShopPage />

      <AboutMarieryPage></AboutMarieryPage>
      <ReactInstagram></ReactInstagram>

      <ContactPage />
      <Footer />

    </StyledHomePageContainer>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth, height: window.innerHeight, scrollY: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.showOverlay = this.showOverlay.bind(this)
    this.hideOverlay = this.hideOverlay.bind(this)
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
  showOverlay() {
    this.setState({
      overlay: true
    })
  }
  hideOverlay() {
    this.setState({
      overlay: false
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ViewportContext.Provider value={this.state.scrollY}>
          <Container height={this.state.height}>
          <MainMenu showOverlay={this.showOverlay} hideOverlay={this.hideOverlay} />
            {this.state.overlay ?
              <MenuOverlay hideOverlay={this.hideOverlay}></MenuOverlay> :
              <div style={{ display: 'none' }}></div>
            }
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={LoadingScreen} />  
                <Route exact path='/home' render={(props) => <HomePageContent {...props} ></HomePageContent>}
                  showOverlay={this.showOverlay} hideOverlay={this.hideOverlay} width={this.state.width} />
                <Route exact path='/portfolio' render={(props) => <PortfolioGallery></PortfolioGallery>} />
                <Route exact path='/client' render={(props) => <div> </div>} />
              </Switch>
            </BrowserRouter>

          </Container>
        </ViewportContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
