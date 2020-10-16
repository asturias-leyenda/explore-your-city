import React from 'react';
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Home</h1>
                <Link to="/register">
                    <button>enter</button>
                </Link>   
        </div>
    )
}

export default Home;