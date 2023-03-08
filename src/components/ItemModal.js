import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "reactstrap";
import { addName, loading } from "../actions/action";

const ItemModal = () => {
  const userState = useSelector((state) => state.loginRegisterReducer);
  const userDetails = userState;

  //
  const [modal, setModal] = useState(false);
  const [getName, setName] = useState("");
  //
  const dispatch = useDispatch();

  const [buttonDissabled, setButtonDissabled] = useState(false);

  const toggleDrawer = () => {
    setButtonDissabled(true);
    if (
      userDetails.token !== undefined &&
      userDetails.token !== null &&
      userDetails.token !== ""
    ) {
      setName("");
      setModal(!modal);
      setButtonDissabled(false);
    } else {
      alert("Sorry! you can't add new item please login or register with us.");
      setButtonDissabled(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (getName !== "") {
      const newItem = {
        name: getName,
      };
      dispatch(loading(true));
      dispatch(addName(userDetails.token, newItem));
      setName("");
      toggleDrawer();
      setTimeout(() => {
        dispatch(loading(false));
      }, 2000);
    }
  };

  return (
    <>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={toggleDrawer}
        disabled={buttonDissabled}
      >
        Add Item 📦
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggleDrawer} className="bg-light text-dark">
          Add Item 📦
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="nametag">Enter Item Name</Label>
              <Input
                type="text"
                id="nametag"
                placeholder="Enter Item Name"
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                value={getName}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="white"
            onClick={onSubmit}
            className="btn btn-outline-success"
          >
            Add Item ✅
          </Button>
          <Button
            color="white"
            onClick={toggleDrawer}
            className="btn btn-outline-danger"
          >
            Cancel ❌
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ItemModal;

// some code for personal use
// external={
//   <button
//     className="close"
//     // onClick={{}}
//     style={{ position: "absolute", right: "15px", top: "15px" }}
//   >
//     ×
//   </button>
// }
// toggle={() => {}}
