import React, { Component } from 'react'
import './index.css'

export default class CheckCompo extends Component {
  render() {
    return (
      <div className='checkcompo__contain'>
        <input type="checkbox" id="agree" name="agree" checked />
        <label htmlFor="agree">I agree to terms & conditions</label>

      </div>
    )
  }
}
