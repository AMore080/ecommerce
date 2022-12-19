import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Text } from '@nextui-org/react';
import Auth from '../utils/auth';

const Header = () => {

  return (
    <>
      <Navbar variant='sticky'>
        <Navbar.Brand as={Link} to='/' className='title'>
          <Text b color='#96ccd7' hideIn='xs' size={30}>
            CodeMovie!
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='xs' >
          <Navbar.Link as={Link} to='/'>Search</Navbar.Link>
          {/* If user is logged in display 'Profile' and  'Logout' */}
          {Auth.loggedIn() ? (
            <>
              <Navbar.Link as={Link} to='/profile'>Profile</Navbar.Link>
              <Navbar.Link onClick={Auth.logout}>Logout</Navbar.Link>
            </>
          ) : (
            <Navbar.Content>
              <Navbar.Link as={Link} to='/signin'>Login/Sign Up</Navbar.Link>
            </Navbar.Content>

          )}
          <Navbar.Link as={Link} to='/success'>Cart</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  )
};

export default Header