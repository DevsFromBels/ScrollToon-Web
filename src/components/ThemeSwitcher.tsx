"use client";
import React, { FC, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MoonStar, SunMedium } from 'lucide-react';
import styles from './styles/ThemeSwitcher.module.css';

interface IThemeSwitcher {
  size: string | number;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ size }) => {
  const [theme, setTheme] = useState<string>(() => getInitialTheme());
  const iconAnimation = useAnimation();

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.theme = newTheme;
    setTheme(newTheme);
    document.body.classList.toggle(theme);
    document.body.classList.toggle(newTheme);
    iconAnimation.start({
      rotate: [0, 360, 0],
      transition: { duration: 0.5 },
    });
  };

  function getInitialTheme() {
    let theme = localStorage.theme;
    if (!theme) {
      theme = detectPreferredTheme();
      localStorage.theme = theme;
    }
    return theme;
  }

  function detectPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      {theme === 'dark' ? (
        <SunMedium className={styles.sun} width={size} height={size} color="#000" />
      ) : (
        <MoonStar className={styles.moon} width={size} height={size} color="#000" />
      )}
    </button>
  );
};

export default ThemeSwitcher;