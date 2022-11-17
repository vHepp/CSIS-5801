import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from '../contexts/userContext'
import '../Styles/Login.css'

async function LoginUser(credentials) {
    return fetch('/api/login/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = () => {
    const { state, dispatch } = useContext(userContext);

    
    console.log(state)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = async () => {
        const token = await LoginUser({
            email, password
        })

        if (token.success) {
            toast.success('Login Successful!', {
            position: toast.POSITION.TOP_RIGHT,
            
        });
        
            localStorage.setItem('jwt', token.token);
            localStorage.setItem("user", JSON.stringify(token.message))
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            dispatch({ type: "USER", payload: token.message })

            //bad but effective redirect to profile page on successful login

            setTimeout(() => {window.location.assign("/profile")}, 2500)
            
        }
            else{
                toast.error("Access Denied", {
            position: toast.POSITION.TOP_RIGHT,
            
        });
            }
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

            <button type='submit' onClick={(e) => onSubmit()}> Login! </button>
            
           
            <ToastContainer />

        </div>
    )
}

export default Login;
