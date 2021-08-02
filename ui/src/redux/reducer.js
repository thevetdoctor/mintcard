import actions from "./actions";

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case actions.setUser.type:
            console.log('Adding user state');
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
                ...state,
                user: action.user
            };          
        case actions.shuffleCards.type:
            console.log('Shuffle cards');
            const [playerDeck, opponentDeck] = action.deck;
            localStorage.setItem('playerdeck', JSON.stringify(playerDeck));
            localStorage.setItem('opponentdeck', JSON.stringify(opponentDeck));
            localStorage.setItem('playerturf', JSON.stringify([]));
            localStorage.setItem('opponentturf', JSON.stringify([]));
            localStorage.setItem('playerturn', true);
            localStorage.setItem('opponentturn', false);            
            return {
                ...state, 
                playerDeck, 
                opponentDeck,
                playerTurf: [],
                opponentTurf: [],
                playerMessage: '',
                opponentMessage: '',
                playerTurn: true,
                opponentTurn: false,
                showResult: false,
                continueStatus: false
            };
        case actions.playerCardPlay.type:
            console.log('Player playing a card');
            const newPlayerDeck = [...state.playerDeck];
            const playerCardIndex = newPlayerDeck.findIndex(item => item.tag === action.playCard.tag);
            // console.log(playerCardIndex, newPlayerDeck);
            newPlayerDeck.splice(playerCardIndex, 1);
            localStorage.setItem('playerturf', JSON.stringify([...state.playerTurf, action.playCard]));
            localStorage.setItem('playerdeck', JSON.stringify(newPlayerDeck));
            
            return {
                ...state, 
                playerTurf: [...state.playerTurf, action.playCard],
                playerDeck: newPlayerDeck,
                playerMessage: '',
                opponentMessage: ''
            };
        case actions.opponentCardPlay.type:
            console.log('Opponent playing a card');
            const newOpponentDeck = [...state.opponentDeck];
            const opponentCardIndex = newOpponentDeck.findIndex(item => item.tag ===  action.playCard.tag);
            // console.log(opponentCardIndex, newOpponentDeck);
            newOpponentDeck.splice(opponentCardIndex, 1);
            localStorage.setItem('opponentturf', JSON.stringify([...state.opponentTurf, action.playCard]));
            localStorage.setItem('opponentdeck', JSON.stringify(newOpponentDeck));
            return {
                ...state, 
                opponentTurf: [...state.opponentTurf, action.playCard],
                opponentDeck: newOpponentDeck,
                playerMessage: '',
                opponentMessage: ''
            };
        case actions.setPlayerTurn.type:
            console.log('Setting player turn');
            localStorage.setItem('playerturn', true);
            localStorage.setItem('opponentturn', false);
            return {
                ...state,
                playerTurn: true,
                opponentTurn: false,
                playerMessage: '',
                opponentMessage: ''            
            };
        case actions.setOpponentTurn.type:
            console.log('Setting opponent turn');
            localStorage.setItem('opponentturn', true);
            localStorage.setItem('playerturn', false);
            return {
                ...state,
                opponentTurn: true,
                playerTurn: false,
                playerMessage: '',
                opponentMessage: ''            
            };
        case actions.setPlayerMessage.type:
            console.log('Setting player message');
            return {
                ...state,
                playerMessage: action.message,
                opponentMessage: ''
            };
        case actions.setOpponentMessage.type:
            console.log('Setting opponent message');
            return {
                ...state,
                opponentMessage: action.message,
                playerMessage: ''
            };
        case actions.showResult.type:
            console.log('Showing result');
            return {
                ...state,
                showResult: true
            };
        case actions.updateWinner.type:
            console.log('Updating winner', action.winner);
            const combinedCards = [...state.playerTurf, ...state.opponentTurf];   
            if(action.winner === 'player') {
                const updatedPlayerDeck = [...state.playerDeck, ...combinedCards];
                localStorage.setItem('playerdeck', JSON.stringify(updatedPlayerDeck));
                localStorage.setItem('playerturf', JSON.stringify([]));
                localStorage.setItem('opponentturf', JSON.stringify([]));
                return {
                    ...state,
                    showResult: false,
                    playerTurf: [],
                    opponentTurf: [],
                    playerDeck: updatedPlayerDeck
                };
            } else {
                const updatedOpponentDeck = [...state.opponentDeck, ...combinedCards];     
                localStorage.setItem('opponentdeck', JSON.stringify(updatedOpponentDeck));
                localStorage.setItem('playerturf', JSON.stringify([]));       
                localStorage.setItem('opponentturf', JSON.stringify([]));       
                return {
                    ...state,
                    showResult: false,
                    playerTurf: [],
                    opponentTurf: [],
                    opponentDeck: updatedOpponentDeck
            };
        }
        case actions.setGameTie.type:
            console.log('Showing game tie');
            return {
                ...state,
                // showResult: true,
                gameTie: true,
                continueStatus: true
            };
        case actions.stopContinueStatus.type:
            console.log('Stopping player continue status');
            return {
                ...state,
                gameTie: false,
                continueStatus: false
            };
        case actions.setLogOut.type:
        console.log('Logout');
        localStorage.clear();
        return {
            user: null,
            publicData: {},
            repoData: [],
            todos: [],
            authenticated: false
        };

        default:
        return state;
    }
};
 
export const initialState = {
    playerDeck: JSON.parse(localStorage.getItem('playerdeck')) || [],
    opponentDeck: JSON.parse(localStorage.getItem('opponentdeck')) || [],
    playerTurf: JSON.parse(localStorage.getItem('playerturf')) || [],
    opponentTurf: JSON.parse(localStorage.getItem('opponentturf')) ||  [],
    playerTurn: JSON.parse(localStorage.getItem('playerturn')) || false,
    opponentTurn: JSON.parse(localStorage.getItem('opponentturn')) || false,
    playerTag: 'Player One',
    opponentTag: 'Player Two',
    playerMessage: '',
    opponentMessage: '',
    gameTie: false,
    continueStatus: false,
    email: '',
    password: '',
    showResult: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    username: JSON.parse(localStorage.getItem('username')) || '',
    authenticated: JSON.parse(localStorage.getItem('authenticated')) || false
};
