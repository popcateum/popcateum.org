import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faRedditAlien,
  faDiscord,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        POPCATEUM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}))

const linkList = {
  twitter: 'https://twitter.com/popcateum',
  facebook: 'https://www.facebook.com/Popcateum',
  instagram: 'https://www.instagram.com/popcateum/',
  reddit: 'https://www.reddit.com/r/popcateum/',
  discord: 'https://discord.gg/tPNHNvPZA4',
}

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Grid container direction="row" alignItems="center" justify="center">
            <IconButton
              aria-label="twitter"
              target="_blank"
              href={linkList.twitter}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton
              aria-label="facebook"
              target="_blank"
              href={linkList.facebook}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </IconButton>
            <IconButton
              aria-label="instagram"
              target="_blank"
              href={linkList.instagram}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
            <IconButton
              aria-label="reddit"
              target="_blank"
              href={linkList.reddit}
            >
              <FontAwesomeIcon icon={faRedditAlien} />
            </IconButton>
            <IconButton
              aria-label="discord"
              target="_blank"
              href={linkList.discord}
            >
              <FontAwesomeIcon icon={faDiscord} />
            </IconButton>
          </Grid>
          <Typography variant="body1" align="center">
            Popcateum Project
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  )
}

export default Footer
