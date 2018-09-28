import React, { Component } from 'react';

import {
  ViroARScene,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
} from 'react-viro';

import Board from './components/Board';

export default class Game extends Component {
  constructor() {
    super();

    // bind 'this' to functions
    this.onInitialized = this.onInitialized.bind(this);
  }

  onInitialized(state) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({});
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroNode position={[0, 0, -0.5]} dragType="FixedToWorld" onDrag={() => {}}>
          <Board width={2} height={4} />
        </ViroNode>
      </ViroARScene>
    );
  }
}

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, // .25 seconds
  },
});

module.exports = Game;
