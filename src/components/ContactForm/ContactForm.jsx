import React, {Component} from "react";
import './ContactForm.css'

class ContactForm extends Component{
    state = {
        contacts: [],
        name: '',
        number: ''
    };
    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({name: '', number: ''})
    };

    render() {
        return(
            <div>
            <form 
            className="ContactForm"
            onSubmit={this.handleSubmit}>
                <label className="ContactLable"> Name: 
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
              />
                </label>
                <label className="ContactLable"> Number: 
                <input
                 value={this.state.number}
                 onChange={this.handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>
              <button 
              className="btnForm"
                type="submit"
                >
                  add contact
              </button>
            </form>
              
          </div>
        );
    }
}
export default ContactForm