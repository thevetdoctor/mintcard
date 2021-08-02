const actions = {
    setUser: { type: 'SET_USER'},
    shuffleCards: { type: 'SHUFFLE_CARDS'},
    playerCardPlay: { type: 'PLAYER_CARD_PLAY'},
    opponentCardPlay: { type: 'OPPONENT_CARD_PLAY'},
    setPlayerTurn: { type: 'SET_PLAYER_TURN'},
    setOpponentTurn: { type: 'SET_OPPONENT_TURN'},
    setPlayerMessage: { type: 'SET_PLAYER_MESSAGE'},
    setOpponentMessage: { type: 'SET_OPPONENT_MESSAGE'},
    showResult: { type: 'SHOW_RESULT'},
    updateWinner: { type: 'UPDATE_WINNER'},
    setGameTie: { type: 'SET_GAME_TIE'},
    stopContinueStatus: { type: 'STOP_CONTINUE_STATUS'},
    setLogOut: { type: 'SET_LOGOUT'}
  }
  
  export default actions;
  