import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import brown from '@material-ui/core/colors/brown'

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
  typoContent2: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  imgStyle: {
    width: '90%',
  },
}))

const metamaskLink = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
const metaAppstore = "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
const metaPlaystore = "https://play.google.com/store/apps/details?id=io.metamask"

const Wallet = () => {
  const classes = useStyles()

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
                <b>Wallet</b>
              </Typography>
              <Typography className={classes.typoContent} variant="h6">
                Popcateum can send POP to others using Metamask and Gpop. Please
                install the <Link target="_blank" href={metamaskLink}>Metamask</Link> which is Google Chrome
                extension and do as below.
                <br />
                And You can install a Metamask app on your smartphone.
                <br />
                <Link target="_blank" href={metaAppstore}>App Store</Link> or <Link target="_blank" href={metaPlaystore}>Play Store</Link>
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
                    <img
                      className={classes.imgStyle}
                      src="/images/metaadd.png"
                      alt="mining"
                    />
                  </Grid>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                  <Typography
                    className={classes.typoContent}
                    variant="subtitle1"
                  >
                    1. Select a Custom RPC from the network menu of the
                    Metamask and add the network as shown next to it.
                  </Typography>
                  <Typography
                    className={classes.typoContent}
                    variant="subtitle1"
                  >
                    2. In Import Account, select Type as JSON file and insert
                    json key file generated by Gpop. Enter the password as well.
                    <br />
                    (The json key file is located in '~/Appdata/local/popcateum/keystore'
                    for Windows users and '~/.popcateum/keystore' for Linux or
                    Mac users.)
                    <br />
                    (You may not be able to bring your wallet normally due to
                    the Metamask own bug. In that case, please use Firefox
                    Metamask)
                  </Typography>
                  <Typography
                    className={classes.typoContent}
                    variant="subtitle1"
                  >
                    3. Click Send from Metamask, enter the wallet to receive the
                    POP, enter the amount of POP to send, and send it.
                  </Typography>
                </Grid>
                <Typography className={classes.typoContent} variant="subtitle1">
                  We are currently developing a wallet app dedicated to
                  popcateum. Please wait a little bit!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Wallet
