import React from "react";
import './ContactList.css'

const ContactList = ({contacts, onDeleteContact}) => (
    <div>
        <h2>Contacts</h2>
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

export default ContactList;