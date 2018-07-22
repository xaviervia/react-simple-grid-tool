import React from 'react'
import Shape from './Shape'
import toPath from './toPath'

const HorizontalLine = ({ gridSize, position, softLineColor, hardLineColor, width }) => (
  <Shape
    d={toPath([
      [0, gridSize * position - 0.5],
      [width, gridSize * position - 0.5],
      [width, gridSize * position],
      [0, gridSize * position],
    ])}
    fill={position % 2 === 0 ? hardLineColor : softLineColor}
  />
)

export default HorizontalLine
