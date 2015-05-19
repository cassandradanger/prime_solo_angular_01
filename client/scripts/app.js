console.log("Script Loaded");

var myApp = angular.module('myApp', []);
//javascript declaration of a new variable, calling upon angular to let it know that it's creating a new module

myApp.controller('WelcomeController', ["$scope", function($scope) {
    $scope.crawford = function() {
        $scope.goalie = "Corey Crawford";
        $scope.image_g = "/stylesheets/goalies/crawford.png";
    };
    $scope.bishop = function() {
        $scope.goalie = "Ben Bishop";
        $scope.image_g = "stylesheets/goalies/bishop.png";
    };
    $scope.lundqvist = function() {
        $scope.goalie = "Henrik Lundqvist";
        $scope.image_g = "stylesheets/goalies/lundqvist.png";
    };
    $scope.dubnyk = function() {
        $scope.goalie = "Devan Dubnyk";
        $scope.image_g = "stylesheets/goalies/dubnyk.png";
    };
    $scope.price = function() {
        $scope.goalie = "Carey Price";
        $scope.image_g = "stylesheets/goalies/price.png";
    };
    $scope.rinne = function() {
        $scope.goalie = "Pekka Rinne";
        $scope.image_g = "stylesheets/goalies/rinne.png";
    };
////////////////////////////////////////////////////////////////////////
    $scope.suter = function() {
        $scope.defense = "Ryan Suter";
        $scope.image_d = "stylesheets/left_defense/suter.png";
    };
    $scope.subban = function() {
        $scope.defense = "PK Subban";
        $scope.image_d = "stylesheets/left_defense/subban.png";
    };
    $scope.doughty = function() {
        $scope.defense = "Drew Doughty";
        $scope.image_d = "stylesheets/left_defense/doughty.png";
    };
    $scope.keith = function() {
        $scope.defense = "Duncan Keith";
        $scope.image_d = "stylesheets/left_defense/keith.png";
    };
    $scope.dumba = function() {
        $scope.defense = "Matt Dumba";
        $scope.image_d = "stylesheets/left_defense/dumba.png";
    };
    $scope.shattenkirk = function() {
        $scope.defense = "Kevin Shattenkirk";
        $scope.image_d = "stylesheets/left_defense/shattenkirk.png";
    };
//////////////////////////////////////////////////////////////////////////
    $scope.weber = function() {
        $scope.defense1 = "Shea Weber";
        $scope.image_d1 = "stylesheets/right_defense/weber.png";
    };
    $scope.chara = function() {
        $scope.defense1 = "Zdeno Zhara";
        $scope.image_d1 = "stylesheets/right_defense/chara.png";
    };
    $scope.karlsson = function() {
        $scope.defense1 = "Erik Karlsson";
        $scope.image_d1 = "stylesheets/right_defense/karlsson.png";
    };
    $scope.pietrangelo = function() {
        $scope.defense1 = "Alex Pietrangelo";
        $scope.image_d1 = "stylesheets/right_defense/pietrangelo.png";
    };
    $scope.giordano = function() {
        $scope.defense1 = "Mark Giordano";
        $scope.image_d1 = "stylesheets/right_defense/giordano.png";
    };
    $scope.mcdonagh = function() {
        $scope.defense1 = "Ryan McDonagh";
        $scope.image_d1 = "stylesheets/right_defense/mcdonagh.png";
    };
    ///////////////////////////////////////////////////////////////////////
    $scope.ovechkin = function() {
        $scope.left = "Alex Ovechkin";
        $scope.image_lw = "stylesheets/left_wing/ovechkin.png";
    };
    $scope.sedin = function() {
        $scope.left = "Daniel Sedin";
        $scope.image_lw = "stylesheets/left_wing/sedin.png";
    };
    $scope.nash = function() {
        $scope.left = "Rick Nash";
        $scope.image_lw = "stylesheets/left_wing/nash.png";
    };
    $scope.foligno = function() {
        $scope.left = "Nick Foligno";
        $scope.image_lw = "stylesheets/left_wing/foligno.png";
    };
    $scope.parise = function() {
        $scope.left = "Zach Parise";
        $scope.image_lw = "stylesheets/left_wing/parise.png";
    };
    $scope.kreider = function() {
        $scope.left = "Chris Kreider";
        $scope.image_lw = "stylesheets/left_wing/kreider.png";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.crosby = function() {
        $scope.center = "Sydney Crosby";
        $scope.image_center = "stylesheets/center/crosby.png";
    };
    $scope.toews = function() {
        $scope.center = "Jonathan Toews";
        $scope.image_center = "stylesheets/center/toews.png";
    };
    $scope.kopitar = function() {
        $scope.center = "Anze Kopitar";
        $scope.image_center = "stylesheets/center/kopitar.png";
    };
    $scope.stamkos = function() {
        $scope.center = "Steven Stamkos";
        $scope.image_center = "stylesheets/center/stamkos.png";
    };
    $scope.getzlaf = function() {
        $scope.center = "Ryan Getzlaf";
        $scope.image_center = "stylesheets/center/getzlaf.png";
    };
    $scope.datsyuk = function() {
        $scope.center = "Pavel Datsyuk";
        $scope.image_center = "stylesheets/center/datsyuk.png";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.kane = function() {
        $scope.right = "Patrick Kane";
        $scope.image_rw = "stylesheets/right_wing/kane.png";
    };
    $scope.perry = function() {
        $scope.right = "Corey Perry";
        $scope.image_rw = "stylesheets/right_wing/perry.png";
    };
    $scope.louis = function() {
        $scope.right = "Martin St. Louis";
        $scope.image_rw = "stylesheets/right_wing/louis.png";
    };
    $scope.kessel = function() {
        $scope.right = "Phil Kessel";
        $scope.image_rw = "stylesheets/right_wing/kessel.png";
    };
    $scope.gaborik = function() {
        $scope.right = "Marian Gaborik";
        $scope.image_rw = "stylesheets/right_wing/gaborik.png";
    };
    $scope.carter = function() {
        $scope.right = "Jeff Carter";
        $scope.image_rw = "stylesheets/right_wing/carter.png";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.yeo = function() {
        $scope.coach = "Mike Yeo";
        $scope.image_coach = "stylesheets/coach/yeo.png";
    };
    $scope.babcock = function() {
        $scope.coach = "Mike Babcock";
        $scope.image_coach = "stylesheets/coach/babcock.png";
    };
    $scope.roy = function() {
        $scope.coach = "Patrick Roy";
        $scope.image_coach = "stylesheets/coach/roy.png";
    };
    $scope.therrien = function() {
        $scope.coach = "Michel Therrien";
        $scope.image_coach = "stylesheets/coach/therrien.png";
    };
    $scope.quenneville = function() {
        $scope.coach = "Joel Quenneville";
        $scope.image_coach = "stylesheets/coach/quenneville.png";
    };
    $scope.sutter = function() {
        $scope.coach = "Darryl Sutter";
        $scope.image_coach = "stylesheets/coach/sutter.png";
    };
    ///////////////////////////////////////////////////////////////////////////////////




}]);






































