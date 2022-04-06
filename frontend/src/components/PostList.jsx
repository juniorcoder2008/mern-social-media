import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const PostList = ({ user, setUser }) => {

    const [postList, setPostList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/get-posts').then(info => {
            if(info.data.length > 30) {
                setPostList(info.data.reverse().slice(0, 30));
            }
            if(info.data != postList) {
                setPostList(info.data.reverse());
            }
        });
    }, [])

    return (
        <div className='flex flex-col gap-6 px-10 pt-14'>
            <h1 className='text-2xl font-bold'>Aktuelle Posts</h1>
            {postList.map(item => {
                return <Post user={user} postList={postList} setPostList={setPostList} setUser={setUser} key={Math.random()} data={item} />
            })}
        </div>
    )
}

export default PostList