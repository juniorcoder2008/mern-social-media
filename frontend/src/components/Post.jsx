import React from 'react'

const Post = ({ title, content, time, author }) => {
  return (
    <div className='px-5 py-5 bg-neutral-100 w-1/3 rounded-xl hover:shadow-md hover:-translate-y-1'>
        <div className='flex items-center justify-between border-b-2 border-gray-300'>
            <h1 className='uppercase font-semibold text-xl'>{title} <span className='text-blue-500 normal-case'>von {author}</span></h1>
            <p className='text-gray-500'>{time}</p>
        </div>
        <p className='mt-3'>{content}</p>
    </div>
  )
}

export default Post