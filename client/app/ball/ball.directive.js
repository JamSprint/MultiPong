export default /* @ngInject */ (socket, $ngRedux) => {

    return {
        restrict: 'C',
        scope: true,
        link: ($scope, element, attr) => {

            $ngRedux.subscribe(() => {
                const {
                    gameState
                } = $ngRedux.getState();

                if (gameState) {
                    const {
                        ballPosition
                    } = gameState;

                    const heightStep = (600 - 20) / 100;
                    const widthStep = (600 - 20) / 100;


                    element[0].style.top = (ballPosition.y * heightStep) + 'px';
                    element[0].style.left = (ballPosition.x * widthStep) + 'px';
                }

                console.log(gameState);
            });
        }
    };
}