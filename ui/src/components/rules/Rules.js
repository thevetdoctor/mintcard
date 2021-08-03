/* eslint-disable no-unused-vars */
import React, { useSelector } from 'react';
import store from '../../redux/store';
import { IoCloseCircle } from 'react-icons/io5';
import './rules.css';
 
export default function Rules() {
    const {getState, dispatch} = store;
    const state = getState();    
    
    const handleRules = async() => {
        await dispatch({
            type: 'SHOW_RULES',
            value: false
        });    
    }

    return (
        <div className='rules-banner'>
            <div className='rules-top'>
                <div className='rules-home'>
                    <span 
                        className='close-btn' 
                        onClick={handleRules}>
                            <IoCloseCircle size='2em' />
                    </span>
                    <h1 className='title-home'>
                        Game Rules
                    </h1>
                    <div>
                        The goal is to be the first player to win all 52 cards
                    </div>
                    <div className='extra-rules'>
                        <span>A stands for 1</span>|
                        <span>K stands for 11</span>|
                        <span>J stands for 12</span>|
                        <span>Q stands for 13</span>
                    </div>
                    <p>THE DEAL</p>
                        <div>
                        The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.
                        </div>

                    <p>THE PLAY</p>
                    <div>

                        Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.
                    </div>
                    <br/>
                    <div>
                        If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
                    </div>

                    <p>HOW TO KEEP SCORE</p>
                    The game ends when one player has won all the cards.
                </div>
            </div> 
        </div>
    )
}
