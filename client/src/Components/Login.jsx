import React, { useState } from 'react'
import '../Styles/Login.css'

async function LoginUser(credentials) {
    return fetch('http://localhost:8000/api/login/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => {
        data.json()
        console.table(data);
    })
}


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit() {
        const token = await LoginUser({
            username, password
        })
    }

    return (
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

            <button onClick={() => onSubmit()}> Login! </button>
            <button onClick={() => {
                return fetch('http://localhost:8000/api/login/login', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(data => console.log(`PING`))
            }}> Ping! </button>

        </div>
    )
}

export default Login;
