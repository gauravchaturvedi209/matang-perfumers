import React, {useState} from "react";
import { connect } from "react-redux";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';


const SignIn = ({googleSignInStart,emailSignInStart }) => {
  
  const [userCrendentials, setCredentials] = useState({email:'', password:''})
  
  const {email, password} = userCrendentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email,password);
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCrendentials, [name] : value});
  }

  return(
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={email} 
          required
          handleChange={handleChange}
          label="email"  
        />
        
        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          required 
          handleChange={handleChange}
          label="password"  
        />
        <div className="button">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick= {googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);