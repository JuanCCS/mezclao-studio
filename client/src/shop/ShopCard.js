
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
    width: 340px;
    height: 510px;
    max-height: 510px;
    position: relative;
    flex-grow: 0;   
`

const ItemImg = styled.div`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    position: absolute;
    z-index: 3;
    left: 0;
    top:0;
    height: 100%;   
    width: 100%;
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
    &:hover{
        opacity: 1;
        transition: opacity .2s ease-out;
    }
`


const ShopCard = ({item}) => {
    const {
        background_url,
        instagram_handle,
        instagram_url,
        article_name,
        shop_name,
        website_url
    } = item;
    return( 
        <Container>
            <ItemImg backgroundUrl={globals.serverUrl + '/' + background_url}/>

            <HoverDiv backgroundColor={'#FFF'}>
                <Typography>{article_name}</Typography>
                <Typography>{shop_name}</Typography>
                <a href={instagram_url}>
                <Typography> @{instagram_handle} </Typography>
                </a>
                <a href={website_url}>
                    <WebRoundedIcon />
                </a> 
            </HoverDiv>
        </Container>
    );
}

export default ShopCard;