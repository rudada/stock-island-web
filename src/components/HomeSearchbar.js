import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function HomeSeachbar() {
    return (
        <div className="searchbar">
            <div className="title">STOCK ISLAND</div>
            <Form inline className="search_input">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button href="/search" variant="outline-info">Search</Button>
            </Form>
        </div>
    )
}

export default HomeSeachbar;