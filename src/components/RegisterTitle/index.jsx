import React, { Component } from 'react'
import './index.css'

export default class RegisterTitle extends Component {
  render() {
    return (
      <div className='registertitle__contain'>
        <h2 className='regist__title'>Register Individual Account!</h2>
        <p className='regist__text'>For the purpose of gamers regulation, your details are required.</p>
      </div>
    )
  }
}
