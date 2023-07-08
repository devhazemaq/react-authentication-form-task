import React, { Component } from 'react'
import './index.css'
import FormInput from '../FormInput';

export default class FormReg extends Component {

  state = {
    username: "",
    email: "",
    birthday: "",
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
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
    ];

    return (

      <form className='form__contain'>
        {inputs.map((input) => (
          <FormInput 
            key={input.id}
            placeholder={input.placeholder}
            value={this.state[input.name]} 
            onChange={(value) => this.handleInputChange(input.name, value)}
          />
        ))}
      </form>
    )
  }
}
