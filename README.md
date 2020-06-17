# tabster-mobile

## React Native Setup

[React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## Running the app

To start the [Metro Bundler](https://facebook.github.io/metro/), first run

```
yarn react-native start
```

### iOS

To run on an iOS simulator:

```
yarn react-native run-ios
```

To run on a physical iOS device, follow [these](https://reactnative.dev/docs/running-on-device) instructions.

### Android

To run on an Android simulator, either:
- launch the simulator via `Tools > AVD Manager` in Android Studio 
- launch via command line with `emulator` command
  - `emulator -list-avds` lists available Android Virtual Devices
  - `emulator @AVD_NAME` runs the emulator with a specific AVD

Once the simulator is booted up, run:

```
yarn react-native run-android
```

To run on a physical Android device, follow [these](https://reactnative.dev/docs/running-on-device) instructions.
