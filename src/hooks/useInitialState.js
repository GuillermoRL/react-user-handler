import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const setUsers = payload => {
        setState({
            ...state,
            users: [...state.users, ...payload]
        })
    }
    const addUser = payload => {
        setState({
            ...state,
            users: [...state.users, payload]
        })
    };

    const setSelectedUser = payload => {
        setState({
            ...state,
            selectedUser: payload.id
        })
    }

    const removeUser = payload => {
        setState({
            ...state,
            users: state.users.filter(user => user.id !== payload.id)
        })
    }
    const login = payload => {
        setState({
            ...state,
            userLogged: payload[0]
        });
    }
    const logout = payload => {
        setState({
            ...state,
            userLogged: {
                email: '',
                password: '',
                name: '',
                token: '',
            }
        });
    }
    return {
        addUser,
        removeUser,
        login,
        logout,
        setUsers,
        setSelectedUser,
        state
    }
}

export default useInitialState;