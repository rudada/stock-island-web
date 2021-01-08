import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Seachbar() {
    return (
        <div className="searchbar">
            <div className = "searchbar_title">검색창을 메뉴바 안으로 넣어버릴까</div>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button href="/search" variant="outline-info">Search</Button>
            </Form>
        </div>
    )
}

export default Seachbar;