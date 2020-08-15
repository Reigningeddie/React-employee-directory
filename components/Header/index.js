import React from "react";
import { Jumbotron } from "react-bootstrap";

function Header () {
    return (
        <header>
            <Jumbotron className="header-background">
                <div>
                    <h1>Employee Directory</h1>
                </div>
            </Jumbotron>
        </header>
    )
}

export default Header;