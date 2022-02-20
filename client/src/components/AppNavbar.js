import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  CardImg,
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <div className="" style={{ backgroundColor: "#252D3A" }}>
          <Container>
            <Navbar
              dark
              expand="sm"
              className="mb-5"
              style={{ paddingLeft: 50, backgroundColor: "#252D3A" }}
            >
              <div
                style={{
                  marginTop: -10,
                  width: 50,
                  height: 40,
                  marginRight: 10,
                  backgroundColor: "#252D3A",
                }}
              >
                <CardImg
                  src="https://raw.githubusercontent.com/hirishu10/my-assets/main/nav.png"
                  alt="mern-logo"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <NavbarBrand href="/">Store List</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar className="">
                <Nav
                  className="me-auto"
                  navbar
                  style={{
                    marginLeft: this.state.isOpen ? 0 : 900,
                  }}
                >
                  <NavItem>
                    <NavLink href="https://github.com/hirishu10">
                      Github
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Container>
        </div>
      </>
    );
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default AppNavbar;
