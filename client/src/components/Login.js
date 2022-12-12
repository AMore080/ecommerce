import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations'

const Login = () => {
  const [formData, setformData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formData },
      });

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
      < div >
        <h1 className='text-center'>Login</h1>
        <form className='form' onSubmit={handleFormSubmit}>
          <label for='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='youremail@test.com'
            value={formData.email}
            onChange={handleChange}
          />
          <label for='pwd'>password</label>
          <input
            id='pwd'
            name='password'
            type='password'
            placeholder='********'
            value={formData.password}
            onChange={handleChange}
          />
          <button  disabled={!(formData.email && formData.password)}
          type='submit' >
            LOGIN
          </button>
          {error ? (
            <div>
              <p className='error-text'>The provided credentials are incorrect</p>
            </div>
          ) : null}
        </form>
      </div >
    </>
  )
};

export default Login;