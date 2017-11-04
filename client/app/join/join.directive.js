export default /* @ngInject */ (socket) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope, element, attr) => {

            $scope.join = () => {
                if ($scope.player) {
                    socket.join($scope.player);
                }
            }
        }
    };
}