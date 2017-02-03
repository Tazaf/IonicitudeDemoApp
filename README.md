# Table of Content
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introduction](#introduction)
- [Installation](#installation)
- [Ionicitude Usage](#ionicitude-usage)
- [App Usage](#app-usage)
- [Differences with the AR Cordova Sample App](#differences-with-the-ar-cordova-sample-app)
  - [Access World by URL](#access-world-by-url)
  - [World 8.2 Camera Switching](#world-82-camera-switching)
- [Contribution and Issues](#contribution-and-issues)
- [References](#references)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Introduction
This repository contains a demo application for using the [Wikitude Cordova Plugin](http://www.wikitude.com/developer/documentation/phonegap) in an [Ionic](http://ionicframework.com/) application with the [Ionicitude](https://github.com/Tazaf/ionicitude) package.

---
**All the AR Worlds contained in the app (in the [`www/wikitude-worlds`](https://github.com/Tazaf/IonicitudeDemoApp/tree/master/www/wikitude-worlds) folder) are the same as the ones in the [Augmented Reality Cordova Sample App](https://github.com/Wikitude/wikitude-cordova-plugin-samples), provided by Wikitude, except some minor changes in the [6_BrowsingPois_6_Bonus-CaptureScreen](https://github.com/Tazaf/IonicitudeDemoApp/tree/master/www/wikitude-worlds/6_BrowsingPois_6_Bonus-CaptureScreen) AR World, to comply with Ionicitude specs.**

---

# Installation
To install and launch this application, you need to do the following:

1. [Install](http://ionicframework.com/getting-started/) the Ionic framework (if it's not already on your computer)
2. Clone this repository on your computer
3. Restore the state of the Ionic project _(this means basically installing the plugins, notably the Wikitude Cordova Plugin)_ with:

  `ionic state restore`

4. Follow the [Wikitude License Key](https://github.com/Tazaf/ionicitude/wiki/Installing-the-Wikitude-plugin#wikitude-licence-key) part of the Ionicitude documentation to obtain and use your personnal Trial Key for the Wikitude Cordova Plugin.
5. Install whichever platform you want to build and install the app on:
  
  `ionic platform add ios`
  
  or
  
  `ionic platform add android@5.0.0` _(**This is important** ! See [here](https://github.com/Tazaf/ionicitude/wiki/Installing-the-Wikitude-plugin#android-platform-version-500) for more details)_

6. Run the app on the platform(s) you added:
 
  `ionic run ios`

  or

  `ionic run android`
  
  **Plase note that this step requires that you have a working environment for either of these platforms. If this is not the case, please refer to [this iOS Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html) or [this Android Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) from the Cordova website.**

# Ionicitude Usage
The Ionicitude package is used to manage the Wikitude Cordova Plugin in this Ionic app.

The code demonstrating this usage can be found in the [`www/js/app.js`](https://github.com/Tazaf/IonicitudeDemoApp/blob/master/www/js/app.js) file.

# App Usage
The app is fairly easy to use. The main screen shows you a list of sample AR Worlds demonstrating what you can achieve with the Wikitude Cordova plugin. Simply click on one of these AR World to see it in action.

**Some of these AR World request you to scan a particular photo or image. They can be found on the project folder: [www/wikitude-worlds/target_images_examples.pdf](https://github.com/Tazaf/IonicitudeDemoApp/blob/master/www/wikitude-worlds/target_images_examples.pdf)**

The code for each AR World can be found under the [`www/wikitude-worlds`](https://github.com/Tazaf/IonicitudeDemoApp/blob/master/www/wikitude-worlds/) folder.

# Differences with the [Wikitude Cordova Sample App](https://github.com/Tazaf/WikitudeCordovaDemoApp)

## Access World by URL

The Wikitude Cordova Sample App allows you to launch an AR World that is deploy on a distant server and accessible via an URL.

This feature is **not** present in the Ionicitude Demo App because it's not supported by the current version (0.2.1-alpha) of Ionicitude.

## World 8.2 Camera Switching

In the Wikitude Cordova Sample App, this AR World uses the front camera (if available) when launching.

This is not the case in the Ionicitude Demo App, because the current version (0.2.1-alpha) of Ionicitude doesn't support individual AR World settings.

# Contribution and Issues

Any contribution or enhancement to this Ionicitude Demo App are welcomed and will be appreciated.

If you experience bugs or strange behaviors while testing this app, please do not hesitate to raise an issue about it.

**In both case, please, use the GitHub tools of this repository (merge request and issues) rather than sending a personnal email. This way, it will be easier to manage and keep track of what's happening. Thanks !**

# References
- [Ionic documentation](http://ionicframework.com/docs/)
- [Wikitude Cordova Plugin documentation](http://www.wikitude.com/developer/documentation/phonegap)
- [Ionicitude documentation](https://github.com/Tazaf/ionicitude)

# License
This demo application is licensed under both the MIT Licence (as requested by [Ionicitude](https://github.com/Tazaf/ionicitude#license)) and the Apache v2.0 License (as requested by the [Augmented Reality Cordova Sample App](https://github.com/Wikitude/wikitude-cordova-plugin-samples#license)).

See [LICENCE-MIT.txt](https://github.com/Tazaf/IonicitudeDemoApp/blob/master/LICENSE-MIT.txt) and [LICENCE-APACHE.txt](https://github.com/Tazaf/IonicitudeDemoApp/blob/master/LICENSE-APACHE.txt), respectivly, for more information.
