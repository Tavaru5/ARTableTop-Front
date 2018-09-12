# ARTableTop-Front

## Setup
* Once the project is cloned, run `npm install` in the root directory
* Create the file ".keys.js" in the root directory:
  - `export default const keys = {AppKey: "APP-KEY-GOES-HERE"}`
* For Android:
  - Open "./android/build.gradle" in Android Studio
  - [Make sure your device is set up for debugging](https://developer.android.com/studio/run/device#setting-up)
    - \-OR\-
  - Run on an emulator

## Branches
I am currently setting this up as `master` being essentially the "release" branch. It should always compile, and we shouldn't merge there often. `dev` will be the core branch for us to branch off of and merge back into. Right now I'm not requiring reviews for merges into `dev`, but hopefully in the future we could get into that habit.
