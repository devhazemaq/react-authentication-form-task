import React, { Component } from 'react'
import Quote from '../../components/Quote';
import './index.css'
import BackCompo from '../../components/BackCompo';
import RegisterTitle from '../../components/RegisterTitle';


export default class SignupPage extends Component {
  
  

  render() {
    // const IMAGE_BACKG = '/assets/images/Image-Backeground.png';
    const LOGO_2 = '/assets/images/Logo-2.png';
    const SHAPE_1 = '/assets/images/Vector-Shape-1.png'

    return (
      <div className='signup__contain'>
          <div className="signup__show">

            <div className="show__cont">
              <img src={LOGO_2} alt="LOGO_2" className='logo__2' />

              <div className="signup__show__info"> 
                {/* هاد عشان ألم فيه اللإقتباس والفكتور  */}

                <Quote quoteColor />
                <img src={SHAPE_1} alt="SHAPE_1" />
              </div>
            </div>            
          </div>
          <div className="form__cont">
            
              <BackCompo />
              <RegisterTitle />

            </div>
      </div>
    )
  }
}
