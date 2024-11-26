import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css'

interface ButtonProps {
  text: string;         // Button text
  href: string;         // Link for redirection
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className={styles.button}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
