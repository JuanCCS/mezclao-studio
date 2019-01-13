
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled(Paper)`
    background: url(${props=>props.backgroundColor});
    width: 340px;
    height: 510px;
    position: relative;
`

const ItemImg = styled.div`
    background: url(${props=>props.backgroundImg}) cover;
    position: absolute;
    z-index: 3;
`

const HoverDiv = styled.div`
    background: url(${props=>props.backgroundColor});
    position: absolute;
    z-index: 9;
`


const ShopCard = ({item}) => {
    return( 
        <div></div>
    );
}

export default ShopCard;