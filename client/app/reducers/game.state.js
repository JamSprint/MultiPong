export const UPDATE = 'GAME-STATE-UPDATE';

export default function counter(state = {}, action) {
    switch (action.type) {
    case UPDATE:
        return JSON.parse(JSON.stringify(state));
    default:
        return state;
    }
}