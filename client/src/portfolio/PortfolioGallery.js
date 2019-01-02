import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import globals from '../globals';

const RootContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CurrentImageContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CurrentImage = styled.img`
  width: 60%;
  max-height: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: white;
`

const AnimatedImgae = posed(CurrentImage)({
  start: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
  }
});

const Spacer = styled.div`
  height: ${props => props.height ? props.height : 0};
`

class PortfolioGallery extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      animState: 'start',
      start: true,
      currentPic: null,
      prevPic: null,
      currentIndex: 0,
      pics: ''
    };
  }



  switchPic(){
    const pics = this.props.pics;
    if(pics != undefined){
      let idx = this.state.currentIndex;
      idx ++;
      idx %= pics.length;
      let nextPic = pics[idx]
      this.setState({animState: 'start', prevPic: this.state.currentPic, currentPic: nextPic, currentIndex: idx});
    }

    setTimeout(()=>{
      this.setState({animState:'enter'})}, 400)
      setTimeout(()=>{
        this.setState({animState:'exit'})}, 1600)
  }

  componentDidMount() {
      setInterval(()=>{
        this.switchPic.call(this)
      },2000)
  }

  componentDidUpdate(prevProps, prevState){
      if(prevProps.currentClient != this.props.currentClient){
        this.setState({currentPic: this.props.initialPic, currentIndex: 0})
      }
  }

  render() {
    let picPath = globals.serverUrl + '/pics/' + this.props.currentClient + '/' + this.state.currentPic;
    return (
      <RootContainer> 
        <Spacer height='20px'></Spacer>
        <CurrentImageContainer>
          <AnimatedImgae pose={this.state.animState} src={this.state.currentPic ? picPath: 'favicon.ico'}>
          </AnimatedImgae>
        </CurrentImageContainer>
        <Spacer height='20px'></Spacer>
      </RootContainer>
    );
  }
}

export default PortfolioGallery;