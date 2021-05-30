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
  typoSub: {
    margin: theme.spacing(2),
  },
  imgStyle: {
    width: '90%',
  },
  cmdStyle: {},
  divCmdStyle: {
    backgroundColor: '#e0e0e0',
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}))

const command = {
  init: './gpop --syncmode "full" --http --http.port 9506 console',
  coinbase: 'personel.newAccount("your password")',
  start: 'miner.start(1)',
  minerG: './ethminer -G -P http://127.0.0.1:9506',
  minerU: './ethminer -U -P http://127.0.0.1:9506',
}

const ethminerLink = 'https://github.com/ethereum-mining/ethminer/releases/tag/v0.17.1'

const Mining = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.banner}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item lg={7} md={10} sm={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography className={classes.typoTitle} variant="h4">
                <b>Mining 'POP'</b>
              </Typography>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <img
                    className={classes.imgStyle}
                    src="/images/mining.png"
                    alt="mining"
                  />
                </Grid>
              </Grid>
              <Typography className={classes.typoContent} variant="h6">
                1 popcat (POP) = 1,000,000,000,000,000,000 wei.
                <br />
                You can mine popcat using gpop! Popcateum rewards 50 popcat for
                each block you create. Also, you can use GPU to mine by
                connecting Ethminer and Gpop. Popcateum recommends using <Link target="_blank" href={ethminerLink}>Ethminer v0.17.1</Link>.
              </Typography>
              <Grid item>
                <Typography className={classes.typoSub} variant="subtitle1">
                  1. In the directory where Gpop is located, enter the command
                  below and synchronize it with the Popcateum main network.
                </Typography>
                <div className={classes.divCmdStyle}>{command.init}</div>
                <Typography className={classes.typoSub} variant="subtitle1">
                  2. Make a wallet for mining rewards. Don't lose your password!
                </Typography>
                <div className={classes.divCmdStyle}>{command.coinbase}</div>
                <Typography className={classes.typoSub} variant="subtitle1">
                  3. Start mining in Gpop. If it is the first mining, it can be
                  mined after DAG is created.
                </Typography>
                <div className={classes.divCmdStyle}>{command.start}</div>
                <Typography className={classes.typoSub} variant="subtitle1">
                  4. In the directory where Ethminer is located, enter the
                  command below to connect it to GPU mining in Gpop. If your
                  computer's GPU is a Radeon, please use the -G option and the
                  -U option if it's Endivia, please use the -U option. (For
                  Radeon GPUs, using too recent graphics card drivers may not be
                  able to mine.)
                </Typography>
                <div className={classes.divCmdStyle}>
                  {command.minerG}
                  <p></p>
                  or
                  <p></p>
                  {command.minerU}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Mining
