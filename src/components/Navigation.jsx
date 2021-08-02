import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import logo from '../assets/static/logo.svg';
import logOut from '../assets/static/logout.svg';

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 2px solid #5E91F8;
    width: 15vh;
    height: 100vh;
    overflow: hidden;
    transition: 600ms;
    max-width: ${({open}) => open ? '15vh' : 0};
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0;
    height: 100px;
    justify-content: space-between;
`;

const NavItem = styled(Link)`
    color: #000;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
    :hover{
        background-color: #f1f3f4;
        color: #000;
        text-decoration: none;
    }
`;

const LogoIcon = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: 15px;
`;

const LogOut = styled.img`
    width: 40px;
    height: 40px;
    position: relative;
    left: 20px;
    top: 75%;
    :hover{
        cursor: pointer;
    }
`;

const Navigation = () => {
    const [ navOpen, setNavOpen ] = useState(false);
    const { logout } = useContext(AppContext);
    const handleClick = (e) => {
        logout({
            email: '',
            password: '',
            name: '',
            token: '',
        });
    }
    return(
        <Nav onMouseLeave={() => setNavOpen(false)} open={navOpen}>
            <Link to="/">
                <LogoIcon 
                    onMouseOver={() => setNavOpen(true)} 
                    src={logo} 
                    alt="Logo" />
            </Link>
            <Menu>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">Album</NavItem>
            </Menu>
            <LogOut onClick={handleClick} src={logOut} alt="Logout" />
        </Nav>
    );
}

export default Navigation;