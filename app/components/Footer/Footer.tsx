import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left Section */}
      <div className={styles.leftFooterSection}>

        <div className={styles.logoContainer}>
          <img  src="/logo/v1_white_transparent.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.contactSection}>
            <p>контакты</p>
            <div className={styles.socialLinks}>
            <img src="/telegram-icon.svg" alt="Telegram Icon" className={styles.icon} />
            <img src="/email-icon.svg" alt="Email Icon" className={styles.icon} />
            </div>
        </div>
        
       
      </div>

      {/* Center Section */}
      <div className={styles.centerFooterSection}>
        <h3>info</h3>
        <ul className={styles.navLinks}>
          <li><Link href="/about">о студии</Link></li>
          <li><Link href="/works">работы</Link></li>
          <li><Link href="/vacancies">вакансии</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className={styles.rightFooterSection}>
        <h3>Оставьте заявку на создание дизайна</h3>
        <button className={styles.contactButton}>E-mail</button>
        <button className={styles.contactButton}>Telegram</button>
      </div>
    </footer>
  );
};

export default Footer;
