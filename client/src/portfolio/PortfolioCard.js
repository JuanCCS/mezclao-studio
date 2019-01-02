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

import PortfolioGallery from './PortfolioGallery';
import globals from '../globals';

const CardContainer = styled.div`
    flex-grow: 1;
    width: 90%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
`

const StyledCard = styled(Card)`
    max-height: 80px;
`
const SlideContainer = styled.div`
    height: 304px;
    width: 100%;
`
const StyledCardHeader = styled(CardHeader)`
`;

/**
 * Card that renders an Portfolio Card sort of
 */
class PortfolioCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pics: [],
            currentClient: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.currentClient != this.props.currentClient){
            let newClient = this.props.currentClient;
            fetch(globals.serverUrl + '/clients/' + newClient).then((res)=> {
                res.json().then((json)=>
                    {
                        this.setState({pics: json.pics, currentClient: newClient})
                    } 
                )}
            )
        }
    }   

    render() {
        return (
            <CardContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={
                        <Avatar src="favicon.ico">
                        </Avatar>
                    }

                    title="@ m e z c l a o . s t u d i o"
                    subheader="September 14, 2016"
                />

            </StyledCard>
            <PortfolioGallery 
                currentClient={this.state.currentClient} 
                pics={this.state.pics}              
                initialPic={this.state.pics[0]}>
            </PortfolioGallery>
            <StyledCard>
                <StyledCardHeader
                    avatar={
                        <Avatar src="favicon.ico">
                        </Avatar>
                    }

                    title={this.props.currentClient}
                    subheader="September 14, 2016"
                />

            </StyledCard>
            </CardContainer>);
    }
}

export default PortfolioCard;