import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import brown from '@material-ui/core/colors/brown'

const primary = brown[50]
const mainColor = brown[800]

const useStyles = makeStyles((theme) => ({
  banner: {
    background: primary,
  },
  content: {
    marginTop: theme.spacing(13),
  },
  typoTitle: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    color: mainColor,
  },
  typoContent: {
    margin: theme.spacing(3),
    color: mainColor,
  },
}))

const Banner = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.banner}>
        <Grid container direction="column" alignItems="center" justify="center">
          <img
            className={classes.content}
            src="/images/Popcat.png"
            width="150"
            alt="popcateum-logo"
          />
          <Typography className={classes.typoTitle} variant="h3" component="h2">
            <b>Popcateum Everywhere!</b>
          </Typography>
          <Typography className={classes.typoContent} variant="h6">
            Popcateum is the community-run technology powering the
            cryptocurrency,
            <br />
            popcat (POP) and thousands of decentralized applications.
          </Typography>
        </Grid>
      </div>
    </>
  )
}

export default Banner
