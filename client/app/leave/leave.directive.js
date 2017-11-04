export default /* @ngInject */ (socket) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope) => {
            $scope.leave = () => {
                socket.leave();
            }
        }
    };
}