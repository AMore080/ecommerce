import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Text, } from "@nextui-org/react";
import Auth from '../utils/auth';

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const Header = () => {
    const [variant, setVariant] = useState("underline");
    const [activeColor, setActiveColor] = useState("success");

    return (
        <>
            <Navbar variant="sticky">
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        CodeMovie!
                    </Text>
                </Navbar.Brand>
                <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
                    <Navbar.Link as={Link} to='/'>Search</Navbar.Link>
                    {Auth.loggedIn() ? (
                        <>
                            <Navbar.Link as={Link} to='/profile'>Profile</Navbar.Link>
                            <Navbar.Link onClick={Auth.logout}>Logout</Navbar.Link>
                        </>
                    ) : (
                        <Navbar.Link as={Link} to='/login'>Login/Sign Up</Navbar.Link>

                    )}
                    <Navbar.Link as={Link} to='/'>Cart</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </>
    )
};

export default Header