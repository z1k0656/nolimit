"use client"
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import {VideoPlayer} from '../';
import {OurJobButton} from '../Buttons';

const HeroSection: FC = () => {
  return (
    <div className={styles.flexBox}>
      <div className={styles.container}>
        {/* Background Text */}
        <div className={styles.backgroundText}>
          <img src="/logo/v2_text_black_transparent.png" alt="Menu Icon" />
        </div>

        {/* Character Image */}
        <div className={styles.character}>
          <Image
            src="/blackhole-hero.png"  // Adjust based on your image path
            alt="Character Image"
            width={840}  // Adjust the width based on your image size
            height={964}  // Adjust the height based on your image size
          />
        </div>

        {/* Info Box */}
        <Link href="about">
        <button className={styles.infoBox}>
          <h3 className='text-2xl'>О студии</h3>
          <p className={styles.pLeft}>текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст </p>
          <svg className={`mt-2 ${styles.arrow}`} width="328" height="8" viewBox="0 0 328 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M327.354 4.35355C327.549 4.15829 327.549 3.84171 327.354 3.64645L324.172 0.464466C323.976 0.269204 323.66 0.269204 323.464 0.464466C323.269 0.659728 323.269 0.976311 323.464 1.17157L326.293 4L323.464 6.82843C323.269 7.02369 323.269 7.34027 323.464 7.53553C323.66 7.7308 323.976 7.7308 324.172 7.53553L327.354 4.35355ZM0 4.5L327 4.5V3.5L0 3.5L0 4.5Z" fill="#202020"/>
          </svg>
        </button>
        </Link>

        {/* Info Box */}
        <div className={styles.rightInfoBox}>
          <p className={styles.pRight}>текст текст текст текст текст текст текст тексттекст текст текст текст текст </p>
          <div className="mt-5 w-full">
            <OurJobButton href='/works' text='Наши работы'/>
          </div>
          <div className='h-full w-full mt-5'>
            <VideoPlayer videoSrc='' thumbnailSrc='/small_video_mock.png'/>
          </div>
        </div>   
      </div> 
    </div>
  );
};

export default HeroSection;
