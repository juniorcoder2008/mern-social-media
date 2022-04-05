import React, { useState } from 'react';
import axios from 'axios';

const Navbar = ({ user, setUser }) => {

    const signOut = () => {
        localStorage.removeItem('userID');
        window.location.reload();
    }

    return (
        <header className='flex justify-between items-center px-10 py-5 bg-gray-100'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>

            <div className='flex gap-16 items-center'>
                <p className='font-medium text-indigo-500'>{user.name}<span className='text-gray-400'>@{user.id}</span></p>
                <button onClick={signOut} className='btn-red'>Sign out</button>
            </div>
        </header>
    )
}

export default Navbar