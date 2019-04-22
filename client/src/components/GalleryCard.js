import React, {Component} from 'react'
import styled from 'styled-components'
import globals from '../globals'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
`

const CardImage = styled.img`
    border-radius: 0px;
    width: 100%;
    height: auto;
    margin-bottom: -3px;
    z-index: 1;
`

const HoverDiv = styled.div`
    background: red;
    position: absolute;
    z-index: 3;
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

const GalleryCard = (props) => {
    console.log(props.clientObj)
    const self = this;
    return(
        <Container height={props.height} onClick={ (e) => {
            e.preventDefault()
            props.handleGalleryCardSelected(props.clientName)
        }}>
            <CardImage src={globals.serverUrl + '/' + props.clientName + '/' + props.clientObj.cover} client={props.clientObj}>
            </CardImage>
            <HoverDiv></HoverDiv>
    </Container> )}

export default GalleryCard;