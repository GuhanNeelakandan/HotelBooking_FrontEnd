import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Register() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: undefined,
        phone:undefined,
        email:undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("https://bookinghotelapi-app.herokuapp.com/register", credentials);
            console.log(res.data)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            alert("Successfully Register")
            navigate("/login")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
  return (
    <div className="login">
            <div className="lContainer">
                <h3 className='lheading'>Welcome</h3>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button className="lButton" disabled={loading} onClick={handleClick} >
                    Register
                </button>
                <p className='register'>Already have a account? <Link to={'/login'}>Login</Link></p>
                {error && <span style={{color: "greenyellow",fontWeight:900}}>{error.message}</span>}
            </div>
        </div>
  )
}

export default Register