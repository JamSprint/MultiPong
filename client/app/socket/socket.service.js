import io from 'socket.io-client';

const SERVER_URL = 'http://192.168.1.233:3000';

export default () => {

    let socket;

    const join = (name) => {
        socket.emit('join', name);
    };

    const setupServerConnection = () => {
        socket = io('http://192.168.1.233:3000');
    };

    const setupServerCallbacks = () => {
        socket.on('gameState', (state) => {});
    };

    return {
        join: (name) => {

            if (!socket) {
                setupServerConnection();
                setupServerCallbacks();

                join(name);
            } else {
                alert('already connected, bail')
            }
        }
    }
}