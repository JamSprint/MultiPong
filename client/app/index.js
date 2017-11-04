import angular from 'angular';

import io from 'socket.io-client';

export const app = angular.module('multipong', []);

/**
 * Bootstrap angular to document
 */
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        strictDi: false
    });

    const socket = io('http://192.168.1.233:3000');
});