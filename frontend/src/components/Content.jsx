import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Content = ({ id }) => {

    const [user, setUser] = useState();
    const [showContent, setShowContent] = useState(false);

    axios.post('http://localhost:5000/get-user', { id: id }).then(res => {
        setUser(res.data);
        setShowContent(true);
    });

    return (
        <div>
            {showContent ? <div>
                <Navbar user={user} setUser={setUser} />
            </div> : ''}
        </div>
    )
}

export default Content