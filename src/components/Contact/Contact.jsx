import React from "react";
const Contact = ({name, number, id, onDeleteContact}) => {
    return (
        <>
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
        </>
    )
}
export default Contact