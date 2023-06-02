import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [input, setInput] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
    })
     const Navigate = useNavigate()
    const [error, setError] = useState({})
    const handleChange = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const validation = (Value) => {
        const validationerror = {};
        if (!Value.name) {
            validationerror.name = "*Name is required"
        }
        if (!Value.password) {
            validationerror.password = "*Password is required"
        }
        if (!Value.email) {
            validationerror.email = "*Email is required"
        }
        if (!Value.phone) {
            validationerror.phone = "*Phone Number is required"
        }
        setError(validationerror)
        if (!validationerror.name && !validationerror.email && !validationerror.password && !validationerror.phone)
            return true;
        return false
    }

    const handleSubmit = () => {
        if (validation(input)) {
            localStorage.setItem("Name", `${input.name}`);
            localStorage.setItem("Password", `${input.password}`);
            localStorage.setItem("Email", `${input.email}`);
            localStorage.setItem("Phone", `${input.phone}`);
            return  Navigate("/login", {replace:true});
        }}
     return (
        <>

            <div className="login-main-container">

                <div className="singupbox"><p style={{ color: "black", fontSize: "25px", fontWeight: "600" }}>SINGUP</p>
                     <input type="text" placeholder="Enter your name" className="singup-inputs"
                        name="name" onChange={handleChange} />
                    <p style={{ color: 'red' }}>{error.name}</p>
                    <input type="text" required placeholder="Enter your password" className="singup-inputs"
                        name="password" onChange={handleChange} />
                    <p style={{ color: 'red' }}>{error.password}</p>
                    <input type="email" placeholder="Enter your email" className="singup-inputs"
                        name="email" onChange={handleChange} />
                    <p style={{ color: 'red' }}>{error.email}</p>
                    <input type="text" required placeholder="Enter your phone Number" className="singup-inputs"
                        name="phone" onChange={handleChange} />
                    <p style={{ color: 'red' }}>{error.phone}</p>
                    <button className="singup-btn" onClick={handleSubmit}>SINGUP</button>
                    <div style={{ color: "black" }}>Don't you have Account:?</div>
                    {/* {err && <p style={{ color: "orangered", textAlign: "center", fontSize: "18px", fontWeight: "600", }}> {err} </p>} */}
                    <Link to="/login"> <span className="create-bt">Login</span></Link>
                </div>

            </div>

        </>
    )
}