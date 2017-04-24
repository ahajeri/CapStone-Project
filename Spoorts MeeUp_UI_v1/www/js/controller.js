/**
 * Created by Vikram on 4/7/2017.
 */
angular.module('starter.controllers', ['ionic'])


  .controller('MapCtrl', ['$scope', function($scope) {
// Code will be here
  }])


  .directive('map', function() {
    return {
      restrict: 'A',
      link:function(scope, element, attrs){

        var locations = [
          ['Malley Center', 37.3492264,  -121.9371648, 4,'https://www.scu.edu/students/'],
          ['Santa clara Gym 1', 37.353059, -121.936603, 5,'https://www.scu.edu/students/'],
          ['Santa clara Gym 2', 37.3501577,-121.9384859,3,'https://www.scu.edu/students/'],
          ['Santa clara Gym 3', 37.3503509,-121.9420535, 2,'https://www.scu.edu/students/'],
          ['Santa clara Gym 4', 37.350443,-121.9224147, 1,'https://www.scu.edu/students/']
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: new google.maps.LatLng(37.3501577,-121.9384859),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icon = {
          url: 'http://icons.iconarchive.com/icons/sonya/swarm/256/gym-icon.png', // url
          scaledSize: new google.maps.Size(25, 25), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: icon,
            url: locations[i][4]
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
              map.setZoom(18);
              map.setCenter(marker.getPosition());
            }
          })(marker, i));

          google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
            return function() {
              window.location.href = this.url;
            }
          })(marker, i));
        }

      }


    };
  })







