Barebones React-Native app with react-native-navigation and redux.

### Stack

- React Native
- React Native Navigation
- Redux
- Redux Thunk
- Axios
- Firebase


**Dev Tools**
- EsLint: `npm run lint`
- React Dev Tools: `npm run react-devtools`


Stack tradeoffs -

- **State Management** - Redux over Mobx State Tree
- **Navigation** - React-Native-Navigation over React-Navigation
- **Authentication** - Firebase over React Persist or Redux

### Screenshots


<div style="background:#eeeeee; padding: 10px; text-align: center">
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/1.png" />
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/2.png" />
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/3.png" />
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/4.png" />
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/5.png" />
  <img style="margin:10px; height: 400px" src="{{site.baseurl}}/assets/images/screenshots/6.png" />
</div>

<br />

### Steps

1. Follow instructions [here](https://distant-gradient.github.io/blog/setting-up-android-studio-ubuntu/) to setup React Native and Android Studio & install dependencies.

2. Clone the repo and install packages.

```
git <GitHb link> ReactNativeBoilerplate
cd ReactNativeBoilerplate
npm install
```

3. Run Android Project

```
react-native run-android
```


### Key Features

The following features are demonstrated in the starter app.

- Authentication, with Persistence
- Native Navigation (Bottom Tabs, Programatic Routing)
- Redux based State Management
- Async Fetches using Redux-Thunk Middleware & Axios
- Header Customization
- List Scrolling
- Modal Handling
- EsLint + Airbnb Setup (locally)
- PropTypes based type checking

### To Do

- Analytics
- iOS Setup

### For iOS

This starter app does not support iOS, out of the box, since it was created on Linux. To extend this to iOS, do the following -
1. Go [here](https:\/\/facebook.github.io/react-native/docs/getting-started) and follow steps under "React Native CLI Quickstart" MacOS + iOS.
2. Next, go to [react-native-navigation](https:\/\/wix.github.io/react-native-navigation/#/docs/Installing) documentation and setup for iOS.

### Known Bugs

**[Only on Emulator] Firebase Issues**
- Auth action .then() code is not executing, unless additional click is pressed.
- Login Persistence. User does not move forward from loading screen unless 3 additional clicks are pressed

### Similar Starter Apps
- https://github.com/atoami/react-native-navigation-redux-starter-kit
- https://github.com/developer239/redux-react-native-wix-navigation-v2-with-auth
- https://github.com/StephenGrider/ReactNativeReduxCasts

#### Foot Notes

React-Native-Navigation is already installed and setup. So you **do not** need to do anything more for it.

In case you are setting up React-Native-Navigation ground up, follow steps [here](https://wix.github.io/react-native-navigation/#/docs/Installing).

While following above steps, in Step 5.1 (when running `npm run android`), you might get the following error -

**Could not get unknown property 'mergeResourcesProvider' for object of type com.android.build.gradle.internal.api.ApplicationVariantImpl. **

Steps to Fix

- In gradle-wrapper.properties, change distributionUrl to `distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.1-all.zip`
- In android/build.gradle file change gradle classpath to this: `classpath 'com.android.tools.build:gradle:3.3.0'`
- Remove node_modules, npm install, and `npm run android` again.

[Source](https://github.com/wix/react-native-navigation/issues/4757)


### Common Issues

**Firebase Auth hangs in the emulator**

- Open the SDK Manager (one of the icon in top right)
- Click on the 'SDK Tools' Tab
- Select and install Google Play Services and Google Repository
- Restart project. (`npm run android` & `react-native run-android`)

[Source](https://stackoverflow.com/questions/39137131/adding-firebase-to-android-studio-fails-to-resolve) to fix.


<br/><br/>
