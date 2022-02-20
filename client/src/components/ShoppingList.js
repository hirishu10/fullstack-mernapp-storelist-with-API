import React, { useEffect } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { getAllNames, deleteName, loading } from "../actions/action";

const ShoppingList = () => {
  const getState = useSelector((state) => state.actionCombined);
  const dispatch = useDispatch();

  const items = getState.items;
  let refresh = getState.loading;
  let dataLength = getState.length;

  useEffect(() => {
    dispatch(getAllNames());
    setTimeout(() => {
      dispatch(loading(false));
    }, 500);
  }, [dispatch, refresh]);

  return (
    <>
      <Container>
        {!refresh ? (
          dataLength <= 0 ? (
            <div
              className="text-dark"
              style={{
                display: "flex",
              }}
            >
              <p style={{ paddingLeft: 5 }}>
                🗳 Sorry Nothing to show please add new item!
              </p>
            </div>
          ) : (
            <ListGroup>
              <TransitionGroup className="name-list">
                {items.map(({ _id, name }, index) => (
                  <CSSTransition key={index} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={() => {
                          const deleteItem = {
                            id: _id,
                          };
                          dispatch(loading(true));
                          dispatch(deleteName(deleteItem));
                          setTimeout(() => {
                            dispatch(loading(false));
                          }, 500);
                        }}
                      >
                        &times;
                      </Button>
                      {`${index}: ${name} `}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup>
          )
        ) : (
          <div
            className="text-dark"
            style={{
              display: "flex",
            }}
          >
            <div>
              <Spinner size="sm">Loading...</Spinner>
            </div>
            <p style={{ paddingLeft: 5 }}>
              Data receiving from the server.....
            </p>
          </div>
        )}
      </Container>
    </>
  );
};

export default ShoppingList;
