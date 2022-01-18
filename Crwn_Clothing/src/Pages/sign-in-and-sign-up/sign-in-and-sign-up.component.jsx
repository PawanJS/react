import React from 'react';

import SignIn from '../../Components/Sign-In/sign-in.component';
import SignUp from '../../Components/Sign-Up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
