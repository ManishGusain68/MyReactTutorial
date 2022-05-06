import React from "react";

function Header({name, title}){
    return (
        <div>
            <h1>Header..</h1>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>this is header component</p>

        </div>
    );
}

export default Header;