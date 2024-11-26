"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const capitalizeFirstLetter = (text:string) => {
  //   if(menuOpen) return text.charAt(0).toUpperCase() + text.slice(1);
  //   return text
  // };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
      <Link className={styles.logo} href="/">
        <Image
          src="/logo/v1_black_transparent.png"
          alt="Logo"
          width={50}
          height={40}
        />
      </Link>

      {/* Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <img src="/close-navbar.svg" alt="Menu Icon" /> : <img src="/open-navbar.svg" alt="Menu Icon" />}
      </div>

      {/* Navigation Links */}
      <nav className={`${styles.navLinks} ${menuOpen ? styles.showNav : ''}`}>
        <ul className={styles.list}>
          <li>
            <Link href="/about" className={`${styles.navLink} ${styles.underline}`}>
              <span className={`${styles.span} ${styles.hoveUnderline} `}>o студии</span>
              <img src="/arrow-right.svg" alt="Arrow Icon" className={styles.arrowIcon} />
            </Link>
          </li>
          <li>
            <Link href="/works" className={`${styles.navLink} ${styles.underline}`}>
            <span className={`${styles.span} ${styles.hoveUnderline}`}>работы</span>
              <img src="/arrow-right.svg" alt="Arrow Icon" className={styles.arrowIcon}/>
            </Link>
          </li>
          <li>
            <Link href="/vacancies" className={`${styles.navLink} ${styles.underline}`}>
            <span className={`${styles.span} ${styles.hoveUnderline}`}>вакансии</span>
              <img src="/arrow-right.svg" alt="Arrow Icon" className={styles.arrowIcon}/>
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.navLink}>
            <span className={`${styles.span} ${styles.hoveUnderline}`}>FAQ</span>
              <img src="/arrow-right.svg" alt="Arrow Icon" className={styles.arrowIcon}/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
