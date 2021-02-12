import React from "react";
import OneContact from "../OneContact/OneContact";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/phoneAction";
import { removeContact } from "../../redux/operation/phoneOperations";
import { getVisibleContacts } from "../../redux/selectors/phoneSelector";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./AllContacts.css";

const AllContacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const userDeleteHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(removeContact(id));
    dispatch(setFilter(""));
  };

  return (
    <TransitionGroup component="ul" className="wrapper">
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames="listItem">
          <OneContact contact={contact} userDeleteHandler={userDeleteHandler} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default AllContacts;
