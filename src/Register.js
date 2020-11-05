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

function Register() {
    return(
        <div>
            <Title>Register</Title>
            <Form id="register-form">
                <Label for="user-name">User Name</Label><br/>
                <Input type="text" id="user-name" name="user-name" placeholder="Enter User Name"/><br/>
                <Label for="first-name">First Name</Label><br/>
                <Input type="text" id="first-name" name="first-name" placeholder="Enter First Name"/><br/>
                <Label for="last-name">Last Name:</Label><br/>
                <Input type="text" id="last-name" name="last-name" placeholder="Enter Last Name"/><br/>
                <Label for="birthday">Birthday</Label><br/>
                <Input type="date" id="birthday" name="birthday" /><br/>
                <Link to="/register2">
                    <Button>Next</Button>
                </Link>
            </Form>

            
        </div>
    )
}

export default Register;