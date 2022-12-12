import React from 'react';
// import { useMutation } from '@apollo/client'
// import Auth from '../utils/auth';

// import { ADD_USER } from '../utils/mutations'

const SignUp = () => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [addUser] = useMutation(ADD_USER);

  // const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //         ...formState,
  //         [name]: value,
  //     });
  // };

  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //         const { data } = await addUser({
  //         variables: {
  //             ...formState
  //         },
  //     });

  //     Auth.login(data.addUser.token);
  //     } catch (err) {
  //         console.log(err);
  //     }

  //     setFormState({
  //         email: '',
  //         password: '',
  //     });
  // };

  return (
    <>
      {/* Signup Form */}
      <div>
        <h1 className='text-center'>Sign Up</h1>
        <form className='form'>
          <label for='username'>Username</label>
          <input
            id='username'
            name='username'
            type='username'
            placeholder='Username'
          // value={formState.username}
          // onChange={handleChange}
          />
          <label for='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='youremail@test.com'
          // value={formState.email}
          // onChange={handleChange}
          />
          <label for='pwd'>password</label>
          <input
            id='pwd'
            name='password'
            type='password'
            placeholder='********'
          // value={formState.password}
          // onChange={handleChange}
          />
          <button type='button' >
            SIGN UP
          </button>
        </form>
      </div>
    </>
  )
};

export default SignUp;