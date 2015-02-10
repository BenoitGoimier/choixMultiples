angular.module('listesApp').controller('ListesController', [ '$scope', function($scope){
    $scope.step = 1;
    $scope.dispoItems = [
        {
            url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
            title: 'Create a slide-out footer with $scope neat z-index trick',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/06/digital-clock/',
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
            title: 'Mini AJAX File Upload Form',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg',
            active: false
        },
        {
            url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg',
            active: false
        }
    ];

    $scope.includedItems = [];

    $scope.selectedDispoItems = [];

    $scope.changeStep = function(){
        $scope.step = !$scope.step;
    };

    $scope.addAllToIncluded = function() {
        for (var i = 0; i < $scope.dispoItems.length; i++) {
            if ($scope.dispoItems[i].active) {
                $scope.dispoItems[i].active = !$scope.dispoItems[i].active;
            }
            $scope.includedItems.push($scope.dispoItems[i]);
        }

        for (var i = 0; i < $scope.includedItems.length; i++) {
            for (var j = 0; j < $scope.dispoItems.length; j++) {
                if ($scope.includedItems[i] == $scope.dispoItems[j]) {
                    $scope.dispoItems.splice(j, 1);
                }
            }
        }
    };

    $scope.removeAllFromIncluded = function() {
        for (var i = 0; i < $scope.includedItems.length; i++) {
            if ($scope.includedItems[i].active) {
                $scope.includedItems[i].active = !$scope.includedItems[i].active;
            }
            $scope.dispoItems.push($scope.includedItems[i]);
        }

        for (var i = 0; i < $scope.includedItems.length; i++) {
            for (var j = 0; j < $scope.dispoItems.length; j++) {
                if ($scope.includedItems[i] == $scope.dispoItems[j]) {
                    $scope.includedItems.splice(i, 1);
                }
            }
        }
    };

    $scope.select = function(item) {
        item.active = !item.active;
    };

    $scope.addToIncluded = function() {
        for (var i = 0; i < $scope.dispoItems.length; i++) {
            if ($scope.dispoItems[i].active) {
                $scope.dispoItems[i].active = !$scope.dispoItems[i].active;
                $scope.includedItems.push($scope.dispoItems[i]);
            }
        }

        for (var i = 0; i < $scope.includedItems.length; i++) {
            for (var j = 0; j < $scope.dispoItems.length; j++) {
                if ($scope.includedItems[i] == $scope.dispoItems[j]) {
                    $scope.dispoItems.splice(j, 1);
                }
            }
        }
    };

    $scope.addToIncludedOne = function(item) {
        $scope.includedItems.push(item);

        for (var i = 0; i < $scope.includedItems.length; i++) {
            for (var j = 0; j < $scope.dispoItems.length; j++) {
                if ($scope.includedItems[i] == $scope.dispoItems[j]) {
                    $scope.dispoItems.splice(j, 1);
                }
            }
        }
    };

    $scope.removeFromIncluded = function() {
        for(var i = 0; i < $scope.includedItems.length; i++){
            if ($scope.includedItems[i].active) {
                $scope.includedItems[i].active = !$scope.includedItems[i].active;
                $scope.dispoItems.push($scope.includedItems[i]);
            }
        }

        for (var i = 0; i < $scope.dispoItems.length; i++) {
            for (var j = 0; j < $scope.includedItems.length; j++) {
                if ($scope.dispoItems[i] == $scope.includedItems[j]) {
                    $scope.includedItems.splice(j, 1);
                }
            }
        }
    };

    $scope.countActive = function() {
        var totalActive = 0;

        for(var i = 0; i < $scope.dispoItems.length; i++){
            if ($scope.dispoItems[i].active) {
                totalActive++;
            }
        }

        return totalActive;
    };
}]);