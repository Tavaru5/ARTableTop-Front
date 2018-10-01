import React, { Component } from 'react';

import {
  ViroARScene, ViroConstants, ViroNode, ViroAnimations,
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
          <Board
            width={7}
            height={7}
            walls={[
              [1, 1, 1, 2],
              [2, 1, 2, 2],
              [3, 1, 3, 2],
              [4, 1, 4, 2],
              [0, 2, 1, 2],
              [0, 3, 1, 3],
              [0, 4, 1, 4],
              [4, 2, 5, 2],
              [4, 3, 5, 3],
              [4, 4, 5, 4],
              [1, 4, 1, 5],
              [2, 4, 2, 5],
              [3, 4, 3, 5],
              [4, 4, 4, 5],
            ]}
          />
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
