import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function HomeSeachbar() {
    return (
        // <div className="searchbar">
        //     <div className="title">STOCK ISLAND</div>
        //     <Form inline className="search_input">
        //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //         <Button href="/search" variant="outline-info">Search</Button>
        //     </Form>
        // </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="2"></MDBCol>
            <MDBCol sm="8" className="title">Stock island</MDBCol>
            <MDBCol sm="2"></MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol sm="2"></MDBCol>
            <MDBCol sm="8"  >
    
                  
                        <input className="bar_style" type="text" placeholder="Search" aria-label="Search"/>

            
            </MDBCol>
            <MDBCol sm="2"></MDBCol>
          </MDBRow>
        </MDBContainer>
    )
}

export default HomeSeachbar;