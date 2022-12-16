import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth';

const Login = (props) => {
  const [formData, setformData] = useState({ email: '', password: '' });

  const [loginUser, { error }] = useMutation(LOGIN_USER);
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      console.log(formData)

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }

    setformData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* Login Form */}
      <form className='form' onSubmit={handleFormSubmit}>
        <h1 className='text-center'>Login</h1>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='youremail@test.com'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='password'>password</label>
        <input
          name='password'
          type='password'
          placeholder='********'
          value={formData.password}
          onChange={handleInputChange}
        />
        <button disabled={!(formData.email && formData.password)}
          type='submit' variant='success' className='rounded-pill'>
          LOGIN
        </button>
        {error ? (
          <div>
            <p className='error-text'>The provided credentials are incorrect</p>
          </div>
        ) : null}
      </form>
    </>
  )
};

export default Login;