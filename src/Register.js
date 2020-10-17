import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Form = styled("register-form")`

`;

function Register() {
    return(
        <div>
            <h1>Register</h1>
            <form id="register-form">
                <label for="user-name">User Name</label><br/>
                <input type="text" id="user-name" name="user-name" /><br/>
                <label for="first-name">First Name</label><br/>
                <input type="text" id="first-name" name="first-name" /><br/>
                <label for="last-name">Last Name:</label><br/>
                <input type="text" id="last-name" name="last-name" />
                <button >Next</button>
            </form>

            <Link to="/">
                <button>enter</button>
            </Link>
        </div>
    )
}

export default Register;