app.controller('initializer', function($scope, $rootScope, sessionService){
    $scope.init = function(){
        $rootScope.socket = io();
        $rootScope.currentUser = sessionService.getAuthUser().name;
        $rootScope.link1 = "#!/";
        $rootScope.link2 = "#!/login";
        $rootScope.link3 = "#!/register";
        
        $rootScope.linkName1 = "Home";
        $rootScope.linkName2 = "Login";
        $rootScope.linkName3 = "Register";
    }
})