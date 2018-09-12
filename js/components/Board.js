// @flow
import React from 'react';

import { ViroBox, ViroMaterials } from 'react-viro';

type Props = {
  width: number,
  height: number,
};

function Board(props: Props) {
  const buffer = [];
  let i;
  for (i = 0; i < props.width * props.height; i++) {
    buffer.push(
      <ViroBox
        position={[
          props.width / 40 - 0.05 * Math.floor(i / props.width),
          0,
          props.height / 40 - 0.05 * (i % props.height),
        ]}
        height={0.01}
        length={0.05}
        width={0.05}
        materials={(Math.floor(i / 8) % 2 ? (i + 1) % 2 : i % 2) ? ['black'] : ['white']}
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
