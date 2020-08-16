import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Header () {
    return (
        <header>
            <Jumbotron fluid className="py-3 header-background">
                <Container className="text-center">
                    <h1>Employee Directory</h1>
                    <p>Use search box to narrow your results.</p>
                </Container>
            </Jumbotron>
        </header>
    );
};

export default Header;