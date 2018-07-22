import React, { Component } from 'react'
import Layout from '@primitives/layout'
import defaultFilterStyle from './defaultFilterStyle'
import Mesh from './Mesh'
import View from './View'

class Grid extends Component {
  constructor() {
    super()

    this.rootElement = undefined

    this.state = {
      rootRect: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
    }

    this.onRef = this.onRef.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  onRef(domElement) {
    if (domElement) {
      this.rootElement = domElement
      const { top, width, height, left } = domElement.getBoundingClientRect()

      this.setState({
        rootRect: { top, left, width, height },
      })
    }
  }

  onResize({ width, height }) {
    this.setState({
      rootRect: { ...this.state.rootRect, width, height },
    })
  }

  render() {
    const { children, visible, hardLineColor, softLineColor, gridSize, filter } = this.props

    const { rootRect } = this.state
    const left = rootRect.left
    const top = rootRect.top
    const filterStyle = filter ? { filter } : defaultFilterStyle

    return (
      <Layout onResize={this.onResize} style={{ position: 'relative' }}>
        {() => (
          <View>
            {visible ? (
              <Mesh
                hardLineColor={hardLineColor}
                softLineColor={softLineColor}
                gridSize={gridSize}
                width={rootRect.width}
                height={rootRect.height}
                left={left > 0 ? left : 0}
                top={top > 0 ? top : 0}
              />
            ) : (
              undefined
            )}
            <View onRef={this.onRef} style={visible ? filterStyle : {}}>
              {children}
            </View>
          </View>
        )}
      </Layout>
    )
  }
}

Grid.defaultProps = {
  visible: true,
}

export default Grid
