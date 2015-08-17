# Angular-Workshop
Nearsoft angular workshop, intro to angular.

# Workshop requirements
1. Text editor or IDE or your choice
2. Have [Node](https://nodejs.org/) installed.
3. Clone this repo.
4. Go into the root directory type : "npm install"
5. Then: "bower install"
6. Last: "gulp webserver"

## Quick application intro
### Built in Directives, Data binding, & Filters
``` html
<!DOCTYPE html>
<!-- 
  * ngApp auto bootstraps the angular app
  * It acts as the root element of the app
  * One ngApp per application
  * More than one ngApp?. Use angular.bootstrap
-->
<html ng-app>
   <head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
            <meta charset="utf-8">
      <title>JS Bin</title>
   </head>
  <!-- ngInit evaluates and expression 
       and assigns it to the current scope 
   -->
   <body>
     
     
     <h1></h1>
     <h2 >Data binding</h2>

     <input type="text" 
            ng-init="name = 'John Snow'" 
            ng-model="name">
     
     <button ng-click="name = name + ' knows nothing! '"> ? </button>
     
     <p> {{ name }} </p>
     
     
     
     <h2>Repeaters</h2>
     
     <ul ng-init="hodor = ['hodor', 'hodor hodor', 'hodor']">
       
       <li ng-repeat="speak in hodor track by $index"> 
         
         {{ speak }}
         
       </li>
       
     </ul>
     
     
     
     
     <h2>Filters</h2>
     
     <div ng-init=" houses = ['Lannister', 'Starks', 'Targaryaen', 'Tyrell', 'Baratheon', 'Greyjoy', 'Tully', 'Arryn']"></div>
     
     <input type="text" ng-model="houseSearch" placeholder="search for the house of..">
     
     <ul>
       
       <li ng-repeat="house in houses | filter:houseSearch">
         
         {{ house }}
         
       </li>
       
     </ul>
     
     <input type="text" placeholder="Presupuesto pal bono" ng-model="presupuesto"> 
     <span> {{ presupuesto | currency }}</span>
   </body>
</html>
```
