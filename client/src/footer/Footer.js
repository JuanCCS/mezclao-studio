import React, { Component } from 'react';
import styled from 'styled-components';
import { BottomNavigation } from '@material-ui/core'

import { Grid, Typography } from '@material-ui/core';

import SocialMediaGrid from './SocialMediaGrid'

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: #723485;
`;

const FooterColumn = styled.div`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const ColumnTitle = styled(Typography)`
    color: white !important;
`

const Separator = styled.div`
    height: 10px;
    border-bottom: 1px solid white;
    width: 90%;
`

const accounts = [
    {
     src:'images/social/behance.svg',
     url:'https://www.behance.net/marieryyoung'  
    },
    {
        src:'images/social/dribbble.svg',
        url:'https://dribbble.com/marieryyoung'  
       },
       {
        src:'images/social/facebook.svg',
        url:'https://www.facebook.com/mezclaostudio/'  
       },
       {
        src:'images/social/twitter.svg',
        url:'https://twitter.com/MezclaoStudio'  
       },
       {
        src:'images/social/instagram.svg',
        url:'https://www.instagram.com/mezclaostudio/'  
       },
       {
        src:'images/social/linkedin.svg',
        url:'https://www.linkedin.com/in/mariery-young/'  
       },
       {
        src:'images/social/ello.svg',
        url:'https://ello.co/mezclaostudio'  
       },
       {
        src:'images/social/Giphy.svg',
        url:'https://giphy.com/channel/mezclaostudio'  
       }
]
/**
 * Renders the Portfolio Section
 * 
 */
class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Grid container spacing={24}>
                    <Grid item md={4} xs={12} >
                        <FooterColumn>
                            <ColumnTitle variant="h5">s o c i a l</ColumnTitle>
                            <Separator></Separator>
                            <SocialMediaGrid socialMediaAccounts={accounts} />
                        </FooterColumn>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FooterColumn>
                            <ColumnTitle variant="h5">m e n u</ColumnTitle>
                            <Separator></Separator>
                        </FooterColumn>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FooterColumn>
                            <ColumnTitle variant="h5">n e w s l e t t e r</ColumnTitle>
                            <Separator></Separator>
                        </FooterColumn>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Footer;