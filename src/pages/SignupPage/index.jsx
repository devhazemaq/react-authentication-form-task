import React, { Component } from 'react'



export default class SignupPage extends Component {
  
  

  render() {
    // const IMAGE_BACKG = '/assets/images/Image-Backeground.png';
    const LOGO_2 = '/assets/images/Logo-2.png';

    return (
      <div className='signup__contain'>
          <div className="signup__show">
            <img src={LOGO_2} alt="LOGO_2" />
            <div className="signup__show__info"> 
              {/* هاد عشان ألم فيه اللإقتباس والفكتور  */}
              

            </div>
          </div>
      </div>
    )
  }
}
