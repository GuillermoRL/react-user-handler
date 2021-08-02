import React, { useContext } from 'react';
import styled from 'styled-components';

import AppContext from '../context/AppContext';

import userIcon from '../assets/static/user-icon.svg';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove.png'

const Card = styled.div`
    width: 20vw;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 12px;
    position: relative;
    transition: 300ms;
    border-radius: 50px;
    p{
        font-size: 12px;
        color: #000;
        font-weight: bold;
        margin: 10px 0;
    }
    :hover{
        background-color: #5E91F8;
        cursor: pointer;
    }
`;

const Photo = styled.img`
    max-height: 100px;
    border-radius: 100%;
`;

const Close = styled.img`
    width: 20px;
    height: 20px;
    margin: 0;
    transition: 300ms;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Add = styled.img`
    width: 20px;
    height: 20px;
    margin: 0;
    transition: 300ms;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Buttons = styled.div`
    display: flex;
    width: 50px;
    justify-content: space-between;
`;

const UserCard = ({user}) => {
    const { removeUser, setSelectedUser } = useContext(AppContext);
    const removeCard = (id) => {
        removeUser({id})
    }
    const handleClick = (id) => {
        setSelectedUser({id});
    }
    return(
        <Card key={user.id}>
            <Photo src={user.avatar ? user.avatar : userIcon} alt="Avatar" />
            <Buttons>
                <Add onClick={() => handleClick(user.id)} src={plusIcon} alt="Add" />
                <Close onClick={() => removeCard(user.id)} src={removeIcon} alt="Remove" />
            </Buttons>
            <p>{user.name ? user.name : `${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
        </Card>
    );
}

export default UserCard;