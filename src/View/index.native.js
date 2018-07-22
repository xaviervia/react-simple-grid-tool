import React from 'react'
import { View as NativeView } from 'react-native'
import sharedStyles from './sharedStyles'

const View = ({ onRef, style, ...props }) => (
  <NativeView
    onComponentRef={onRef}
    style={{
      ...sharedStyles,
      ...style,
    }}
    {...props}
  />
)

export default View
