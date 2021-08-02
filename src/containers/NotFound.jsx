import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h1>This view is not available</h1>
            <Link to="/">Back to</Link>
        </div>
    );
};

export default NotFound;