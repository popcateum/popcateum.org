import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWindows,
  faLinux,
  faApple,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import brown from '@material-ui/core/colors/brown'
import pkg from '../../../../package.json'

const primary = brown[50]
const mainColor = brown[800]

// const redTheme = createMuiTheme({ palette: { primary: brown } })

const useStyles = makeStyles((theme) => ({
  banner: {
    background: primary,
  },
  content: {
    paddingTop: theme.spacing(13),
  },
  typoTitle: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    color: mainColor,
  },
  typoContent: {
    margin: theme.spacing(3),
  },
  imgStyle: {
    marginBottom: theme.spacing(5),
  },
  buttonstyle: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const version = pkg.version

const releaseLink = {
  windows:
    `https://github.com/popcateum/go-popcateum/releases/download/v${version}/gpop-windows-amd64-${version}.zip`,
  macos:
    `https://github.com/popcateum/go-popcateum/releases/download/v${version}/gpop-darwin-amd64-${version}.tar.gz`,
  linux:
    `https://github.com/popcateum/go-popcateum/releases/download/v${version}/gpop-linux-amd64-${version}.tar.gz`,
  github: 'https://github.com/popcateum/go-popcateum',
}

const Gpop = () => {
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
                <b>Go Popcateum</b>
              </Typography>
              <Typography className={classes.typoContent} variant="h6">
                Official Go implementation of the Popcateum protocol. Go
                Popcateum is one of the three original implementations (along
                with C++ and Python) of the Popcateum protocol. It is written in
                Go, fully open source and licensed under the GNU LGPL v3.
              </Typography>
              <Typography className={classes.typoContent} variant="h6">
                Gpop 
                <br />
                v{version}
              </Typography>
              <img
                className={classes.imgStyle}
                src="/images/gpop.png"
                width="150"
                alt="gpop-logo"
              />
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Button
                  className={classes.buttonstyle}
                  style={{
                    backgroundColor: '#00a2ed',
                    textTransform: 'none',
                    fontSize: "14px"
                  }}
                  href={releaseLink.windows}
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faWindows} />}
                >
                  Windows
                </Button>
                <Button
                  className={classes.buttonstyle}
                  style={{
                    backgroundColor: '#048c2c',
                    textTransform: 'none',
                    fontSize: "14px"
                  }}
                  href={releaseLink.linux}
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faLinux} />}
                >
                  Linux
                </Button>
                <Button
                  className={classes.buttonstyle}
                  style={{
                    backgroundColor: '#666666',
                    textTransform: 'none',
                    fontSize: "14px"
                  }}
                  href={releaseLink.macos}
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faApple} />}
                >
                  macOS
                </Button>
                <Button
                  className={classes.buttonstyle}
                  style={{
                    backgroundColor: '#211F1F',
                    textTransform: 'none',
                    fontSize: "14px"
                  }}
                  target="_blank"
                  href={releaseLink.github}
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faGithub} />}
                >
                  Github
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Gpop
