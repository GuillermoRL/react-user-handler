import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import UserCard from '../components/UserCard';

const Container = styled.div`
    width: 100%;
    scroll: none;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Button = styled.button`
    margin: 20px auto 10px;
    border-radius: 10px;
    background-color: #5E91F8;
    width: 150px;
    height: 32px;
    color: white;
    border: none;
    outline: none;
    :hover{
        cursor: pointer;
        box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.18)
        opaticy: .8;
    }
`

const Grid = styled.div`
    width: 85%;
    height: 80vh;
    ::-webkit-scrollbar {
        display: none;
    }
    overflow-y: scroll;
    margin: 15px auto;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

const Users = () => {
    const { state: { users }, setUsers } = useContext(AppContext);
    const handleClick = (e) => {
        const API = 'https://jsonplaceholder.typicode.com/users';
        fetch(API)
            .then( (response) => response.json())
            .then( (data) => setUsers(data))
    }
    let id = 1;
    return(
        <Container>
            <Grid>
                {users.map( user => (
                    <UserCard key={id++} user={user} />
                ))}
            </Grid>
            <Button type="button" onClick={handleClick}>View more users</Button>
        </Container>


    );
}

export default Users;