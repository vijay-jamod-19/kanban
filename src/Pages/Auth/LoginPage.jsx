import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginAction } from '../../Redux/Action/authAction'
import './auth.css'

const LoginPage = () => {
  const [value, setValue]= useState({email:'', password:''})
  const dispatch = useDispatch();
    const navigate = useNavigate()

    const {isAuthenticat} = useSelector(state=>state.Login)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginAction(value));
        //navigate('/');
    }

    useEffect(() => {
        if(isAuthenticat){
            navigate('/');
        }

        const LoggedData = localStorage.getItem('authData') 
        if(!LoggedData){
            navigate('/login')
        }
    }, [isAuthenticat])
  return (
    <div className='wrapper'>
      <div className='container'>
        <h2 className='common-heading'>Login to KanBan</h2>
            <div className='login-form'>
            <form className='login-inputs' onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' autoComplete='off' value={value.email} onChange={(event)=>setValue((prev)=>({...prev, email:event.target.value}))} required />

                <input type="password" name="password" placeholder='password' autoComplete='off' value={value.password} onChange={(event)=>setValue((prev)=>({...prev, password:event.target.value}))} required />
                <div className='form-submit'>
                <input type="submit" value="Login" />
                <NavLink to="/signup">SignUp For Free</NavLink>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage