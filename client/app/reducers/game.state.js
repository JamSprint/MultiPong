export const UPDATE = 'GAME-STATE-UPDATE';

export default function gameState(state = {}, action) {
    switch (action.type) {
    case UPDATE:
        if (action.payload) {
            return JSON.parse(JSON.stringify(action.payload));
        }
        return state;
    default:
        return state;
    }
}