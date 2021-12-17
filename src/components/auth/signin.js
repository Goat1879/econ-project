import React, { Component } from "react";
import SignInForm from "./signinForm";


class SignIn extends Component {

   onSubmit = (fields) => {
       console.log(fields);
   } 


    render() {
        return (
            <div className="signin">
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;