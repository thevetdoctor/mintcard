/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import { deriveCardValue } from '../../data';
import React, { Fragment, useEffect } from 'react';
import Card from '../cards/Card';
import './dashboard.css';
import { useSelector } from 'react-redux';
import store from '../../redux/store';

export default function Dashboard() {
    const { getState, dispatch } = store;
    const state = getState();
    // console.log(state);
    const {
            playerDeck, 
            opponentDeck, 
            playerTurf, 
            opponentTurf,
            playerTag,
            opponentTag,
            playerMessage,
            opponentMessage,
            playerTurn,
            opponentTurn,
            showResult,
            gameTie,
            gameEnd,
            continueStatus,
            username,
            gameStart
        } = useSelector(state => state);
    // const deckApiUrl = 'https://deckofcardsapi.com/static/img/';
    const deckApiUrl = `${process.env.PUBLIC_URL}/img/`;

    console.log(`Cards left: ${playerDeck.length} / ${opponentDeck.length}`);

    const handleClick = (e, item) => {
        e.preventDefault();
        const { alt } = e.target;
        const [ tag, owner, cardValue ] = alt.split('/');
        if(owner === 'player') {
            if(playerTurf.length === opponentTurf.length) {
                playerCardPlay({tag, value: cardValue});
                if(continueStatus) {
                    
                    dispatch({
                        type: 'SET_PLAYER_MESSAGE',
                        message: 'Pick one more'
                    }); 
                } else {
                    dispatch({
                        type: 'SET_OPPONENT_TURN'
                    });
                }
            } else {
                if(continueStatus) {
                    playerCardPlay({tag, value: cardValue});

                    dispatch({
                        type: 'SET_OPPONENT_TURN'
                    });
                    dispatch({
                        type: 'STOP_CONTINUE_STATUS'
                    });
                } else {
                    dispatch({
                        type: 'SET_PLAYER_MESSAGE',
                        message: 'Not your turn'
                    });
                }
            }
        } else {
            if(playerTurf.length !== opponentTurf.length) {
                // if(opponentTurn) {
                    // opponentCardPlay({tag, value: cardValue});
                // }
                if(continueStatus) {
                    
                    dispatch({
                        type: 'SET_OPPONENT_MESSAGE',
                        message: 'Not your turn'
                    });
                } else {
                    if((playerTurf.length - opponentTurf.length) <= 2) {
                        opponentCardPlay({tag, value: cardValue});
                        
                        if((playerTurf.length - opponentTurf.length) === 1) {
                            
                            dispatch({
                                type: 'SET_PLAYER_TURN'
                            });
                        } else {
                            dispatch({
                                type: 'SET_OPPONENT_MESSAGE',
                                message: 'Pick one more'
                            }); 
                        }
                    } else {
                        dispatch({
                            type: 'SET_OPPONENT_MESSAGE',
                            message: 'Not your turn'
                        });
                    }
                }
            } else {
                dispatch({
                        type: 'SET_OPPONENT_MESSAGE',
                        message: 'Not your turn'
                });
            }
        }
    };
  
    const playerCardPlay = (item) => {
        dispatch({
            type: 'PLAYER_CARD_PLAY',
            playCard: item
        });
    };
    const opponentCardPlay = (item) => {
        dispatch({
            type: 'OPPONENT_CARD_PLAY',
            playCard: item
        });
    };
    useEffect(() => {
        if(playerTurf.length === 1 && opponentTurf.length === 1) {
            if(totalValue(playerTurf) !== totalValue(opponentTurf)) {
                const winner = totalValue(playerTurf) > totalValue(opponentTurf) ? 'player' : 'opponent';
                
                setTimeout(() => {
                    dispatch({
                        type: 'SHOW_RESULT'
                    });
                }, 2000);
                setTimeout(() => {
                    dispatch({
                        type: 'UPDATE_WINNER',
                        winner
                    });
                }, 5000);
            } else {
                setTimeout(() => {
                    dispatch({
                        type: 'SHOW_RESULT'
                    });
                    dispatch({
                        type: 'SET_GAME_TIE'
                    });
                }, 2000); 
            }
        } else if(playerTurf.length === opponentTurf.length && playerTurf.length % 2 === 1){
                    if(totalValue(playerTurf) !== totalValue(opponentTurf)) {
                        const winner = totalValue(playerTurf) > totalValue(opponentTurf) ? 'player' : 'opponent';
                        
                        setTimeout(() => {
                            dispatch({
                                type: 'SHOW_RESULT'
                            });
                        }, 2000);
                        setTimeout(() => {
                            dispatch({
                                type: 'UPDATE_WINNER',
                                winner
                            });
                        }, 5000);
                    } else {
                        setTimeout(() => {
                            dispatch({
                                type: 'SHOW_RESULT'
                            });
                            dispatch({
                                type: 'SET_GAME_TIE'
                            });
                        }, 2000); 
                    }
        } else if((playerDeck.length === 0 || opponentDeck.length === 0) && !gameStart) {
                
                const winner = playerDeck.length === 0 ? 'Player Two' : 'Player One';
            
            setTimeout(() => {
                dispatch({
                    type: 'SHOW_RESULT'
                });
            }, 2000);
            setTimeout(() => {
                dispatch({
                    type: 'SET_WINNER',
                    winner
                });
            }, 5000);
        }
        return () => {
            console.log('Clean-up dashboard');
        }
    }, [playerDeck, opponentDeck]);

    const totalValue = arr => {
        const values= arr.map(a => parseInt(a.value, 10));
        const total = values.reduce((a, b) => a + b, 0);
        return total;
    }

    return (
        <div className='dashboard'> 
            <div className='player'>
                {playerDeck.map((item, idx) => (
                    <Card 
                        key={idx}
                        tag={`${item.tag}/player/${item.value}`}
                        flipState={item.flipState}
                        src={`${deckApiUrl}${item.tag}.png`}
                        onClick={(e, item) => handleClick(e, item)}
                    />
                ))}
                <p className={`player-tag ${playerTurn && 'active'}`}>{!username ? playerTag : username}</p>
            </div>
            <div className='game-board'>
                <div className='player-message'>{playerMessage}</div>
                <div className='card-board'>
                    <div className='left-hand'>      
                        {playerTurf.map((item, idx) => (
                            <Card 
                            key={idx}
                            tag={`${item.tag}/player/${item.value}`}
                            flipState={item.flipState}
                            src={showResult ? `${deckApiUrl}${item.tag}.png` :`${deckApiUrl}XX.png`}
                            />
                            ))}
                    </div>
                    <div className='result-board'>
                        {showResult ? 
                        <Fragment>
                            <br/>
                            Player One<br/>
                            {totalValue(playerTurf)}<br/>
                                ||<br/>
                            {totalValue(opponentTurf)}<br/>
                            Player Two<br/>
                            -------------- <br/>
                            {!gameTie ?
                            <>
                            {!gameEnd ?
                                <>
                                {totalValue(playerTurf) > totalValue(opponentTurf) ? 'Player One takes all' : 'Player Two takes all'}
                                </>
                                :
                                <>
                                {totalValue(playerTurf) > totalValue(opponentTurf) ? 'Player One WINS' : 'Player Two WINS'}
                                </>
                            }
                            </>
                            :
                            <span>
                                {continueStatus && <>GAME TIE, PICK TWO CARDS EACH!!!</>}
                            </span>
                            }
                            <br/>
                            -------------- <br/>
                        </Fragment>
                        :
                        <Fragment>
                            {/* Calculating...     */}
                        </Fragment>}
                    </div>
                    <div className='right-hand'>
                        {opponentTurf.map((item, idx) => (
                            <Card 
                            key={idx}
                            tag={`${item.tag}/opponent/${item.value}`}
                            flipState={item.flipState}
                            src={showResult ? `${deckApiUrl}${item.tag}.png` :`${deckApiUrl}XX.png`}
                            />
                            ))}
                    </div>
                </div>
                <div className='player-message'>{opponentMessage}</div>
            </div>
            <div className='player'>
                <p className={`player-tag ${opponentTurn && 'active'}`}>{opponentTag}</p>
                {opponentDeck.map((item, idx) => (
                    <Card 
                        key={idx}
                        tag={`${item.tag}/opponent/${item.value}`}
                        flipState={item.flipState}
                        src={`${deckApiUrl}XX.png`}
                        onClick={(e) => handleClick(e)}
                    />
                ))}
            </div>
        </div>
    )
}
