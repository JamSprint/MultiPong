export default /* @ngInject */ (socket, $ngRedux) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope, element, attr) => {

            let player = 'undefined';

            $ngRedux.subscribe(() => {

            });
        }
    };
}