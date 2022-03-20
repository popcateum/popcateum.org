import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import brown from '@material-ui/core/colors/brown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons'
// import { faComments } from '@fortawesome/free-solid-svg-icons'

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
    margin: theme.spacing(2),
    color: mainColor,
  },
  buttonstyle: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}))

const btnLink = {
  forum: 'https://forum.popcateum.org',
  twitter: 'https://twitter.com/popcateum',
  telegram: 'https://t.me/popcateumofficial',
  discord: 'https://discord.gg/SjWPG4FGta',
}

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
            Popcateum is the community-run technology powering the cryptocurrency,
            <br />
            popcat (POP) and thousands of decentralized applications.
          </Typography>
          <Grid container direction="row" alignItems="center" justify="center">
            {/* <Button
              variant="outlined"
              className={classes.buttonstyle}
              style={{
                color: '#4e342e',
                border: '1px solid #4e342e7f',
                textTransform: 'none',
                fontSize: '14px',
              }}
              href={btnLink.forum}
              color="primary"
              startIcon={<FontAwesomeIcon icon={faComments} />}
              target="_blank"
            >
              <b>Forum</b>
            </Button> */}
            <Button
              className={classes.buttonstyle}
              style={{
                backgroundColor: '#5865F2',
                textTransform: 'none',
                fontSize: '14px',
              }}
              href={btnLink.discord}
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faDiscord} />}
              target="_blank"
            >
              Discord
            </Button>
            <Button
              className={classes.buttonstyle}
              style={{
                backgroundColor: '#00a2ed',
                textTransform: 'none',
                fontSize: '14px',
              }}
              href={btnLink.twitter}
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faTwitter} />}
              target="_blank"
            >
              Twitter
            </Button>
            <Button
              className={classes.buttonstyle}
              style={{
                backgroundColor: '#0088cc',
                textTransform: 'none',
                fontSize: '14px',
              }}
              href={btnLink.telegram}
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faTelegramPlane} />}
              target="_blank"
            >
              Telegram
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Banner
