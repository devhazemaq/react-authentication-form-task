import React, { Component } from 'react'
import './index.css'

export default class BttnCompoBlue extends Component {
  render() {
    const {btnTexe} = this.props;
    return (
      <div className='bttncompoblue__contain'>
        <button>{btnTexe}</button>
      </div>
    )
  }
}
