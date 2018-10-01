// @flow
import React from 'react';
import { ViroBox, ViroMaterials } from 'react-viro';

type Props = {
  width: number,
  height: number,
  squareSize: number,
  walls: Array<Array<number>>,
};

const stone = require('../../res/stone.png');

function colorForTile(x: number, y: number) {
  if (x % 2 === y % 2) {
    return 'black';
  }
  return 'white';
}

function Board(props: Props) {
  const buffer = [];
  // Space between a tile and the tile next to it, in percentage of tile
  const emptinessScale = 0.02;
  // Height scale, based on size
  const heightScale = 0.2;
  // Default size
  let size = 0.05;
  if (props.squareSize != null) {
    size = props.squareSize;
  }
  let i;
  for (i = 0; i < props.width * props.height; i++) {
    const y = Math.floor(i / props.width);
    const x = i % props.width;

    buffer.push(
      <ViroBox
        position={[size * x - (props.width * size) / 2, 0, size * y - (props.height * size) / 2]}
        height={heightScale * size}
        length={size * (1 - emptinessScale)}
        width={size * (1 - emptinessScale)}
        materials={colorForTile(x, y)}
      />,
    );
  }

  props.walls.forEach((element) => {
    const x = element[0];
    const y = element[1];
    // Make sure the data is formatted correctly
    if (element[0] < element[2] || element[1] < element[3]) {
      buffer.push(
        <ViroBox
          position={[
            // One of these will be zero and one will be one
            size * x - ((props.width - (element[2] - element[0])) * size) / 2,
            size / 2,
            size * y - ((props.height - (element[3] - element[1])) * size) / 2,
          ]}
          height={size}
          length={size * (element[2] - element[0] ? 1 : emptinessScale)}
          width={size * (element[3] - element[1] ? 1 : emptinessScale)}
          materials="stone"
        />,
      );
    }
  });
  return buffer;
}

ViroMaterials.createMaterials({
  black: {
    diffuseColor: 'black',
  },
  white: {
    diffuseColor: 'white',
  },
  stone: {
    diffuseTexture: stone,
  },
});

export default Board;
