import React from 'react'
import Banner from '../components/content/main/Banner'
import Gpop from '../components/content/main/Gpop'
import Mining from '../components/content/main/Mining'
import Wallet from '../components/content/main/Wallet'
import Develop from '../components/content/main/Develop'
import EasterEgg from '../components/content/main/EasterEgg'

const Main = () => {
  return (
    <>
      <Banner />
      <Gpop />
      <Mining />
      <Wallet />
      <Develop />
      <EasterEgg />
    </>
  )
}

export default Main