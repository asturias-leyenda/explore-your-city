import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
    padding-top: 7vh;
    padding-bottom: 5vh;
`;

const Form = styled.form`
    display: block;
    width: 80vw;
    margin: auto;
`;
const Input = styled.input`
    margin-top: 1vh;
    margin-bottom: 4vh;
    padding: 8px;
    background-color: rgb(230, 230, 230);
    border-radius: 5px;
    border: 1px solid grey;
    width: 50vw;
`;
const Label = styled.label`
    margin-bottom: 0px;
    text-align: left;
`;

const Button = styled.button`
    padding: 8px;
    background-color: lightgreen;
    border-radius: 5px;
    border: 1px solid grey;
    width: 50vw;
    box-sizing: content-box;
    font-size: 16px;
`;


function Register2() {
    return (
        <div>
            <Title>Register</Title>
            <Form id="register-form">
                <Label for="e-mail">E-Mail</Label><br/>
                <Input type="e-mail" id="e-mail" name="e-mail" placeholder="Enter your E-Mail"/><br/>
                <Label for="password">Password</Label><br/>
                <Input type="text" id="password" name="password" placeholder="Choose a Password"/><br/>
                <Label for="last-name">Confirm Password</Label><br/>
                <Input type="text" id="confirm-password" name="confirm-password" placeholder="Confirm the Password"/><br/>
             
                <Link to="/">
                    <Button>Next</Button>
                </Link>
            </Form>


        </div>
    )
}

export default Register2;