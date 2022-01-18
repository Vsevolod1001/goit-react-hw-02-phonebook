import React from "react";
import './ContactList.css'
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";

const ContactList = ({contacts, onDeleteContact}) => (
    <div>        
        {contacts.map(({id, name, number}) => (
            <ul key={id} className="ContactUl">
             <Contact 
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
             />   
               
            </ul>
        ))}
    </div>
)
ContactList.propTypes= {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired
};
export default ContactList;