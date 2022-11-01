import React, { useState } from 'react'
import axios from 'axios';
import '../Styles/Login.css'

async function LoginUser(credentials) {
    return axios.post('/api/login/login', {
        username: credentials.username,
        password: credentials.password
    }).then(response => {
        console.log(response.data);
    })
}

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit() {
        const token = await LoginUser({
            username: username,
            password: password
        })
    }

    return (
        <div className='login-main'>
            <div className='login-box'>
                <div className='username'>
                    <label >Username:
                        <input type="text"
                            required
                            className="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </label>
                </div>
                <div className='password'>
                    <label >Password:
                        <input type="text"
                            required
                            className="username"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                </div>

                <button className='login-button' onClick={() => onSubmit()}> Login! </button>
                <button className='login-button' onClick={() => {
                    return fetch('/api/login/login', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(data => console.log(`PING`))
                }}> Ping! </button>

            </div>
        </div>
    )
}

export default Login;
