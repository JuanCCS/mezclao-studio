import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Paper,
    Grid,
    Typography
} from '@material-ui/core'

import PortfolioGallery from './PortfolioGallery';
import globals from '../globals';

const FlexContainer = styled.div`
    height: 100%;
    padding: 20px;
`

const PortfolioPaper = styled(Paper)`
    width: 100%;
    height: 90%;
`

const StyledGridRow = styled(Grid)`
    height: 100%;
`

const ImgContainer = styled(Grid)`

`

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
            <FlexContainer>
                <PortfolioPaper>
                    <StyledGridRow container spacing={24}>
                        <Grid item md={6} sm={12}>
                            <PortfolioGallery 
                                currentClient={this.state.currentClient} 
                                pics={this.state.pics}              
                                initialPic={this.state.pics[0]}>
                            </PortfolioGallery>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Paper>
                                <Typography>ABCDE</Typography>
                            </Paper>
                        </Grid>
                    </StyledGridRow>
                </PortfolioPaper>
            </FlexContainer>
        );
    }
}
export default PortfolioCard;