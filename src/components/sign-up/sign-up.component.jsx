import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { auth, createUserProfileDocument } from '../../firebase/firabase.utils';

import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({displayName, email, password})
  };

  const handleChangeDisplayName = (event) => {
    setDisplayName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          handleChange={handleChangeDisplayName}
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          handleChange={handleChangeEmail}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChangePassword}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <FormInput
          handleChange={handleChangeConfirmPassword}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
