import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [modal, setModal] = useState(false);
  const [getName, setName] = useState("");
  //
  const dispatch = useDispatch();

  const toggle = () => {
    setName("");
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (getName !== "") {
      const newItem = {
        name: getName,
      };
      dispatch(loading(true));
      dispatch(addName(newItem));
      setName("");
      toggle();
      setTimeout(() => {
        dispatch(loading(false));
      }, 1000);
    }
  };

  return (
    <>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item 📦
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle} className="bg-light text-dark">
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
            onClick={toggle}
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

// some code
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
