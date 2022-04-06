import axios from 'axios'
import React, { useRef } from 'react';

const CreatePost = ({ user, setUser }) => {

  const contentRef = useRef();
  const titleRef = useRef();
  const likes = 0;

  const author = {
    name: user.name,
    _id: user._id
  }

  const d = new Date();
  const postDate = `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}.${d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1}.${d.getFullYear()} | ${d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()}:${d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()}`;

  const createPost = e => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    console.log(title);
    console.log(content);

    axios.post('http://localhost:5000/create-post', { title: title, content: content, author: author, postDate: postDate, likes: likes }).then((res) => {
      console.log(res.data);
    })
  }

  return (
    <div className='px-10 pt-8 post-list'>
      <h1 className='font-bold text-2xl mb-4'>Create a new post</h1>
      <form className='flex flex-col gap-2' onSubmit={createPost}>
        <input ref={titleRef} type="text" placeholder='Post Title' className='input w-96' required />
        <textarea ref={contentRef} className='input resize-none h-64 w-96' placeholder='Post Content' required></textarea>
        <button type="submit" className='btn-blue w-96'>Create new Post</button>
      </form>
    </div>
  )
}

export default CreatePost