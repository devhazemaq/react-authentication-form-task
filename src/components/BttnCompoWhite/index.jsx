import React, { Component } from 'react'
import './index.css'



export default class BttnCompoWhite extends Component {
  render() {
    const {btnTexe} = this.props;
    return (
      <div className='bttncompowhite__contain'>
        <button>{btnTexe}</button>
      </div>
    )
  }
}
