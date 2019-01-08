import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import {
    Typography,
    Paper
} from '@material-ui/core'

const Container = styled.div`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ClientPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    height: 30%;
    width: 80%;
`

/**
 * {
    "client_name": "Better Together",
    "instagram": "https://www.instagram.com/mac_panama/",
    "website": "https://macpanama.org/",
    "insta_handle": "@mac_panama"
}
 * 
 */
class PortfolioClientView extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
      let clientJson = this.props.clientObj;
    return (
        <Container>
        <ClientPaper>
            <Typography>{clientJson.client_name}</Typography>
            <a href={clientJson.instagram}>
            <Typography> {clientJson.insta_handle} </Typography>
            </a>
            <a href={clientJson.website}>
                <WebRoundedIcon />
            </a> 
            </ClientPaper>
        </Container>
    )
  }
}

export default PortfolioClientView;