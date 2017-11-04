import angular from 'angular';

export const app = angular.module('multipong', []);

/**
 * Bootstrap angular to document
 */
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        strictDi: false
    });

    alert('done');
});