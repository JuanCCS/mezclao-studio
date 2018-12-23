import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Card,
    CardHeader,
    Avatar,
    CardActions,
    IconButton,
    CardContent
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'
import PortfolioGallery from './PortfolioGallery';

const StyledCard = styled(Card)`
    width: 90%;
    flex-grow: 1;
    max-width: 640px;
    border-radius: none !important;
`
const SlideContainer = styled.div`
    height: 304px;
    width: 100%;
`
const StyledCardHeader = styled(CardHeader)`
    border-radius: none;
`;

/**
 * Card that renders an Portfolio Card sort of
 */
class PortfolioCard extends React.Component {

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
                <PortfolioGallery>
                </PortfolioGallery>
               
                <CardContent>
                    <span> @ m e z c l a o . s t u d i o </span> # p l a y . # p a t t e r n . # s h a p e
                </CardContent>
            </StyledCard>);
    }
}

export default PortfolioCard;