import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/phoneBook/contactForm/ContactForm";
import Filter from "../components/phoneBook/contactFilter/ContactFilter";
import ContactList from "../components/phoneBook/contactList/ContactList";
import contactsOperations from "../redux/tasks/contactsOperations";
import contactsSelectors from "../redux/tasks/contactsSelectors";

class TaskerView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <ContactForm />
        {/* {this.props.isLoadingTasks && <h1>Doing HTTP stuff...</h1>} */}
        {/* <Filter /> */}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskerView);
