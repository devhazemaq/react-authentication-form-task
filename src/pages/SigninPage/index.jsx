import React, { Component } from 'react'
import Quote from '../../components/Quote'
import './index.css'
import SigninTitle from '../../components/SigninTitle';

export default class SigninPage extends Component {
  render() {

    const LOGO_1 = '/assets/images/Logo-1.png';
    const IMAGE_CONTROLLER = '/assets/images/Image-Controller.png';
    return (
      
      <div className='signinpage__contain'>
        <div className="signip__show">
          <div className="show__cont__signin">
            <img src={LOGO_1} alt="LOGO_1" className='logo__1' />
            <div className="signin__show__info">
              <Quote />
              <img src={IMAGE_CONTROLLER} alt="IMAGE_CONTROLLER" />
            </div>
          </div>
        </div>
        <div className="form__cont">
          {/* <SigninTitle /> */}
          
        </div>
      </div>
    )
  }
}
