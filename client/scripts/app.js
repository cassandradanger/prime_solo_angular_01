console.log("Script Loaded");

var myApp = angular.module('myApp', []);
//javascript declaration of a new variable, calling upon angular to let it know that it's creating a new module

myApp.controller('WelcomeController', ["$scope", function($scope) {
    $scope.number_g = 0;
    $scope.number_rw = 0;
    $scope.number_lw = 0;
    $scope.number_d = 0;
    $scope.number_d1 = 0;
    $scope.number_center = 0;
    $scope.number_coach = 0;
    $scope.start = 26;
    $scope.heading = "Pick Your Team! You have: ";
    $scope.points = "26 points";
    ////////////////////////////////////////////////////////////////////
    $scope.crawford = function() {
        $scope.goalie = "Corey Crawford";
        $scope.image_g = "/stylesheets/goalies/crawford.png";
        $scope.number_g = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.bishop = function() {
        $scope.goalie = "Ben Bishop";
        $scope.image_g = "stylesheets/goalies/bishop.png";
        $scope.number_g = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.lundqvist = function() {
        $scope.goalie = "Henrik Lundqvist";
        $scope.image_g = "stylesheets/goalies/lundqvist.png";
        $scope.number_g = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.dubnyk = function() {
        $scope.goalie = "Devan Dubnyk";
        $scope.image_g = "stylesheets/goalies/dubnyk.png";
        $scope.number_g = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.price = function() {
        $scope.goalie = "Carey Price";
        $scope.image_g = "stylesheets/goalies/price.png";
        $scope.number_g = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.rinne = function() {
        $scope.goalie = "Pekka Rinne";
        $scope.image_g = "stylesheets/goalies/rinne.png";
        $scope.number_g = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
////////////////////////////////////////////////////////////////////////
    $scope.suter = function() {
        $scope.defense = "Ryan Suter";
        $scope.image_d = "stylesheets/left_defense/suter.png";
        $scope.number_d = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.subban = function() {
        $scope.defense = "PK Subban";
        $scope.image_d = "stylesheets/left_defense/subban.png";
        $scope.number_d = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.doughty = function() {
        $scope.defense = "Drew Doughty";
        $scope.image_d = "stylesheets/left_defense/doughty.png";
        $scope.number_d = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.keith = function() {
        $scope.defense = "Duncan Keith";
        $scope.image_d = "stylesheets/left_defense/keith.png";
        $scope.number_d = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.dumba = function() {
        $scope.defense = "Matt Dumba";
        $scope.image_d = "stylesheets/left_defense/dumba.png";
        $scope.number_d = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.shattenkirk = function() {
        $scope.defense = "Kevin Shattenkirk";
        $scope.image_d = "stylesheets/left_defense/shattenkirk.png";
        $scope.number_d = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
//////////////////////////////////////////////////////////////////////////
    $scope.weber = function() {
        $scope.defense1 = "Shea Weber";
        $scope.image_d1 = "stylesheets/right_defense/weber.png";
        $scope.number_d1 = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";

    };
    $scope.chara = function() {
        $scope.defense1 = "Zdeno Zhara";
        $scope.image_d1 = "stylesheets/right_defense/chara.png";
        $scope.number_d1 = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.karlsson = function() {
        $scope.defense1 = "Erik Karlsson";
        $scope.image_d1 = "stylesheets/right_defense/karlsson.png";
        $scope.number_d1 = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.pietrangelo = function() {
        $scope.defense1 = "Alex Pietrangelo";
        $scope.image_d1 = "stylesheets/right_defense/pietrangelo.png";
        $scope.number_d1 = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.giordano = function() {
        $scope.defense1 = "Mark Giordano";
        $scope.image_d1 = "stylesheets/right_defense/giordano.png";
        $scope.number_d1 = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.mcdonagh = function() {
        $scope.defense1 = "Ryan McDonagh";
        $scope.image_d1 = "stylesheets/right_defense/mcdonagh.png";
        $scope.number_d1 = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    ///////////////////////////////////////////////////////////////////////
    $scope.ovechkin = function() {
        $scope.left = "Alex Ovechkin";
        $scope.image_lw = "stylesheets/left_wing/ovechkin.png";
        $scope.number_lw = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";

    };
    $scope.sedin = function() {
        $scope.left = "Daniel Sedin";
        $scope.image_lw = "stylesheets/left_wing/sedin.png";
        $scope.number_lw = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.nash = function() {
        $scope.left = "Rick Nash";
        $scope.image_lw = "stylesheets/left_wing/nash.png";
        $scope.number_lw = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.foligno = function() {
        $scope.left = "Nick Foligno";
        $scope.image_lw = "stylesheets/left_wing/foligno.png";
        $scope.number_lw = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.parise = function() {
        $scope.left = "Zach Parise";
        $scope.image_lw = "stylesheets/left_wing/parise.png";
        $scope.number_lw = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.kreider = function() {
        $scope.left = "Chris Kreider";
        $scope.image_lw = "stylesheets/left_wing/kreider.png";
        $scope.number_lw = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.crosby = function() {
        $scope.center = "Sydney Crosby";
        $scope.image_center = "stylesheets/center/crosby.png";
        $scope.number_center = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";

    };
    $scope.toews = function() {
        $scope.center = "Jonathan Toews";
        $scope.image_center = "stylesheets/center/toews.png";
        $scope.number_center = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.kopitar = function() {
        $scope.center = "Anze Kopitar";
        $scope.image_center = "stylesheets/center/kopitar.png";
        $scope.number_center = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.stamkos = function() {
        $scope.center = "Steven Stamkos";
        $scope.image_center = "stylesheets/center/stamkos.png";
        $scope.number_center = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.getzlaf = function() {
        $scope.center = "Ryan Getzlaf";
        $scope.image_center = "stylesheets/center/getzlaf.png";
        $scope.number_center = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.datsyuk = function() {
        $scope.center = "Pavel Datsyuk";
        $scope.image_center = "stylesheets/center/datsyuk.png";
        $scope.number_center = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.kane = function() {
        $scope.right = "Patrick Kane";
        $scope.image_rw = "stylesheets/right_wing/kane.png";
        $scope.number_rw = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";

    };
    $scope.perry = function() {
        $scope.right = "Corey Perry";
        $scope.image_rw = "stylesheets/right_wing/perry.png";
        $scope.number_rw = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.louis = function() {
        $scope.right = "Martin St. Louis";
        $scope.image_rw = "stylesheets/right_wing/louis.png";
        $scope.number_rw = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.kessel = function() {
        $scope.right = "Phil Kessel";
        $scope.image_rw = "stylesheets/right_wing/kessel.png";
        $scope.number_rw = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.gaborik = function() {
        $scope.right = "Marian Gaborik";
        $scope.image_rw = "stylesheets/right_wing/gaborik.png";
        $scope.number_rw = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.carter = function() {
        $scope.right = "Jeff Carter";
        $scope.image_rw = "stylesheets/right_wing/carter.png";
        $scope.number_rw = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    ///////////////////////////////////////////////////////////////////////////////////
    $scope.yeo = function() {
        $scope.coach = "Mike Yeo";
        $scope.image_coach = "stylesheets/coach/yeo.png";
        $scope.number_coach = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";

    };
    $scope.babcock = function() {
        $scope.coach = "Mike Babcock";
        $scope.image_coach = "stylesheets/coach/babcock.png";
        $scope.number_coach = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.roy = function() {
        $scope.coach = "Patrick Roy";
        $scope.image_coach = "stylesheets/coach/roy.png";
        $scope.number_coach = 3;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.therrien = function() {
        $scope.coach = "Michel Therrien";
        $scope.image_coach = "stylesheets/coach/therrien.png";
        $scope.number_coach = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.quenneville = function() {
        $scope.coach = "Joel Quenneville";
        $scope.image_coach = "stylesheets/coach/quenneville.png";
        $scope.number_coach = 5;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    $scope.sutter = function() {
        $scope.coach = "Darryl Sutter";
        $scope.image_coach = "stylesheets/coach/sutter.png";
        $scope.number_coach = 4;
        $scope.points = "" + ($scope.start - $scope.number_g - $scope.number_d - $scope.number_d1 - $scope.number_lw - $scope.number_rw - $scope.number_center - $scope.number_coach) + " points";
    };
    ///////////////////////////////////////////////////////////////////////////////////




}]);






































