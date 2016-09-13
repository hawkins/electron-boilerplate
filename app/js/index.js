
function tech (name, link) {
    return {name: name, link: link}
}

var app = angular.module('BoilerplateApp', ['ngMaterial']);

app.controller("bpCtrl", function($scope) {
    $scope.technologies = [ tech('Electron', 'http://electron.atom.io/')
                          , tech('AngularJS', 'https://angularjs.org/')
                          , tech('Angular Material', 'https://material.angularjs.org/latest/')
                          , tech('Sass', 'http://sass-lang.com/')
                          , tech('Srakowski\'s ElectronLikeVS template', 'https://github.com/srakowski/ElectronLikeVS')
                          ];
    $scope.status = 'Ready';
});
