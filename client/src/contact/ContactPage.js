import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper, TextField } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #60F64F;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopContainer = styled(Paper)`
    width: 90%;
    max-width: 640px;
    height: 90%;
    position: relative;
`;

const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

/**
 * Renders the Portfolio Section
 * 
 */
class ContactPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <FormContainer noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        margin="normal"
                    />
                    <TextField
                        id="standard-uncontrolled"
                        label="Uncontrolled"
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        margin="normal"
                    />
                </FormContainer>
            </Container>
        )
    }
}

export default ContactPage;