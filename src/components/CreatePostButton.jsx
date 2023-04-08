import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
        return (
        <Link to='/create'>
        <button className={'createPostBtn'}> Create New Post</button>
    </Link>
);
};


export default Create
