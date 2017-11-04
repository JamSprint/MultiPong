import socketModule from '../socket';

import directive from './join.directive';

let joinModule = angular.module('multipong.join', [socketModule]);

joinModule.directive('join', directive);

export default joinModule = joinModule.name