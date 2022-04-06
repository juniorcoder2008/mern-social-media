import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const Post = ({ data, user, setUser, postList, setPostList }) => {

  function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const [liked, setLiked] = useState(false);

  const addLike = () => {
    if(liked) {
      // data.likesBy.filter(item => item === user.uid)
      data.likesBy = removeItemOnce(data.likesBy, user.uid.toString());
      data.likes = data.likesBy.length;
      console.log('Removed Like:', data.likesBy)
      axios.post('http://localhost:5000/add-like', data)
      setTimeout(() => {
        axios.get('http://localhost:5000/get-posts').then(info => {
          setPostList(info.data.reverse());
        });
      }, 100)
    } else {
      data.likesBy = [...data.likesBy, user.uid];
      data.likes = data.likesBy.length;
      console.log('The data is:', data)
      axios.post('http://localhost:5000/add-like', data)
      setTimeout(() => {
        axios.get('http://localhost:5000/get-posts').then(info => {
          setPostList(info.data.reverse());
        });
      }, 100)
    }    
  }

  useEffect(() => {
    console.log(data.likesBy);
    console.log(user.uid.toString())
    if(data.likesBy.includes(user.uid.toString())) {
      setLiked(true);
    }
  }, [])

  return (
    <div className='px-5 py-5 bg-neutral-100 2xl:w-1/3 xl:w-1/2 rounded-xl relative'>
        <div className='flex items-center justify-between border-b-2 border-gray-300'>
            <h1 className='uppercase font-bold text-xl'>{data.title} <span className='text-blue-500 normal-case font-medium text-base ml-1 cursor-pointer'>@{data.author.name}</span></h1>
            <p className='text-gray-500'>{data.postDate}</p>
        </div>
        <div className='mt-3 md'>
          <Markdown>{data.content}</Markdown>
        </div>
        <button onClick={addLike} className='flex items-center gap-2 absolute right-5 bottom-3'><FaHeart color={liked ? '#ff0000' : ''} /> {data.likes}</button>
    </div>
  )
}

export default Post