import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import brown from '@material-ui/core/colors/brown'

import sha256 from 'sha256'
import privateKeyToAddress from 'ethereum-private-key-to-address'

const primary = brown[50]
const mainColor = brown[800]

const useStyles = makeStyles((theme) => ({
  banner: {
    background: primary,
    marginTop: theme.spacing(10),
  },
  content: {
    paddingTop: theme.spacing(13),
  },
  typoTitle: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    color: mainColor,
  },
  typoContent: {
    margin: theme.spacing(3),
  },
  imgStyle: {
    width: '90%',
  },
  filedStyle: {
    width: '97%',
    margin: theme.spacing(1),
    // marginBottom: theme.spacing(4),
  },
  filedStyleText: {
    width: '97%',
    margin: theme.spacing(1),
  },
  filedStyle2: {
    width: '97%',
    margin: theme.spacing(1),
  },
}))

const EasterEgg = () => {
  const classes = useStyles()
  const [text, setText] = useState('')
  const [hash, setHash] = useState('')
  const [address, setAddress] = useState('')

  const textChange = (e) => {
    setText(e.target.value)
    setHash(sha256(e.target.value))
    setAddress(privateKeyToAddress(sha256(e.target.value)))
  }

  return (
    <>
      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item lg={7} md={10} sm={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography className={classes.typoTitle} variant="h4">
                <b>Easter Egg</b>
              </Typography>
              <Typography className={classes.typoContent} variant="h6">
                POPCATEUM EVERYWHERE!
                <br />
                Type in what you think. There may be a POP in the wallet
                address! Popcateum has a total of 1001 Easter egg wallet
                addresses. If you're lucky, you might find a wallet address with
                10 million POP in it!
                <br />
                Follow our SNS and you can find hints about Easter Egg!
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      className={classes.filedStyleText}
                      label="Text"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={text}
                      onChange={textChange}
                    />
                  </Grid>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      className={classes.filedStyle}
                      disabled
                      label="Private Key"
                      rows={1}
                      variant="outlined"
                      value={hash}
                    />
                    <TextField
                      className={classes.filedStyle2}
                      disabled
                      label="Adress"
                      rows={1}
                      variant="outlined"
                      value={address}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Typography className={classes.typoContent} variant="subtitle1">
                NOTICE!!! If you found the Easter egg wallet address, please
                send the POP in the address to your personal wallet address!
                Otherwise, someone might take the POP!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default EasterEgg
