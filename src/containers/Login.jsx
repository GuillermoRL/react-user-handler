import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import messageIcon from '../assets/static/message.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #5E91F8;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    color: #000;
    font-size: 30px;
    font-weight: 300;
`;

const Item = styled(Link)`
    color: #d9d9d9;
    font-size: 16px;
    text-decoration: none;
    :hover{
        color: #fff;
        opacity: 0.9;
        text-decoration: underline;
    }
`;

const Form = styled.div`
    width: 400px;
    height: 200px;
    background-color: #fff;
    padding: 50px;
    border-radius: 16px;
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.18)
`;

const Links = styled.div`
    margin-top: 20px;
    width: 500px;
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
`;

const Input = styled.input`
    width: 100%;
    height: 60px;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0,0,0,0.75);
    display: inline-block;
    font-size: 24px;
    line-height: 32px;
    list-style: none;
    margin: 0 0 15px;
    outline: 0;
    padding: 4px 12px;
    box-sizing: border-box;
    ::placeholder{
        font-size: 20px;
        color: rgba(0,0,0,0.25);
    }
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: #5E91F8;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    :hover{
        cursor: pointer;
        opacity: 0.9;
    }
`;

const Login = ({history}) => {
    const [error, setError] = useState(null);
    const { login, state: { userLogged } } = useContext(AppContext);
    console.log(userLogged)
    const form = useRef(null);
    const sendRequest = (data) => {
        // fetch('https://reqres.in/api/login, {
        //     method: 'POST',
        //     body: {
        //         "email": "eve.holt@reqres.in",
        //         "password": "cityslicka"
        //     }
        // }).then( (response) => console.log(response));
        fetch('https://reqres.in/api/login')
            .then( (response) => {
                if(response.status === 200){
                    login([{
                        email: data.email,
                        password: data.password,
                        token: '12345'
                    }]);
                }
            });
    }
    const handleClick = (e) => {
        const formData = new FormData(form.current)
        const email = formData.get('email');
        const password = formData.get('password');
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            setError('Please, insert a valid email')
            return false;
        }
        if(password == '' || password.indexOf(' ') > -1){
            setError('Invalid password')
            return false;
        }
        sendRequest({email, password});
    };
    return(
        <Container>
            {userLogged.token.length > 0 ? <Redirect to="/" /> : ''}
            <Image src={messageIcon} alt="Message" />
            <Title>Welcome Back!</Title>
            <Form>
                <form ref={form}>
                    <Input 
                        type="text" 
                        placeholder="Email address" 
                        name="email" />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        name="password" />
                </form>
                <Button type="button" onClick={handleClick}>Login</Button>
                {error && <h3>{error}</h3>}
            </Form>
            <Links>
                <Item to="/reset-password">Forgot your password?</Item>
                <Item to="/register">don't have an account? Get started</Item>
            </Links>
        </Container>
    );
}

export default Login;