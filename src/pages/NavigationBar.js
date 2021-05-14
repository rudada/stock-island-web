import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!isOpen);
  };

  return (
    <MDBNavbar className="navbar" dark expand="md" fixed="top">
      <MDBNavbarBrand href="/">
        <strong className="white-text"> StockIsland </strong>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active style={{ margin: "15px 20px 0 0" }}>
            <Link to="/board" style={{ color: "white" }}>
              Board
            </Link>
          </MDBNavItem>
          <MDBNavItem style={{ margin: "15px 20px 0 0" }}>
            <Link to="/weekly" style={{ color: "white" }}>
              Weekly
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <IoMdPerson></IoMdPerson>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/mypage">Mypage</MDBDropdownItem>
                <MDBDropdownItem href="/login">LogIn</MDBDropdownItem>
                <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavigationBar;