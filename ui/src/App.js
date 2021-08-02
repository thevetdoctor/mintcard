/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import store from './redux/store';
// import io from 'socket.io-client'

// let socket = io(`http://localhost:8001`);

function App() {
  const { getState, dispatch } = store;
  const state = getState();
  const {user} = useSelector(state => state);
  
  // let timer = Date.now().toLocaleString();
  // setInterval(() => {
  //   timer += 1;
  //   console.log('timer');
  // }, 1000);

  const handleShuffle = () => {
    const allCards = data();
    console.log(allCards);
    const [playerDeck, opponentDeck] = allCards;
    dispatch({
        type: 'SHUFFLE_CARDS',
        deck: [playerDeck, opponentDeck]
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

    fetch("/api")
    .then((res) => res.json())
    .then((data) => console.log(data.message));

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
      <p 
        className='shuffle'
        onClick={handleShuffle}
      >
        Shuffle
      </p>
      {/* <span className='timer'>{timer}</span> */}
        <Dashboard />
    </div>
  );
}

export default App;
