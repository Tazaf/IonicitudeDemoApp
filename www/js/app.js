// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('demo', ['ionic', 'IonicitudeModule'])

  .run(function ($ionicPlatform, Ionicitude) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      // The code placed inside the $ionicPlatform.ready() function is executed only when the device is ready,
      // so this is a perfect place to call the Ionicitude.init() method.
      Ionicitude.init()
        .then(function () {
          console.log('Here you go. Ionicitude is fully initialized !');
          // Now that Ionicitude is initialized, we can safely add the Actions that could be called from within an AR View.
          // Note that these actions will be executed by the Ionic WebView and in its context.
          // To call this captureScreen action, there should be, in one of your AR World JS code and assuming that you're using Ionicitude's CHM, something like :
          //  document.location = architectsdk://captureScreen
          Ionicitude
            .addAction(captureScreen)
            .addAction(markerselected);
        })
        .catch(function (error) {
          console.log("Hu-ho..! Something has failed !", error);
        });

      // It suggested to declare your Action as named function instead of passing callbacks to Ionicitude.addAction().
      // It's somewhat more readable.

      // The call to this Action is in www/wikitude-worlds/6_BrowsingPois_6_Bonus-CaptureScreen/js/capturescreen.js:283
      function captureScreen() {
        Ionicitude.captureScreen(true, null)
          .then(function (absoluteFilePath) {
            console.log("snapshot stored at:\n" + absoluteFilePath);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      // The call to this Action is in www/wikitude-worlds/6_BrowsingPois_6_Bonus-CaptureScreen/js/capturescreen.js:126
      function markerselected(service, params) {
        console.log('This is the marker #' + params.id + ', that is named ' + params.title + ', and that has this description: ' + params.description);
      }
    });
  })

  .controller('MainCtrl', function ($scope, Ionicitude) {
    $scope.launchAR = function (ref) {
      try {
        // The ref passed as an argument to Ionicitude.launchAR() must be the name
        // of a directory in the wikitude-worlds directory.
        Ionicitude.launchAR(ref)
          .then(function () {
            console.log('OK ! The ' + ref + ' AR World has been perfectly launched !');
          })
          .catch(function (error) {
            console.log('Error while trying to launch the ' + ref + ' AR World.', error);
          })
      } catch (error) {
        console.log('But... Why ?! Something happened ?', error);
      }
    }
  });
