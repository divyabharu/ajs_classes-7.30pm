app.service("homeService",homeService);
function homeService($http,$localStorage){
    this.aboutData = function(){
        return $http.post("http://localhost:8080/about",
            {'token':$localStorage.poc.data.token})
            .then(function(posRes){
                return posRes.data.products;
            },function(errRes){
                return errRes;
            });
    }


    this.portfolioData = function(){
        return $http.post("http://localhost:8080/portfolio",
            {'token':$localStorage.poc.data.token})
            .then(function(posRes){
                return posRes.data;
            },function(errRes){
                return errRes;
            });
    }


    this.contactData = function(){
        return $http.post("http://localhost:8080/contact",
            {'token':$localStorage.poc.data.token})
            .then(function(posRes){
                return posRes.data;
            },function(errRes){
                return errRes;
            });
    }
}