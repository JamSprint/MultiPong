import angular from 'angular';
import reducers from './reducers';
import ngRedux from 'ng-redux';
import joinModule from './join';
import leaveModule from './leave';

import {
    combineReducers
} from 'redux';

export const app = angular.module('multipong', [ngRedux, joinModule, leaveModule]);

app.config(($ngReduxProvider) => {
    let reducer = combineReducers(reducers);

    $ngReduxProvider.createStoreWith(reducers, []);
});

/**
 * Bootstrap angular to document
 */
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        strictDi: false
    });
});