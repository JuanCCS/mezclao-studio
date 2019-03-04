import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

const TriangleDiv = styled.div`
    position: absolute;
    bottom: ${props=> props.bottomHeight? props.bottomHeight : '10px'};
    right: ${props=> props.rightHeight? props.rightHeight : '10px'};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #b1d3d3 transparent;
`
const AnimTriangle = posed(TriangleDiv)({
    enter:{
        opacity: 1
    },
    exit: {
        opacity: 0
    }
})



class Triangle extends Component {
    constructor(props){
        super(props)

        const right = Math.random() * 500;
        const bottom = - Math.random() * 30;

        this.state = {
            animState: 'exit',
            right: right,
            bottom: bottom,
            offset: 1000 + Math.random() * 3000
        }
        this.switchAnimationState = this.switchAnimationState.bind(this);
    }

    switchAnimationState(){
        if(this.state.animState == 'exit'){
            this.setState({
                animState : 'enter'
            })
        }else{
            this.setState({
                animState : 'exit'
            })
        }
    }

    
    componentDidMount(){
        const self = this;
        setInterval(function(){
            self.switchAnimationState()
         }, this.state.offset);
    }

    render() {



        return (
            <AnimTriangle pose={this.state.animState}
                bottomHeight={Math.floor(this.state.bottom) + 'px'} 
                rightHeight={Math.floor(this.state.right) + 'px'}>
            </AnimTriangle>
        );
    }
}

export default Triangle;