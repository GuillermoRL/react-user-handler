import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import Navigation from '../components/Navigation';
import Users from '../components/Users';
import SideBar from '../components/SideBar';

const Main = styled.div`
    display: flex;
`;

const Home = ({history}) => {
    const { state: { userLogged }, setUsers } = useContext(AppContext);
    if(userLogged.token === ''){
        history.push('/login');
    }
    const API = 'https://reqres.in/api/users?page=2';
    useEffect( () => {
        fetch(API)
            .then( response => response.json())
            .then( ({data}) => setUsers(data))
    }, []);
    return(
        <Main>
            <Navigation />
            <Users />
            <SideBar />
        </Main>
    );
}

export default Home;