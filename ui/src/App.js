/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import { auth } from './firebase';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
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
  const {user} = useSelector(state => state);
  const { authenticated } = useSelector(state => state);

  const [showRules, setShowRules] = useState(false);

  const handleShuffle = () => {
    const allCards = data();
    console.log(allCards);
    const [playerDeck, opponentDeck] = allCards;
    dispatch({
        type: 'SHUFFLE_CARDS',
        deck: [playerDeck, opponentDeck]
    });
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
      {/* <h2>
        Welcome to MintCard
      </h2> */}
      {/* <div className='rules'>
        <span>Rules</span>|
        <span>A stands for 1</span>|
        <span>K stands for 11</span>|
        <span>J stands for 12</span>|
        <span>Q stands for 13</span>|
      </div>
      <div className='rules'>
        |<span>Spade gives extra 1</span>|
        <span>Diamond gives extra 2</span>|
        <span>Heart gives extra 3</span>|
        <span>Club gives extra 4</span>|
      </div> */}
      <div className='tabs'>
        <p className='shuffle' onClick={handleShuffle}>
          Shuffle
          <ImShuffle />
        </p>
        <p className='save'>
          Save Game
          <FaTelegramPlane />
        </p>
        {!showRules && (
          <p className='rules'>
            Rules
            <IoBookSharp />
          </p>
        )}
        <p className='logout' onClick={() => logout()}>
          Logout
          <FaTelegramPlane />
        </p>
      </div>
      {authenticated && <Dashboard />}
      {!authenticated && <Homepage />}

    </div>
  );
}

export default App;
