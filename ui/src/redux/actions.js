const actions = {
    setUser: { type: 'SET_USER'},
    setUsername: { type: 'SET_USERNAME'},
    setPassword: { type: 'SET_PASSWORD'},
    setEmail: { type: 'SET_EMAIL'},
    setTC: { type: 'SET_TC'},
    setAuthenticate: { type: 'SET_AUTHENTICATE'},
    setTag: { type: 'SET_TAG'},

    shuffleCards: { type: 'SHUFFLE_CARDS'},
    playerCardPlay: { type: 'PLAYER_CARD_PLAY'},
    opponentCardPlay: { type: 'OPPONENT_CARD_PLAY'},
    setPlayerTurn: { type: 'SET_PLAYER_TURN'},
    setOpponentTurn: { type: 'SET_OPPONENT_TURN'},
    setPlayerMessage: { type: 'SET_PLAYER_MESSAGE'},
    setOpponentMessage: { type: 'SET_OPPONENT_MESSAGE'},
    showResult: { type: 'SHOW_RESULT'},
    updateWinner: { type: 'UPDATE_WINNER'},
    setWinner: { type: 'SET_WINNER'},
    setGameTie: { type: 'SET_GAME_TIE'},
    stopContinueStatus: { type: 'STOP_CONTINUE_STATUS'},
    showRules: { type: 'SHOW_RULES'},
    setLogOut: { type: 'SET_LOGOUT'}
  }
  
  export default actions;
  