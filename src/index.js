import React, { Component } from 'react'
import { render } from 'react-dom'
import Grid from './Grid'

class App extends Component {
  constructor() {
    super()

    this.state = {
      visible: true,
    }
  }

  render() {
    const { visible } = this.state

    return (
      <main style={{ width: 600, marginTop: 24, marginLeft: 'auto', marginRight: 'auto' }}>
        <Grid gridSize={4} visible={visible}>
          <div style={{ padding: 24 }}>
            <h1
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 24,
                fontWeight: 400,
                marginTop: 7,
                marginBottom: 1,
                lineHeight: '24px',
              }}
            >
              The <strong>React simple grid tool</strong> helps with visual alignment
            </h1>

            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 18,
                lineHeight: '24px',
                marginTop: 19,
                marginBottom: 3,
              }}
            >
              Good editorial design aligns the baseline of the font to a vertical grid to maintain
              the rhythm of the composition. This can be a tricky thing to do in web environments,
              since CSS does not support the possibility of aligning the visual baseline of the font
              automatically, and it has to be compensated for manually instead.
            </p>

            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 18,
                lineHeight: '24px',
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              The grid is displayed on top of the wrapped component, matching its size, and has
              pointerEvents disabled, so you can click through it. A filter is applied to the
              content to reduce saturation and contrast, so that the grid is more clearly visible
              on top of the content. The color of the lines is configurable, as is the grid size
              (default is 5px) and the filter that gets applied to the content. The grid can be
              hidden setting the "visible" prop to false.
            </p>

            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 18,
                lineHeight: '24px',
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              <a href="https://github.com/xaviervia/react-simple-grid-tool">
                Read more in the home of the project →
              </a>
            </p>

            <div style={{
              marginTop: 18
            }}>
              <button onClick={() => this.setState({ visible: true })} style={{
                backgroundColor: '#343434',
                color: 'white',
                cursor: 'pointer',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 16,
                paddingTop: 6,
                paddingLeft: 8,
                paddingRight: 8,
                paddingBottom: 6,
                lineHeight: '16px',
                fontWeight: 400,
                borderWidth: 0,
                outline: 'none',
                borderRadius: 4,
                marginRight: 12
              }}>Show grid</button>

              <button onClick={() => this.setState({ visible: false })} style={{
                backgroundColor: '#343434',
                color: 'white',
                cursor: 'pointer',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 16,
                paddingTop: 6,
                paddingLeft: 8,
                paddingRight: 8,
                paddingBottom: 6,
                lineHeight: '16px',
                fontWeight: 400,
                borderWidth: 0,
                outline: 'none',
                borderRadius: 4,
              }}>Hide grid</button>
            </div>
          </div>
        </Grid>
      </main>
    )
  }
}

render(<App />, document.getElementById('root'))
