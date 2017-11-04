import io from 'socket.io-client';

export default () => {

    let socket;

    const setupServerConnection = () => {
        socket = io('http://192.168.1.233:3000');
    }

    const setupServerCallbacks = () => {
        alert('handle server callbacks');
    }

    return {
        connect: () => {

            if (!socket) {
                setupServerConnection();
                setupServerCallbacks();
            } else {
                alert('already connected, bail')
            }
        }
    }
}