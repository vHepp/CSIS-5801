import React, { useContext, useState } from 'react'
import {userContext} from '../contexts/userContext'
import '../Styles/Login.css'

async function LoginUser(credentials) {
    return fetch('http://localhost:8000/api/login/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}


const Login = () => {
    const {state, dispatch} = useContext(userContext);
    console.log(state)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit() {
        const token = await LoginUser({
            email, password
        })

        if (token.success){
            token.message.isLoggedIn = true;
            localStorage.setItem('jwt', token.token);
            localStorage.setItem("user", JSON.stringify(token.message))
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            dispatch({ type: "USER", payload: user})
        }
            return token;
    }

    return (
        <div className='login-box'>
            <div className='username'>
                <label >Email:
                    <input type="text"
                        required
                        className="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
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
