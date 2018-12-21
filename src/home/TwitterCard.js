import React, { Component } from 'react';
import styled from 'styled-components';
import BannerSlide from './BannerSlide';
import {
    Card,
    CardHeader,
    Avatar,
    CardActions,
    IconButton,
    CardContent
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'

const StyledCard = styled(Card)`
    width: 90%;
    max-width: 640px;
    border-radius: none !important;
    padding-right: 20px;
    padding-bottom: 20px;
`
const SlideContainer = styled.div`
    height: 304px;
    width: 80%;
    padding-left: 20%;
    border-radius: 10px;
    box-shadow: 2px #000;
`
const StyledCardHeader = styled(CardHeader)`
    border-radius: none;
`;

/**
 * 
 * Card that renders an Instagram post sort of 
 * 
 * @TODO Fix Animations
 * @TODO Fix SVGS
 * @TODO Implement Switch Post on Like
 * @TODO Implement like counter
 * @TODO Fix Colors
 * @TODO Implement Banner State Machine
 * @TODO Fix Shadows
 * @TODO Fix Round Borders
 * @TODO Fix Header
 */
class TwitterCard extends React.Component {

    switchCards(){
        console.log('Switch Cards');
    }

    render() {
        return (
            <StyledCard>
                <StyledCardHeader
                    avatar={
                        <Avatar src="favicon.ico">
                        </Avatar>
                    }

                    title="@ m e z c l a o . s t u d i o"
                    subheader="September 14, 2016"
                />
                <SlideContainer>
                    <BannerSlide></BannerSlide>
                </SlideContainer>
                <CardActions>
                    <IconButton aria-label="Add to favorites" onClick={this.switchCards}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </StyledCard>);
    }
}

export default TwitterCard;