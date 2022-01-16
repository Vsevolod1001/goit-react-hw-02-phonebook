import React, {Component} from "react";
import shortid from "shortid";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './Filter'

class App extends Component{
  state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = ({name, number}) => {
    // if (this.getVisibleContacts(name)) {
    //   alert(`${name} already exists`);
    //   return;
    // }
    const contact = {
      id: shortid.generate(),
      name,
      number
      
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }))
  }
  chandeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  handleChange = e => {
    this.setState({name: e.currentTarget.value});
};
handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state.name);
    this.setState({name: ''})
};
getVisibleContacts = () => {
  const { filter, contacts} = this.state
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)
    )
}
  render() {
    const {contacts, filter} = this.state;
    
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact}/>
            <Filter value={filter} onChange={this.chandeFilter}/>
            <ContactList 
             contacts={visibleContacts}
             onDeleteContact={this.deleteContact}
             />
      </div>
    )
  }
}
export default App;
