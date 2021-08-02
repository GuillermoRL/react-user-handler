import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import AppContext from '../context/AppContext';
import closeIcon from '../assets/static/close.svg'
import userIcon from '../assets/static/user-icon.svg';

const SideDiv = styled.div`
    width: 70vh;
    height: 100vh;
    border-left: 1px solid #5E91F8;
    transition: 600ms;
    max-width: ${({expand}) => expand ? '80vh' : 0};
    position: relative;
    overflow: hidden;
`;

const Close = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 12px;
    right: 10px;
    transition: 300ms;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Photo = styled.img`
    max-height: 100px;
    border-radius: 100%;
`;

const Content = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        margin: 5px 0;
        width: 200px;
    }
`;

const SideBar = () => {
    const [ posts, setPosts ] = useState([]);
    const { state: { selectedUser, users }, setSelectedUser } = useContext(AppContext);
    const API = 'https://jsonplaceholder.typicode.com/posts';
    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then( (data) => setPosts(data));
    }, [])

    const renderUser = () => {
        const user = {
            ...users[selectedUser],
            posts: posts.filter( post => post.userId === selectedUser)
        }
        console.log(user)
        return(
            <Content>
                <Photo src={user.avatar ? user.avatar : userIcon} alt="Avatar" />
                <input value={user.name || user.first_name} type='Text' placeholder="User name" name="user" />
                <input value={user.email} type='Text' placeholder="User email" name="email" />
                <button type='button'>Guardar</button>
                {user.posts && user.posts.map( post => (
                    <p>{post.title}</p>
                ))}
            </Content>
        );
    }
    return(
        <SideDiv expand={selectedUser !== null}>
            <Close onClick={() => setSelectedUser({id: null})} src={closeIcon} alt="Close" />
            {setSelectedUser && renderUser()}
        </SideDiv>
    );
}

export default SideBar;