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
    const buffer = [];
    let i;
    for (i = 0; i < 64; i++) {
      buffer.push(
        <ViroBox
          position={[0.2 - 0.05 * Math.floor(i / 8), 0, 0.2 - 0.05 * (i % 8)]}
          height={0.01}
          length={0.05}
          width={0.05}
          materials={(Math.floor(i / 8) % 2 ? (i + 1) % 2 : i % 2) ? ['black'] : ['white']}
        />,
      );
    }
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroNode position={[0, 0, -0.5]} dragType="FixedToWorld" onDrag={() => {}}>
          <Board width={8} height={8} />
        </ViroNode>
      </ViroARScene>
    );
  }
}

ViroMaterials.createMaterials({
  black: {
    diffuseColor: 'black',
  },
  white: {
    diffuseColor: 'white',
  },
  brown: {
    diffuseColor: 'brown',
  },
});
ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, // .25 seconds
  },
});

module.exports = Game;
