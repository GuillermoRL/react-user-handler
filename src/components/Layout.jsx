import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;

const Layout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Layout;