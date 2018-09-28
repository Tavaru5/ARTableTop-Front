// @flow
import React from 'react';
import { ViroBox, ViroMaterials } from 'react-viro';

type Props = {
  width: number,
  height: number,
  squareSize: number,
};

function colorForTile(x: number, y: number) {
  if (x % 2 === y % 2) {
    return 'black';
  }
  return 'white';
}

function Board(props: Props) {
  const buffer = [];
  // Space between a tile and the tile next to it, in percentage of tile
  const emptinessScale = 0.1;
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
    console.log(
      `x:${x.toString()} y:${y.toString()} height:${props.height.toString()} width:${props.width.toString()}`,
    );
    buffer.push(
      <ViroBox
        position={[size * x, 0, size * y]}
        height={heightScale * size}
        length={size * (1 - emptinessScale)}
        width={size * (1 - emptinessScale)}
        materials={colorForTile(x, y)}
      />,
    );
  }
  return buffer;
}

ViroMaterials.createMaterials({
  black: {
    diffuseColor: 'black',
  },
  white: {
    diffuseColor: 'white',
  },
});

export default Board;
