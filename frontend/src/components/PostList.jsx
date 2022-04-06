import React, { useState } from 'react';
import axios from 'axios';
import Post from './Post';

const PostList = () => {

    const [postList, setPostList] = useState([]);

    axios.get('http://localhost:5000/get-posts').then(info => {
        if(info.data.length > 30) {
            setPostList(info.data.reverse().slice(0, 30));
        }
        setPostList(info.data.reverse());
    })

    return (
        <div className='flex flex-col gap-6 px-10 pt-14'>
            <h1 className='text-2xl font-bold'>Aktuelle Posts</h1>
            {postList.map(item => {
                return <Post key={Math.random()} title={item.title} content={item.content} time={item.postDate} author={item.author.name} />
            })}
        </div>
    )
}

export default PostList