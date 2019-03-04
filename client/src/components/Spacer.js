import React, {Component} from 'react'
import styled from 'styled-components'

const SpacerDiv = styled.div`
    height: ${props => props.height? props.height: '30px'};
`

const Spacer = props => <SpacerDiv height={props.height}></SpacerDiv>

export default Spacer;