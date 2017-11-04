import socketModule from '../socket';

import directive from './leave.directive';

let leaveModule = angular.module('multipong.leave', [socketModule]);

leaveModule.directive('leave', directive);

export default leaveModule = leaveModule.name