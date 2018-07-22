import React from 'react'
import { render } from 'react-dom'
import Grid from './Grid'

render(
  <Grid softLineColor="#00FF00" hardLineColor="#0000FF" gridSize={10}>
    Testing
  </Grid>,
  document.getElementById('root')
)
