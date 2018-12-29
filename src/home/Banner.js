import React, { Component } from 'react';
import BannerSlideOne from './BannerSlideOne';
import styled from 'styled-components';
import posed from 'react-pose';
import BannerSlideTwo from './BannerSlideTwo';
import { green } from '@material-ui/core/colors';

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: '56px';
  position: relative;
`;

const AnimRootContainer = posed(RootContainer)({
  start: {
    background: '#FFF',
  },
  show: {
    background: '#F83C2D',
  }
});

class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: this.props.width,
      animState: "start"
    }
  }
  componentDidMount(){
    this.setState({width: this.props.width});

    setTimeout(() => {
      this.setState({ animState: "show" });
    }, 1300);
  }

  render() {
    return (
      <AnimRootContainer pose={this.state.animState? this.state.animState : "start"}>
        <BannerSlideTwo></BannerSlideTwo>
      </AnimRootContainer>
    );
  }
}

export default Banner;
