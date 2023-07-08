import React, { Component } from 'react';
import './index.css';

export default class FormInput extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
    console.log(e.target.value);
  };

  render() {
    console.log("re-render");

    return (
      <div className='forminput__cont'>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
