import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <form className='form' onSubmit={handleFormSubmit}>
        <h1 className='text-center'>Sign Up</h1>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='youremail@test.com'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='pwd'>password</label>
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
          type='submit' className='rounded-pill'>
          SIGN UP
        </button>
      </form>
    </>
  )
};

export default SignUp;