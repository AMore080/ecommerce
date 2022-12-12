import React from 'react';
// import { useMutation } from '@apollo/client'
// import Auth from '../utils/auth';
// import { LOGIN_USER } from '../utils/mutations'

const Login = () => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN_USER);

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
  //         const { data } = await login({
  //             variables: { ...formState },
  //         });

  //         Auth.login(data.login.token);
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
      {/* Login Form */}
      < div >
        <h1 className='text-center'>Login</h1>
        <form className='form'>
          <label for='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
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
            LOGIN
          </button>
          {/* {error ? (
                        <div>
                            <p className='error-text'>The provided credentials are incorrect</p>
                        </div>
                    ) : null} */}
        </form>
      </div >
    </>
  )
};

export default Login;