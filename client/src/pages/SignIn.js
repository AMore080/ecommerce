import React from 'react';
import { Container, Spacer } from "@nextui-org/react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const SignIn = () => {
  return (
    <>
      <Container fluid css={{ d: 'flex', flexWrap: 'nowrap' }} className='forms'>
        {/* Login Form */}
        <Login />

        <Spacer x={2} />
        {/* Signup Form */}
        <SignUp />
      </Container>
    </>
  )
};

export default SignIn;