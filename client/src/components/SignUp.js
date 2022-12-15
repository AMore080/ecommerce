import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { useMutation } from '@apollo/client' //test
import Auth from '../utils/auth';

// import { ADD_USER } from '../utils/mutations'; //test
import { addUser } from '../utils/API'; //test

const SignUp = () => {
  const [formData, setformData] = useState({ username: '', email: '', password: '' });
  // const [addUser] = useMutation(ADD_USER); //test

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
      // const { data } = await addUser({
      //   variables: { ...formData },
      // }); //test

      const { data } = await addUser(formData); //test

      const { token, user } = await data.json(); //test
      console.log(user); //test
      // Auth.login(data.addUser.token); //test
      Auth.login(token);
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
        <Form className='form' onSubmit={handleFormSubmit}>
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
          <Button disabled={!(formData.username && formData.email && formData.password)}
          type='submit'>
            SIGN UP
          </Button>
        </Form>
      </div>
    </>
  )
};

export default SignUp;