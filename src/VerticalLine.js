import React from 'react'
import Shape from './Shape'
import toPath from './toPath'

const VerticalLine = ({ gridSize, position, softLineColor, hardLineColor, height }) => (
  <Shape
    d={toPath([
      [gridSize * position - 0.5, 0],
      [gridSize * position - 0.5, height],
      [gridSize * position, height],
      [gridSize * position, 0],
    ])}
    fill={position % 2 === 0 ? hardLineColor : softLineColor}
  />
)

export default VerticalLine
