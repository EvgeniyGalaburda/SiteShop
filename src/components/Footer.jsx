import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";

import styles from '../styles/Footer.module.css'
import {ROUTES} from '../utils/routes'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
       <Link to={ROUTES.HOME}>
                <h1>Shop.</h1>
        </Link>
        </div>

        <div className={styles.rights}>
          Developed by <a href="https://github.com/EvgeniyGalaburda" target='_blanck'>Evgeniy Galaburda</a>
        </div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/evgeniy__galaburda/" target='_blanck'><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100009861373706" target='_blanck'><FaFacebook /></a>
          <a href="https://t.me/EugeneGLB" target='_blanck'><FaTelegram /></a>
        </div>
    </footer>
    
  )
}
