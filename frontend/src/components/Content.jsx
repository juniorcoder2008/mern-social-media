import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import PostList from './PostList';

const Content = ({ id }) => {

    const [user, setUser] = useState();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        axios.post('http://localhost:5000/get-user', { id: id }).then(res => {
            setUser(res.data);
            setShowContent(true);
        });
    }, [])

    return (
        <div>
            {showContent ? <div>
                <Navbar user={user} setUser={setUser} />
                <PostList user={user} setUser={setUser} />
            </div> : ''}
        </div>
    )
}

export default Content