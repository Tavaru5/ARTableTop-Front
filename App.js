/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";
import keys from "./.keys.js";

var sharedProps = {
  apiKey: keys.AppKey
};

// Sets the default scene
var Game = require("./js/Game");

var AR_NAVIGATOR_TYPE = "AR";

export default class ARTableTop extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: sharedProps
    };
  }

  render() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: Game }}
      />
    );
  }
}

module.exports = ARTableTop;
