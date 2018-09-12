"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroPolyline
} from "react-viro";

export default class Game extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const buffer = [];
    var i;
    for (i = 0; i < 64; i++) {
      buffer.push(
        <ViroBox
          position={[0.2 - 0.05 * Math.floor(i / 8), 0, 0.2 - 0.05 * (i % 8)]}
          height={0.01}
          length={0.05}
          width={0.05}
          materials={
            (Math.floor(i / 8) % 2
            ? (i + 1) % 2
            : i % 2)
              ? ["black"]
              : ["white"]
          }
        />
      );
    }
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroNode
          position={[0, 0, -0.5]}
          dragType="FixedToWorld"
          onDrag={() => {}}
        >
          {buffer}
        </ViroNode>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

ViroMaterials.createMaterials({
  black: {
    diffuseColor: "black"
  },
  white: {
    diffuseColor: "white"
  },
  brown: {
    diffuseColor: "brown"
  }
});
ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250 //.25 seconds
  }
});

module.exports = Game;
