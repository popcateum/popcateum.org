import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
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
  typoDocsTitle: {
    marginBottom: theme.spacing(3),
  },
  typoDocs: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  cardDocs: {
    background: 'none',
  },
  typoContent: {
    margin: theme.spacing(3),
  },
  imgStyle: {
    // width: '40%',
    height: '120px',
  },
}))

const linkList = {
  solidity: 'https://docs.soliditylang.org/',
  web3: 'https://web3js.readthedocs.io/',
  truffle: 'https://www.trufflesuite.com/docs/truffle/overview',
  geth: 'https://geth.ethereum.org/docs/',
}

const Develop = () => {
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
                <b>Development</b>
              </Typography>
              <Typography className={classes.typoContent} variant="h6">
                Popcateum is a public blockchain platform. Create smart
                contracts with Solidity and deploy them to Popcateum main
                networks. You can use web3, truffle, etc., which is a
                development tool that Ethereum used before.
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Paper className={classes.cardDocs} elevation={0}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="flex-start"
                    >
                      <Typography
                        className={classes.typoDocsTitle}
                        variant="h5"
                      >
                        Solidity
                      </Typography>
                      <img
                        className={classes.imgStyle}
                        src="/images/logo-solidity.png"
                        alt="mining"
                      />
                      <Typography
                        className={classes.typoDocs}
                        variant="subtitle1"
                      >
                        <Link target="_blank" href={linkList.solidity}>
                          Documents
                        </Link>
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Paper className={classes.cardDocs} elevation={0}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="flex-start"
                    >
                      <Typography
                        className={classes.typoDocsTitle}
                        variant="h5"
                      >
                        Web3.js
                      </Typography>
                      <img
                        className={classes.imgStyle}
                        src="/images/logo-web3.png"
                        alt="mining"
                      />
                      <Typography
                        className={classes.typoDocs}
                        variant="subtitle1"
                      >
                        <Link target="_blank" href={linkList.web3}>
                          Documents
                        </Link>
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Paper className={classes.cardDocs} elevation={0}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="flex-start"
                    >
                      <Typography
                        className={classes.typoDocsTitle}
                        variant="h5"
                      >
                        Truffle
                      </Typography>
                      <img
                        className={classes.imgStyle}
                        src="/images/logo-truffle.png"
                        alt="mining"
                      />
                      <Typography
                        className={classes.typoDocs}
                        variant="subtitle1"
                      >
                        <Link target="_blank" href={linkList.truffle}>
                          Documents
                        </Link>
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Paper className={classes.cardDocs} elevation={0}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="flex-start"
                    >
                      <Typography
                        className={classes.typoDocsTitle}
                        variant="h5"
                      >
                        Geth
                      </Typography>
                      <img
                        className={classes.imgStyle}
                        src="/images/logo-geth.png"
                        alt="mining"
                      />
                      <Typography
                        className={classes.typoDocs}
                        variant="subtitle1"
                      >
                        <Link target="_blank" href={linkList.geth}>
                          Documents
                        </Link>
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
              <Typography className={classes.typoContent} variant="subtitle1">
                If you want to distribute the dapp on the main net of Popcateum,
                but you don't have a POP, please send an email to our
                team.(popcateum@gmail.com)
                <br />
                We are sending you a little POP!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Develop
