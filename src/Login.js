import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
    padding-top: 7vh;
    padding-bottom: 5vh;
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
    margin-top: 10vh;
    padding: 8px;
    background-color: lightgreen;
    border-radius: 5px;
    border: 1px solid grey;
    width: 50vw;
    box-sizing: content-box;
    font-size: 16px;
`;

function Login() {
    return(
        <div>
            <Title>Sign In</Title>
                <Label for="user-name">User Name or E-Mail</Label><br/>
                <Input type="text" id="user-name" name="user-name" placeholder="Enter User Name or E-Mail"/><br/>
                <Label for="password">Password</Label><br/>
                <Input type="text" id="password" name="password" placeholder="Enter your Password"/><br/>
            
                <Link to="register">
                    New User?
                </Link> 
                <br/>
                <Button>Login In</Button>
        </div>
    )
}

export default Login;