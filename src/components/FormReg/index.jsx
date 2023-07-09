import React, { Component } from 'react'
import './index.css'
import FormInput from '../FormInput';
import CheckCompo from '../CheckCompo';
import BttnCompoBlue from '../BttnCompoBlue';
import BttnCompoWhite from '../BttnCompoWhite';

export default class FormReg extends Component {

  state = {
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  };

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };
    
  
  render() {
    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
        "Username should be 3-16 characters long and should not include any special characters!",
        label: "Username*",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "emailAddress*",
        type: "email",
        placeholder: "Enter email address",
        errorMessage:
        "The input should be a valid email address!",
        label: "Email Address*",
        required: true,
      },
      {
        id: 3,
        name: "theNumber",
        type: "text",
        placeholder: "ُEnter The Namber",
        errorMessage:
        "Enter the number correctly",
        label: "Your Number*",
        pattern: "^(\\+970|\\+972)\\d{9}$",
        required: true,
      },

      {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password*",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password*",
        pattern: this.state.password,
        required: true,
      },
    ];

    return (

      <form className='form__contain'>
        {inputs.map((input) => (
          <FormInput 
            key={input.id}
            {...input}
            value={this.state[input.name]} 
            onChange={(value) => this.handleInputChange(input.name, value)}
          />
        ))}
        <CheckCompo />
        <BttnCompoBlue btnTexe ="Register Account" />
        
        <p className='word__or'>Or</p>
        <BttnCompoWhite btnTexe ="Login" />
      </form>
    )
  }
}
