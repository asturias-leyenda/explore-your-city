import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Form = styled.form`
`;
const Input = styled.input`
    margin: 5px 30px 20px;
    padding: 5px;
    background-color: rgb(230, 230, 230);
    border-radius: 5px;
    border: 1px solid grey;
`;
const Label = styled.label`
    margin-bottom: 0px;
`;
const Button = styled.button`
    margin: 10px;
    padding: 5px;
    background-color: lightgreen;
    border-radius: 5px;
    border: 1px solid grey;
    width: 40%;
`;
function Register() {
    return(
        <div>
            <h1>Register</h1>
            <Form id="register-form">
                <Label for="user-name">User Name</Label><br/>
                <Input type="text" id="user-name" name="user-name" placeholder="Enter User Name"/><br/>
                <Label for="first-name">First Name</Label><br/>
                <Input type="text" id="first-name" name="first-name" /><br/>
                <Label for="last-name">Last Name:</Label><br/>
                <Input type="text" id="last-name" name="last-name" /><br/>
                <Label for="birthday">Birthday</Label><br/>
                <Input type="date" id="birthday" name="birthday" /><br/>
                <Button >Next</Button>
            </Form>

            <Link to="/">
                <Button>enter</Button>
            </Link>
        </div>
    )
}

export default Register;