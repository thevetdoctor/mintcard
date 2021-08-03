/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Input from '../input/Input';
import Button from '../input/Buttons';
import store from '../../redux/store';
import './homepage.css';
 
export default function Homepage() {
    const {getState, dispatch} = store;
    const state = getState();    
    const { email, password, username, tc, tag } = useSelector(state => state);
    const [loading, setLoading] = useState(false);
    const [signupMode, setSignupMode] = useState(false);
    
  const apiUrl = `/auth/get_username/${username}`;

const fetchData = async() => {
     try {
         if(signupMode) {
             if(username) {
                 const res = await axios({
                  method: 'GET',
                  url: `${apiUrl}`,
                  headers: {'Content-Type': 'application/json'}
                  });
                  dispatch({
                    type: 'SET_PUBLIC_DATA',
                    publicData: res.data
                  });
                if(res.data.success) {
                    register();
                } else {
                    dispatch({
                        type: 'SET_TAG',
                        error: 'Username already taken'
                    });  
                }
            } else {
                dispatch({
                    type: 'SET_TAG',
                    error: 'Username not supplied'
                }); 
            }
        } else {
            signIn();
        }
    }  catch(e) {
        setLoading(false);
        dispatch({
        type: 'SET_TAG',
        error: e.message ? 'Username taken, please choose another' : 'Error found'
        });
    }
}
  

    const signIn = async() => {
        // e.preventDefault();
        await auth
            .signInWithEmailAndPassword(email, password)
            .then(async auth => {
                const res = await axios({
                method: 'POST',
                url: '/auth/login',
                data: {email, password},
                headers: {'Content-Type': 'application/json'}
                });

                console.log('User logged in');
                setLoading(false);
                dispatch({
                    type: 'SET_USER',
                    user: res.data
                });
                dispatch({
                    type: 'SET_AUTHENTICATE',
                    data: true
                });
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
                dispatch({
                  type: 'SET_TAG',
                  error: error.message.indexOf('no user') > -1 ? 'Account not found, please select signup' : error.message
                });             
              });
    }

    const register = async() => {
        // e.preventDefault();
        await auth
            .createUserWithEmailAndPassword(email, password)
            .then(async (auth) => {
                const res = await axios({
                    method: 'POST',
                    url: '/auth',
                    data: {email, password, username},
                    headers: {'Content-Type': 'application/json'}
                    });

                console.log('User signed up');
                setLoading(false);
                dispatch({
                    type: 'SET_USER',
                    user: res.data
                });
                dispatch({
                    type: 'SET_AUTHENTICATE',
                    data: true
                });
            })  
            .catch((error) => {
                console.log("It's an error", error.message);
                setLoading(false);
                dispatch({
                  type: 'SET_TAG',
                  error: error.message.indexOf('already') > -1 ? 'Account already exist, please select login' : error.message

                }); 
            });
    }

    const handleSubmit = () => {
        setLoading(true);
        fetchData();
    }

    const btnDisabled = signupMode ? (!email || !password || !username || !tc) : (!email || !password);

    return (
        <div className='homepage-banner'>
            <div className='homepage-top'>
                <div className='tag-home'>
                    <h1 className='title-home'>
                        MintCard App
                    </h1>
                    <p className='slide-home'>
                        {signupMode ? 'SIGNUP' : ''}
                        <span 
                            className='mode' 
                            onClick={() => setSignupMode(!signupMode)}
                            >
                            {signupMode ? 'click to login ?' : 'click to signup ?'}
                        </span>
                        {signupMode ? '' : 'LOGIN'}
                    </p>
                    <Input 
                        label='Email'
                        type='text'
                        value={email}
                        defalutValue={email}
                        name='email'
                        placeholder='Enter your email'
                        required
                    />
                    <Input 
                        label='Password'
                        type='password'
                        value={password}
                        name='password'
                        placeholder='Enter your password'
                        required
                    />
                    {signupMode &&
                    <Input 
                        label='Username - github'
                        type='text'
                        value={username}
                        // tag={tag}
                        name='username'
                        placeholder='Enter your github username'
                    />}
                    <span className='tag'>{tag}</span>
                    {signupMode &&
                    <div className={`tc ${!tc && 'tc-red'}`}>
                    <Input 
                        type='checkbox'
                        value={tc}
                        name='tc'
                        // placeholder='Enter your github username'
                    /><span>Accept Terms & Conditions</span>
                    </div>}
                    {!loading ?
                    <Button
                        name={signupMode ? 'SIGNUP' : 'LOGIN'}
                        classname='btn'
                        onClick={handleSubmit}
                        disabled={btnDisabled}
                    />
                    :
                    <Loader 
                        type='ThreeDots'
                        color='#00bfff'
                        height={80} 
                        width={80} 
                    />}
                </div>
            </div> 
        </div>
    )
}
