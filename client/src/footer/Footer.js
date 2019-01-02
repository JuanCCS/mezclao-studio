import React, { Component } from 'react';
import styled from 'styled-components';
import { BottomNavigation } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: #723485;
`;

/**
 * Renders the Portfolio Section
 * 
 */
class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <BottomNavigation></BottomNavigation>
            </Container>
            )
    }
}

export default Footer;