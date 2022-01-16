import React from "react";
import './ContactList.css'
import PropTypes from "prop-types";

const ContactList = ({contacts, onDeleteContact}) => (
    <div>        
        {contacts.map(({id, name, number}) => (
            <ul key={id} className="ContactUl">
                
                    <li className="ContactLi">                        
                        <p className="ContactP">{name}:</p>
                    </li>
                    <li>                        
                        <p className="ContactP">{number}</p>
                    </li>
                
                <button 
                className="ContactBtn"
                onClick={()=> onDeleteContact(id)}
                >delete
                </button>
            </ul>
        ))}
    </div>
)
ContactList.propTypes= {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};
export default ContactList;