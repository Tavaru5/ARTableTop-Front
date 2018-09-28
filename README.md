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
`master` is essentially the "release" branch. It should always compile, and we shouldn't merge there often. 
`dev` is the core branch for us to branch off of and merge back into.
Aside from time constrained items, merges into `dev` should have at least one reviewer.

## Project
The GitHub project board is set up to track issues and PRs. There are currently four columns:
- To Do: Issues that need to be done, but are not currently being worked on go here. They may be issues that have previously had work done in them, but there is none currently.
- In Progress: Issues actively in development. Not necessarily at this moment, but more of a general "I'm working on this somewhat frequently."
- Needs Review: Issues that are in PRs waiting for code review.
- Done: Issues that have been completed and meet a definition of done.
