import React, { Component } from 'react';
import './index.css';

export default class FormInput extends Component {
  state = {
    value: "",
    focused: false,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
    console.log(e.target.value);
  };

  handleFocus = () => {
    this.setState({focused: true});
  }

  render() {
    console.log("re-render");
      const {label, errorMessage, onChange, id, ...inputProps} = this.props;

    return (
      <div className='forminput__cont'>
        <label>{label}</label>
        <input
        {...inputProps}
          onChange={this.handleChange}
          onBlur={this.handleFocus}
          onFocus={inputProps.name === "confirmPassword" ? this.handleFocus : undefined}

        />
        <span>{this.props.errorMessage}</span>
      </div>
    );
  }
}
