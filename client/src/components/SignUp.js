import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const SignUp = () => {
  const [formData, setformData] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

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
          name='username'
          type='text'
          placeholder='Username'
          value={formData.username}
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='youremail@test.com'
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor='pwd'>password</label>
        <input
          name='password'
          type='password'
          placeholder='********'
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type='submit' className='rounded-pill'>
          SIGN UP
        </button>
      </form>
      {error ? (
        <div>
          <p className='error-text'>There was an issue with your signup</p>
        </div>
      ) : null}
    </>
  )
};

export default SignUp;