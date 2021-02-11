import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ContactForm from "./contactForm/ContactForm";
import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./contactList/ContactList";
// import ContactFilter from "./contactFilter/ContactFilter";
// import { CSSTransition } from "react-transition-group";
import s from "./PhoneBook.module.css";
// import contactsOperations from "../../redux/tasks/contactsOperations";
// import contactsSelectors from "../../redux/tasks/contactsSelectors";
import routes from "../../routes";
import { authOperations } from "../../redux/auth";
import Layout from "../Layout/Layout";
// import Notification from "./notification/Notofication";
// import Insert from "./insert/Insert";

class PhoneBook extends Component {
  componentDidMount() {
    this.props.onfetchContact();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onfetchContact: authOperations.getCurrentUser,
})(PhoneBook);
