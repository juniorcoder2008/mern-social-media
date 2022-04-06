import axios from 'axios';
import React, { useRef, useState } from 'react';

const Register = ({ setAuthMode, authMode }) => {

    const name = useRef('');
    const email = useRef('');
    const pass = useRef('wefwef');

    const [repPass, setRepPass] = useState('');
    const password = pass.current.value;

    const uid = Number(Math.random().toString().slice(2, -1));
    console.log(uid);

    const id = Math.floor(Math.random() * (9999 - 1000) + 1000);

    const register = e => {
        e.preventDefault();
        let finalPass = pass.current.value;

        let accountCreationPossible = true;

        axios.get('http://localhost:5000/get-users').then(info => {
            info.data.map(account => {
                console.log(account);
                console.log(email.current.value);
                console.log(account.email == email.current.value);
                if(account.email == email.current.value) {
                    accountCreationPossible = false;
                    alert('E-Mail adress is already in use!');
                }
            });

            if(accountCreationPossible && finalPass == repPass) {
                axios.post('http://localhost:5000/create-user', { name: name.current.value, email: email.current.value, password: pass.current.value, uid: uid, id: id }).then(() => {
                    console.log('Created user succesfully!');
                    window.location.reload();
                });
            }
        });

        /* if(accountCreationPossible && finalPass == repPass) {
            axios.post('http://localhost:5000/create-user', { name: name.current.value, email: email.current.value, password: pass.current.value, uid: uid, id: id }).then(() => {
                console.log('Created user succesfully!');
                window.location.reload();
            });
        } */
    }

    return (
        <div className='border-2 2xl:w-3/12 w-1/3 px-3 py-5 rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl font-bold text-center'>Register new Account</h1>
            <form className='flex flex-col gap-2 mt-8' onSubmit={register}>
                <input ref={name} type="name" placeholder='Username' className='input w-10/12 relative mx-auto' required />
                <input ref={email} type="email" placeholder='E-Mail' className='input w-10/12 relative mx-auto' required />
                <input ref={pass} type="password" placeholder='Password' className='input w-10/12 relative mx-auto' required />

                <input value={repPass} onChange={e => setRepPass(e.target.value)} type="password" placeholder='Repeat password' className={`input w-10/12 mt-4 relative mx-auto ${repPass === password ? 'text-emerald-600' : 'text-rose-500'}`} required />

                <span className='text-emerald-500 rounded-md cursor-pointer hover:underline text-center mt-5' onClick={() => authMode === 'Register' ? setAuthMode('Login') : setAuthMode('Register')}>Switch to {authMode}</span> 

                <button className='btn-green w-10/12 relative mx-auto'>Register account</button>
            </form>
        </div>
    )
}

export default Register