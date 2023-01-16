import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './auth.css'
import {RegistrationAction} from '../../Redux/Action/authAction'

const SignupPage = () => {
  const [value, setValue] = useState({name:'', email:'', password:''});
  const dispatch = useDispatch();
    const navigate = useNavigate()

    const {isAuthenticat} = useSelector(state=> state.Registration)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(RegistrationAction(value));
    }

    useEffect(() => {
        if(isAuthenticat){
            navigate('/');
        }
        const LoggedData = localStorage.getItem('authData') 
        if(!LoggedData){
            navigate('/signup')
        }
    }, [isAuthenticat])
  return (
    <div className='wrapper'>
      <div className='container'>
        <h2 className='common-heading'>Signup to KanBan</h2>
            <div className='login-form'>
                <form className='login-inputs' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' autoComplete='off' value={value.name} onChange={(event)=>setValue((prev)=>({...prev, name:event.target.value}))} required />

                <input type="email" name="email" placeholder='email' autoComplete='off' value={value.email} onChange={(event)=>setValue((prev)=>({...prev, email:event.target.value}))} required />

                <input type="password" name="password" placeholder='password' autoComplete='off' value={value.password} onChange={(event)=>setValue((prev)=>({...prev, password:event.target.value}))} required />
                <div className='form-submit'>
                <input type="submit" value="SignUp" />
                <NavLink to="/login"> Login</NavLink>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignupPage