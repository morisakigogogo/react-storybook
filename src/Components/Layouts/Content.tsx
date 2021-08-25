import React, { ReactNode } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { Test } from '../../stories/Test'

export default (): ReactNode => {
  const styles = {
    Paper: {
      marginTop: 10,
      marginBottom: 10,
      padding: 60
    }
  }
  return (<React.Fragment>
    <h1>ContentContentContent</h1>
    <Grid container spacing={1}>
      <Grid style={ styles.Paper } item sm>
        <Paper>left</Paper>
      </Grid>
      <Grid style={ styles.Paper } item sm>
        <Paper>right
          <Test />

        </Paper>
      </Grid>

    </Grid>
  </React.Fragment>)
}