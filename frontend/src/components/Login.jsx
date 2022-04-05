import React, { useRef } from 'react';
import axios from 'axios';

const Login = ({ authMode, setAuthMode, userID, setUserID }) => {

    const email = useRef();
    const password = useRef();

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/login-user', { email: email.current.value, password: password.current.value }).then(info => {
            console.log(info.data.id);
            setUserID(info.data.id);
            localStorage.setItem('userID', info.data.id._id);
        })
    }

    return (
        <div className='border-2 w-3/12 px-3 py-5 rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form className='flex flex-col gap-2 mt-8' onSubmit={login}>
                <input ref={email} type="email" placeholder='E-Mail' className='input relative mx-auto' required />
                <input ref={password} type="password" placeholder='Password' className='input relative mx-auto' required />
                <span className='text-emerald-500 rounded-md cursor-pointer hover:underline text-center mt-5' onClick={() => authMode === 'Register' ? setAuthMode('Login') : setAuthMode('Register')}>Switch to {authMode}</span> 

                <button className='btn-green relative mx-auto'>Login</button>
            </form>
            
        </div>
    )
}

export default Login