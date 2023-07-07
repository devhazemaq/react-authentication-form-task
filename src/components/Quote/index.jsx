import React, { Component } from 'react'

import './index.css'


export default class Quote extends Component {
  render() {
    const {quoteColor  } = this.props;
    return (
      <div className ='quote__contain ' >

        <p className={`quote__quotation ${quoteColor  ? "quote__color__blue" : "quote__color__gray"}`}>“</p>

        <p className='quote__text'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
        <p className='quote__saying'>Hideo Kojima</p>
      </div>   
    )
  }
}
