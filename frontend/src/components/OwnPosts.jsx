import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OwnPosts = ({ user }) => {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get-posts').then(info => {
            if(info.data.length > 30) {
                setPostList(info.data.reverse().slice(0, 30));
            }
            if(info.data != postList) {
                setPostList(info.data.reverse());
            }
            postList.filter(item => item.author.uid !== user.id);
        });
    }, [])

  return (
    <div className='pt-10'>
        <h1 className='text-2xl font-bold'>Your own posts</h1>
        {postList.map(item => {
            return <p>{item.title}</p>
        })}
    </div>
  )
}

export default OwnPosts