/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import { auth } from './firebase';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import Rules from './components/rules/Rules';
import './App.css';
import store from './redux/store';
import { ImShuffle } from 'react-icons/im';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import io from 'socket.io-client';

// let socket = io(`http://localhost:8001`);
let socket = io();

function App() {
  const { getState, dispatch } = store; 
  const state = getState();
  const { 
        user,
        authenticated, 
        rulesActive, 
        winner,
        playerDeck,
        opponentDeck,
        playerTag, 
        opponentTag, 
        gameEnd,
        gameId
      } = useSelector(state => state);      
      
  const [loading, setLoading] = useState(false);
  // const baseUrl = 'http://oba-game-app.herokuapp.com';
  const baseUrl = '';

  const handleShuffle = async() => {
    await window.location.reload(true);
    const allCards = data();
    console.log(allCards);
    const [playerDeck, opponentDeck] = allCards;
    dispatch({
        type: 'SHUFFLE_CARDS',
        deck: [playerDeck, opponentDeck]
    });
  };
  
  const handleGameSave = async() => {
    setLoading(true);

    const data = {
      uniqueid: user.id, 
      type: 'single', 
      winner: winner ? winner : 'none', 
      player: playerTag, 
      opponent: opponentTag, 
      duration: '3600', 
      state, 
      completed: gameEnd ? true : false, 
      userId: user.id,
      update: true
    };
    console.log(data);
    const res = await axios({
      method: 'POST',
      url: `${baseUrl}/games`,
      data,
      headers: {'Content-Type': 'application/json'}
      });
      console.log(res.data);
      if(res.data.success) {
        toast(res.data.message);
      } else {
        toast("Some error found!");
      }
      setLoading(false);
    };
  
  const handleRules = () => {
    dispatch({
        type: 'SHOW_RULES',
        value: !rulesActive
    });
    console.log(rulesActive);
  };

  const logout = async() => {
    await auth
            .signOut()
            .then(() => {
                console.log("User logged out");
                dispatch({
                    type: 'SET_LOGOUT',
                });
            })
            .catch((error) => {
                console.log(error.message);
            }); 
    };


    
  useEffect(() => {
    socket.on('init', message => {
      console.log(message, gameId);
      socket.emit('message', {response: `User with ID: ${gameId}`});
    });
    socket.on('message', message => {
      console.log(`Message received: ${message}`);
    });
    socket.emit('gameState', [playerDeck.length, opponentDeck.length]);
    socket.on('state', stateFromServer => {
      console.log('State received: ', stateFromServer);
    });

    // fetch("/api")
    // .then((res) => res.json())
    // .then((data) => console.log(data.message));

    return () => {
      console.log('Clean-up App.js');
    }
  }, []);

  return (
    <div className="App">
      <div className='tabs'>
        <ToastContainer />
        {authenticated ?
        <Fragment>

        <p className='shuffle' onClick={handleShuffle}>
          <span className='tab-title'>Restart/Shuffle</span>
          <ImShuffle />
        </p>

        {!loading ?
        <p className='save' onClick={handleGameSave}>
          <span className='tab-title'>Save Game</span>
          <FaTelegramPlane />
        </p>
          :
          <Loader 
              type='ThreeDots'
              color='#00bfff'
              height={80} 
              width={80} 
          />}           

        {!rulesActive && (
          <p className='rules' onClick={handleRules}>
            <span className='tab-title'>Rules</span>
            <IoBookSharp />
          </p>
        )}
        <p className='logout' onClick={() => logout()}>
          <span className='tab-title'>Logout</span>
          <FaTelegramPlane />
        </p>
        </Fragment>
        :
        <Fragment></Fragment>}
      </div>
      {(authenticated && !rulesActive) && <Dashboard />}
      {(!authenticated && !rulesActive) && <Homepage />}
      {rulesActive && <Rules />}

    </div>
  );
}

export default App;
