import React from 'react'
import sharedStyles from './sharedStyles'

const View = ({ onRef, style, ...props }) => (
  <div
    ref={onRef}
    style={{
      ...sharedStyles,
      ...style,
    }}
    {...props}
  />
)

export default View
