import React, { useContext, } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/SignUp.css";
import { useState } from 'react';
import { userContext } from '../contexts/userContext';

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

async function signUpUser(formData) {
    return fetch("/api/register/signUp", {
        method: 'POST',
        config,
        body: formData
    }).then(data => data.json())
}


export default function SignUp() {
    const { state, dispatch } = useContext(userContext)
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')


    const onSubmit = async e => {
        const formData = new FormData()
        formData.append('image', image);
        formData.append('name', name)
        formData.append('password', password)
        formData.append('password_confirmation', password_confirmation)
        formData.append('email', email);

        const token = await signUpUser(formData)
        console.log(token)
        if (token.success) {
            console.log('here')
            toast.success('Successfully Registered!', {
                position: toast.POSITION.TOP_RIGHT,

            });
            localStorage.setItem('jwt', token);

            localStorage.setItem("user", JSON.stringify(token.result))
            const user = JSON.parse(localStorage.getItem("user"))
            dispatch({ type: "USER", payload: user })
            console.log(state)
            setTimeout(() => { window.location.assign("/profile") }, 2500)

        }

        else{
            toast.error("There was a problem with your registration", {
                position: toast.POSITION.TOP_RIGHT,

            });
        }
    }

    const onSelectFile = (event) => {
        setImage(event.target.files[0])

    };

    return (
        <>
            <div className='signup-main'>
                <div className="box1">
                    <p><strong>Profile Picture</strong></p>

                    <img className='imagedisplay' alt="" width={"200px"} src={image ? URL.createObjectURL(image) : 'alt'} />
                    <br></br>
                    <input
                        type="file"
                        title="j"
                        name="myImage"
                        onChange={(event) => onSelectFile(event)}
                    />

                    <div className="usr">
                        <label >Register Email:
                            <input type="text"
                                required
                                className="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                    </div>
                    <div className='name'>
                        <label >Full Name:
                            <input type="text"
                                required
                                className="username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label className="pswlb">Create Password:
                            <input type="password"
                                name="password"
                                required
                                className="pswin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label className="pswlb">Password Confirmation:
                            <input type="password"
                                name = "password"
                                required
                                className="pswin"
                                value={password_confirmation}
                                onChange={(e) => setPassword_confirmation(e.target.value)}></input>
                        </label>
                    </div>
                    <button className='signup-button' onClick={() => onSubmit()}>
                        Submit
                    </button>
                </div>
                <div className='results'>
                    <img alt="" width={"125px"} src={image ? URL.createObjectURL(image) : 'alt'} />
                    <h4>{email}</h4>
                    <h4>{name}</h4>
                    <h4>{password}</h4>
                    <h4>{password_confirmation}</h4>
                </div>
                <div>
                    <label className="pswlb">Create Password:
                        <input type="text"
                            required
                            className="pswin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                </div>
                <div>
                    <label className="pswlb">Password Confirmation:
                        <input type="text"
                            required
                            className="pswin"
                            value={password_confirmation}
                            onChange={(e) => setPassword_confirmation(e.target.value)}></input>
                    </label>
                </div>
                <button className='btn' onClick={(e) => onSubmit(e)}>
                    Submit
                </button>
            </div>
            <div className='results'>
                <img alt="" width={"125px"} src={image ? URL.createObjectURL(image) : 'alt'} />
                <h4>{email}</h4>
                <h4>{name}</h4>
                <h4>{password}</h4>
                <h4>{password_confirmation}</h4>
            </div>
            <ToastContainer />
        </>
    )
}
