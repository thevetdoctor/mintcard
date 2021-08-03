/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import { auth } from './firebase';
import axios from 'axios';
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
// import io from 'socket.io-client'

// let socket = io(`http://localhost:8001`);

function App() {
  const { getState, dispatch } = store; 
  const state = getState();
  const { 
        user,
        authenticated, 
        rulesActive, 
        winner, 
        playerTag, 
        opponentTag, 
        gameEnd 
      } = useSelector(state => state);
  

  // const baseUrl = 'http://oba-game-app.herokuapp.com';
  const baseUrl = '';

  const handleShuffle = () => {
    const allCards = data();
    console.log(allCards);
    const [playerDeck, opponentDeck] = allCards;
    dispatch({
        type: 'SHUFFLE_CARDS',
        deck: [playerDeck, opponentDeck]
    });
  };
  
  const handleGameSave = async() => {
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
    // socket.on('init', message => {
    //   console.log(message);
    //   socket.emit('message', {response: 'Connection confirmed'});
    // });
    // socket.on('message', message => {
    //   console.log(message);
    // });
    // socket.emit('gameState', state);
    // socket.on('state', state => {
    //   console.log('state received: ', state);
    // });

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
          Shuffle
          <ImShuffle />
        </p>
        <p className='save' onClick={handleGameSave}>
          Save Game
          <FaTelegramPlane />
        </p>
        {!rulesActive && (
          <p className='rules' onClick={handleRules}>
            Rules
            <IoBookSharp />
          </p>
        )}
        <p className='logout' onClick={() => logout()}>
          Logout
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
