export default /* @ngInject */ (socket) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope, element, attr) => {

            $scope.leave = () => {
                if ($scope.player) {
                    socket.leave($scope.player);
                }
            }
        }
    };
}