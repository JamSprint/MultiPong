import {
    combineReducers
} from 'redux';

import gameState from './game.state';

const rootReducer = combineReducers({
    gameState
});

export default rootReducer;