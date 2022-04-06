import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreatePost from '../components/CreatePost';

import Navbar from '../components/Navbar';
import OwnPosts from '../components/OwnPosts';

const Account = () => {

  const [userID, setUserID] = useState();

  useEffect(() => {
      if(localStorage.getItem('userID')) {
        setUserID(localStorage.getItem('userID'));
      }
  }, [])

  const [user, setUser] = useState();
  const [showContent, setShowContent] = useState(false);

  axios.post('http://localhost:5000/get-user', { id: userID }).then(res => {
      setUser(res.data);
      setTimeout(() => {
        setShowContent(true);
      }, 100)
      
  });

  return (
    <div className=''>
      {showContent ? <div>
        <Navbar user={user} setUser={setUser} />
        <div className='grid grid-cols-3'>
          <CreatePost user={user} setUser={setUser} />
          <OwnPosts user={user} setUser={setUser} />
        </div>
      </div> : ''}
    </div>
  )
}

export default Account