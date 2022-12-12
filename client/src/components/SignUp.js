import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import Auth from '../utils/auth';

import { ADD_USER } from '../utils/mutations';

const SignUp = () => {
  const [formData, setformData] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }

    setformData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* Signup Form */}
      <div>
        <h1 className='text-center'>Sign Up</h1>
        <form className='form' onSubmit={handleFormSubmit}>
          <label for='username'>Username</label>
          <input
            id='username'
            name='username'
            type='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <label for='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='youremail@test.com'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label for='pwd'>password</label>
          <input
            id='pwd'
            name='password'
            type='password'
            placeholder='********'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button disabled={!(formData.username && formData.email && formData.password)}
          type='submit'>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  )
};

export default SignUp;