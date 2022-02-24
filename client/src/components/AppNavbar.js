import React, { useEffect, useState } from "react";
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
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Alert,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { registerAccount, loginAccount } from "../actions/loginRegisterAction";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const getState = useSelector((state) => state.loginRegisterReducer);
  const userDetails = getState;

  // Login state
  const [isLogin, setIsLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState(
    userDetails.defaultAccountForEveryone.email
  );
  const [loginPassword, setLoginPassword] = useState(
    userDetails.defaultAccountForEveryone.password
  );

  // Register state
  const [isRegister, setIsRegister] = useState(false);
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  // Other state
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [buttonDissabled, setButtonDissabled] = useState(false);

  // method
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Login Method for Toggle
   *
   *  true to false
   *
   * or
   *
   * false to true
   */
  const loginToggle = () => {
    setIsLogin(!isLogin);
    setLoginError("");
  };

  /**
   * Register Method for Toggle
   *
   *  true to false
   *
   * or
   *
   * false to true
   */
  const registerToggle = () => {
    setIsRegister(!isRegister);
    setRegisterError("");
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
  };

  /**
   * Dispatch the login function
   */
  const loginSubmit = () => {
    setButtonDissabled(true);
    if (!loginEmail || !loginPassword) {
      setLoginError("Please Enter all fields");
      setButtonDissabled(false);
    } else {
      dispatch(loginAccount(loginEmail, loginPassword));
      setButtonDissabled(false);
    }
  };

  /**
   * Dispatch the Register function
   */
  const registerOnSubmit = () => {
    if (!registerName || !registerEmail || !registerPassword) {
      setRegisterError("Please Enter all fields");
    } else {
      dispatch(registerAccount(registerName, registerEmail, registerPassword));
    }
  };

  //
  useEffect(() => {
    /**
     * Display the Register Error Message which was poping from the server or API If have error
     */
    setRegisterError(userDetails.details?.message);
    //
    /**
     * Display the Login Error Message which was poping from the server or API If have error
     */
    setLoginError(userDetails.details?.message);
    //
    if (userDetails?.token !== "") {
      setUser(userDetails?.currentUser);
      setIsRegister(false);
      setIsLogin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userDetails]);
  //

  return (
    <>
      <div className="" style={{ backgroundColor: "#252D3A" }}>
        <Container>
          <Navbar
            dark
            expand="sm"
            className="mb-5"
            style={{
              paddingLeft: 50,
              backgroundColor: "#252D3A",
            }}
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
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="">
              <Nav
                className="me-auto"
                navbar
                style={{
                  marginLeft: isOpen ? 0 : 600,
                }}
              >
                <NavItem style={{ marginRight: user === "" ? 150 : 50 }}>
                  <NavLink href="https://github.com/hirishu10">Github</NavLink>
                </NavItem>
                {/* Login Register Button */}
                {user === "" ? (
                  <Container
                    style={{
                      display: "flex",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <NavItem>
                      <NavLink href="#" onClick={registerToggle}>
                        Register
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">|</NavLink>
                    </NavItem>
                    <NavItem style={{ cursor: "pointer" }}>
                      <NavLink href="#" onClick={loginToggle}>
                        Login
                      </NavLink>
                    </NavItem>
                  </Container>
                ) : (
                  <Container
                    style={{
                      width: 250,
                      display: "flex",
                      margin: 0,
                      padding: 0,
                      paddingTop: 8,
                      color: "white",
                    }}
                  >
                    <span>{`Welcome, ${user.name}`}</span>
                  </Container>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      {/* Login Modal */}
      <>
        <Modal isOpen={isLogin}>
          <ModalHeader toggle={loginToggle} className="bg-light text-dark">
            Login with us for Free!
          </ModalHeader>
          <ModalBody>
            {loginError && loginError !== "" ? (
              <Alert color="danger">{loginError}</Alert>
            ) : null}
            <Form onSubmit={loginSubmit}>
              <FormGroup>
                <Label htmlFor="emailtag">Email Id:</Label>
                <Input
                  type="email"
                  id="emailtag"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => {
                    e.preventDefault();
                    setLoginEmail(e.target.value);
                    setLoginError("");
                  }}
                  value={loginEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="passwordtag">Password:</Label>
                <Input
                  type="password"
                  id="passwordtag"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => {
                    e.preventDefault();
                    setLoginPassword(e.target.value);
                    setLoginError("");
                  }}
                  value={loginPassword}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="white"
              onClick={loginSubmit}
              className="btn btn-outline-success"
              disabled={buttonDissabled}
            >
              Login ✅
            </Button>
            <Button
              color="white"
              onClick={loginToggle}
              className="btn btn-outline-danger"
            >
              Cancel ❌
            </Button>
          </ModalFooter>
        </Modal>
      </>
      {/* Login Modal */}
      {/*  */}
      {/* Register Modal */}
      <>
        <Modal isOpen={isRegister}>
          <ModalHeader toggle={registerToggle} className="bg-light text-dark">
            Create an Account for Free!
          </ModalHeader>
          <ModalBody>
            {registerError && registerError !== "" ? (
              <Alert color="danger">{registerError}</Alert>
            ) : null}
            <Form onSubmit={registerOnSubmit}>
              <FormGroup>
                <Label htmlFor="nametag">Name:</Label>
                <Input
                  type="text"
                  id="nametag"
                  placeholder="Name"
                  className="form-control"
                  onChange={(e) => {
                    e.preventDefault();
                    setRegisterName(e.target.value);
                    setRegisterError("");
                  }}
                  value={registerName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="emailtag">Email Id:</Label>
                <Input
                  type="email"
                  id="emailtag"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => {
                    e.preventDefault();
                    setRegisterEmail(e.target.value);
                    setRegisterError("");
                  }}
                  value={registerEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="passwordtag">Password:</Label>
                <Input
                  type="password"
                  id="passwordtag"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => {
                    e.preventDefault();
                    setRegisterPassword(e.target.value);
                    setRegisterError("");
                  }}
                  value={registerPassword}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="white"
              onClick={registerOnSubmit}
              className="btn btn-outline-success"
              disabled={buttonDissabled}
            >
              Register ✅
            </Button>
            <Button
              color="white"
              onClick={registerToggle}
              className="btn btn-outline-danger"
            >
              Cancel ❌
            </Button>
          </ModalFooter>
        </Modal>
      </>
      {/* Register Modal */}
    </>
  );
};
export default AppNavbar;
