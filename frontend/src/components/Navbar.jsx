import React, { useState } from 'react';
import axios from 'axios';

const Navbar = ({ user, setUser }) => {

    const signOut = () => {
        localStorage.removeItem('userID');
        window.location.href = '/';
    }

    return (
        <header className='flex justify-between items-center px-10 py-5 bg-gray-100'>
            <a href='/' className='text-2xl font-bold'>Dashboard</a>

            <div className='flex gap-16 items-center'>
                <a href='/account' className='font-medium text-indigo-500'>{user.name}<span className='text-gray-400'>@{user.id}</span></a>
                <button onClick={signOut} className='btn-red'>Sign out</button>
            </div>
        </header>
    )
}

export default Navbar