import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Seachbar() {
    return (
        <div className="searchbar">
            <div className = "searchbar_title">stock island</div>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button href="/search" variant="outline-info">Search</Button>
            </Form>
        </div>
    )
}

export default Seachbar;