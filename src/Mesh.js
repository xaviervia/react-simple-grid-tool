import React from 'react'
import range from './range'
import View from './View'

import Surface from './Surface'
import Group from './Group'

import HorizontalLine from './HorizontalLine'
import VerticalLine from './VerticalLine'

const { ceil } = Math

const HARD_LINE_COLOR = '#CC3300'
const SOFT_LINE_COLOR = '#DDAA99'
const GRID_SIZE = 5

const Mesh = ({ gridSize, left, top, height, width, hardLineColor, softLineColor }) => (
  <View
    style={{
      position: 'absolute',
      backgroundColor: 'transparent',
      left: left - 5,
      top: top - 5,
      borderColor: hardLineColor,
      borderWidth: 5,
      borderStyle: 'solid',
      height: height + 10,
      width: width + 10,
      pointerEvents: 'none',
      zIndex: 12312312,
    }}
  >
    <Surface height={height} width={width}>
      <Group>
        {range(0, ceil(height / gridSize) + 1).map(position => (
          <HorizontalLine
            gridSize={gridSize}
            softLineColor={softLineColor}
            hardLineColor={hardLineColor}
            key={position}
            position={position}
            width={width}
          />
        ))}
      </Group>

      <Group>
        {range(0, ceil(width / gridSize) + 1).map(position => (
          <VerticalLine
            gridSize={gridSize}
            softLineColor={softLineColor}
            hardLineColor={hardLineColor}
            key={position}
            position={position}
            height={height}
          />
        ))}
      </Group>
    </Surface>
  </View>
)

Mesh.defaultProps = {
  hardLineColor: HARD_LINE_COLOR,
  softLineColor: SOFT_LINE_COLOR,
  left: 0,
  top: 0,
  width: 1000,
  height: 1000,
  gridSize: GRID_SIZE,
}

export default Mesh
