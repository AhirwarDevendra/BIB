angular.module('bib.controllers',[])

.controller('SplashCtrl',['$state','$http',function($state,$http){
    console.log("Sparkle called");
  
    setTimeout(function()
                {
                    $state.go('app.home')
                },1800);
}])

.controller('BibCtrl',['$scope','$state','$ionicHistory',function($scope,$state,$ionicHistory){
	console.log("Bib called");
  
    $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
         expire: 300
    });
  
    $scope.category = function()
    {
        console.log('Category Called');
        $state.go('app.category');
    }
  
    $scope.recentnews = function()
    {
      
        $state.go('app.home');
      
    }
  
  
    
  
}])



.controller('HomeCtrl',['$scope','$ionicHistory',function($scope,$ionicHistory){
    console.log("Home called");
  
  
    
  
    $scope.newsReports = 
      [
        {
            id:1,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
            reportedby:"Devendra",
            category:"Nature"
        },
        {
            id:2,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/13063445/000_EL4UM.jpg",
            reportedby:"Devendra",
            category:"Sports"
        },
        {
            id:3,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/11141827/PM-Modi-580x350.jpg",
            reportedby:"Devendra",
            category:"Politics"
        },
        {
            id:4,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/12111755/army-580x392.jpg",
            reportedby:"Devendra",
            category:"Politics"
        },
        {
            id:5,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",            image:"http://www.wahcricket.com/img/images/clients/abp/content/2016/aug/628/ajinkyarahanerohitsharmateamindia1308.jpg",
            reportedby:"Devendra",
            category:"Sports"
        }
        
      ];
  
      console.log($scope.newsReports);
}])

.controller('CategoryCtrl',['$scope','$state',function($scope,$state){
	console.log("Category called");
  
    $scope.newsCategory = 
    [
      {
          id:1,
          name:"Politics",
          face:"img/category/judge.png"
      },
      {
          id:2,
          name:"Technology",
          face:"img/category/smartphone.png"
      },
      {
          id:3,
          name:"Business",
          face:"img/category/graph.png"
      },
      {
          id:4,
          name:"Crime",
          face:"img/category/gun.png"
      },
      {
          id:5,
          name:"Sports",
          face:"img/category/cricket.png"
      }      
    ];
  
  console.log($scope.newsCategory);
}])

.controller('NewsFeedsCtrl',['$scope','$state','$ionicHistory',function($scope,$state,$ionicHistory){
  
  $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
         expire: 300
    });
  
  console.log('News Feeds Called');
  
  $scope.newsReports = 
      [
        {
            id:1,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/13063445/000_EL4UM.jpg",
            reportedby:"Devendra",
            category:"Nature"
        },
        {
            id:2,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
            reportedby:"Devendra",
            category:"Sports"
        },
        {
            id:3,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/11141827/PM-Modi-580x350.jpg",
            reportedby:"Devendra",
            category:"Politics"
        },
        {
            id:4,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image:"http://static.abplive.in/wp-content/uploads/sites/2/2016/08/12111755/army-580x392.jpg",
            reportedby:"Devendra",
            category:"Politics"
        },
        {
            id:5,
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",            image:"http://www.wahcricket.com/img/images/clients/abp/content/2016/aug/628/ajinkyarahanerohitsharmateamindia1308.jpg",
            reportedby:"Devendra",
            category:"Sports"
        }
        
      ];
  
      console.log($scope.newsReports);
  
}])