import React, { ReactDOM } from "react";

export default function NavigationBar(){
    return(
        <>
        <div className="navbar">
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
        </div>

        <nav>
            <ul className="navbar">
                <li className="navbar"><a href="/">Projects</a></li>
                <li className="navbar"><a href="/">Skills</a></li>
                <li className="navbar"><a href="/">Experience</a></li>
                <li className="navbar"><a href="/">CV</a></li>
            </ul>
        </nav>
        </>
    )
}