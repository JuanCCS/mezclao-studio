import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core'


const StyledSvg = styled.img`
  color: white !important;
  fill: white !important;
  height: 24px;
  padding: 5px;
  margin-right: 2px;
`
const StyledGridItem = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SocialMediaIcon = props => {
    return (
        <StyledGridItem item xs={3}>
        <a href={props.item.link}>
            <StyledSvg src={props.item.src}></StyledSvg>
        </a>
        </StyledGridItem>
        )
}

const SocialMediaGrid = props => {
    const icons = props.socialMediaAccounts.map(icon=>{
        return(<SocialMediaIcon item={icon}/>)
    })

    return(
        <Grid container spacing={8}>
            {icons}
        </Grid>)
}

export default SocialMediaGrid;