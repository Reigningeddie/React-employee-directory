import React from 'react';
import { Form, Button } from 'react-bootstrap'

function SearchBar(props) {
    return (
        <div className="searchbox">
            <Form className="form-inline">
                <input 
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                />
                <Button className="btn my-2 my-sm-0" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchBar;