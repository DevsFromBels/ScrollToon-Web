import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.logo}>
          <Link href='/'>ScrollToon</Link>
        </h2>
        <div className={styles.menu}>
        <ul>
          <li>Animes</li>
          <li>Sign In</li>
        </ul>
        <ThemeSwitcher size='28px' />
        </div>
    </div>
  )
}

export default Header