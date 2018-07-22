import React from 'react'

const Group = ({ x = 0, y = 0, scale = 1, ...props }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} {...props} />
)

export default Group
