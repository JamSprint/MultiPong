export default /* @ngInject */ (socket) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope, element, attr) => {

            $scope.join = () => {
                socket.connect({
                    'test': 'test'
                });
            }
        }
    };
}