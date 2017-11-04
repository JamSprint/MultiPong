import socketService from './socket.service';

let socketModule = angular.module('multipong.socket', []);

socketModule.service('socket', socketService);

export default socketModule = socketModule.name