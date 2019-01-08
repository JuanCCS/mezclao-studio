import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import {Typography} from '@material-ui/core'

const Container = styled.div`
    height: 77px;
    width: 100%;
    background: white;
`

const StyledHeading = styled.h2`
    padding-top: 10px;
    font-family: Montserrat, Roboto;
    font-weight: 300;
    display: flex;
    color: black;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:before, &:after{
        content: '';
        border-top: 3px solid black;
        margin: 0 20px 0 0;
        flex: 1 0 20px;
    }

    &:after{
        margin: 0 0 0 20px;
    }

`

const HeadingSeparator = ({text}) => {
        return( 
            <Container><StyledHeading>{text}</StyledHeading></Container>
        );
    }

export default HeadingSeparator;