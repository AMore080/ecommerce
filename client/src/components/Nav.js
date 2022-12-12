import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Text, useTheme } from '@nextui-org/react';
import Auth from '../utils/auth';

const Header = () => {
    const [variant, setVariant] = useState('underline');
    const [activeColor, setActiveColor] = useState('success');
    const { isDark } = useTheme();

    return (
        <>
            <Navbar isBordered={isDark} variant='sticky'>
                <Navbar.Brand as={Link} to='/'>
                    <Text b color='inherit' hideIn='xs' >
                        CodeMovie!
                    </Text>
                </Navbar.Brand>
                <Navbar.Content activeColor={activeColor} hideIn='xs' variant={variant}>
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
                    <Navbar.Link as={Link} to='/profile'>Cart</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </>
    )
};

export default Header