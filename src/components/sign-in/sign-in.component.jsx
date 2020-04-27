import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firabase.utils';
import './sign-in.styles.scss';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = credentials;
    try {
      await auth.signInWithEmailAndPassword(email, password)
    setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error)
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={credentials.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={credentials.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
