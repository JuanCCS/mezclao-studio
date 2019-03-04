
import React, { Component } from 'react';
import styled from 'styled-components';
import globals from '../globals';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import {
    Typography,
    Paper
} from '@material-ui/core'

const Container = styled(Paper)`
    background: url(${props=>props.backgroundColor});
    position: relative;
    flex-grow: 1;
    width: 100%;
    height: 400px;
    border-radius: 3px;
    @media (max-width: 700px) {

    }
`

const ItemImg = styled.div`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 3;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 3px;
`

const HoverDiv = styled.div`
    background: ${props=>props.backgroundColor};
    position: absolute;
    z-index: 9;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    &:hover{
        opacity: 1;
        transition: opacity .2s ease-out;
    }
`


const ShopCard = props => {
    const {
        background_url,
        instagram_handle,
        instagram_url,
        article_name,
        shop_name,
        website_url
    } = props.item;
    return( 
        <Container>
            <ItemImg backgroundUrl={props.item.background_url}/>

            <HoverDiv backgroundColor={props.item.color}>
                <Typography style={{color: 'white'}}  >{article_name}</Typography>
                <Typography style={{color: 'white'}}  >{shop_name}</Typography>
                <a href={instagram_url}>
                <Typography style={{color: 'white'}}  > @{instagram_handle} </Typography>
                </a>
                <a style={{color: 'white'}} href={website_url}>
                    <WebRoundedIcon />
                </a> 
            </HoverDiv>
        </Container>
    );
}

export default ShopCard;