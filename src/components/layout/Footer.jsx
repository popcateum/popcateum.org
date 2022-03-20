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
  faDiscord,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://popcateum.org/">
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
  discord: 'https://discord.gg/SjWPG4FGta',
  kakao: 'https://open.kakao.com/o/gfr57tgd',
  telegram: 'https://t.me/popcateumofficial',
  notion: 'https://www.notion.so/Popcateum-f2a855933729447f99ff48912e0d9622'
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
              aria-label="telegram"
              target="_blank"
              href={linkList.telegram}
            >
              <FontAwesomeIcon icon={faTelegram} />
            </IconButton>
            <IconButton
              aria-label="kakao"
              target="_blank"
              href={linkList.kakao}
            >
              <img width="23.5px" src="/images/kakao.svg" alt="kakao" />
            </IconButton>
            <IconButton
              aria-label="notion"
              target="_blank"
              href={linkList.notion}
            >
              <img width="23.5px" src="/images/notion.svg" alt="notion" />
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
