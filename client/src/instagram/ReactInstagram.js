import InstagramEmbed from 'react-instagram-embed';
import React, { Component } from 'react';
import styled from 'styled-components';

import {Grid} from '@material-ui/core'
import HeadingSeparator from '../components/HeadingSeparator';
import Spacer from '../components/Spacer'

const Container = styled.div`
    width: 100%;
    padding: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledInstagram = styled(InstagramEmbed)`
    display: flex;
    flex-direction: column;
    align-items: center;
    iframe .Footer{
        display: none !important;
    }
`

const posts = [
    {url: 'https://www.instagram.com/p/Btqsx_5H6c1/'},
    {url: 'https://www.instagram.com/p/BubrNIYHySd/'},
    {url: 'https://www.instagram.com/p/BoZGrg4hFQI/'},
    {url: 'https://www.instagram.com/p/BjnXY9fARXC/'}
]

class ReactInstagram extends React.Component{

    render(){
        const postFeed = posts.map(post=>{
            return(
                <Grid item xs={12} s={6} md={6} lg={3} alignItems='center'>
                    <StyledInstagram
                        url={post.url}
                        maxWidth={320}
                        hideCaption={true}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </Grid>
                )})
        return (
            <Container>
                <Spacer height='30px'/>
                <HeadingSeparator text='m y . i n s t a g r a m'></HeadingSeparator>
                <Spacer height='30px'/>
            <Grid container spacing={16}>
                {postFeed}
            </Grid>
            </Container>
        )
    }
}

export default ReactInstagram;