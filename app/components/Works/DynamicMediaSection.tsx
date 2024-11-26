import React from "react";
import Image from "next/image";
import styles from "./DynamicMediaSection.module.css";

interface DynamicMediaSectionProps {
  title: string;
  description: string;
  photos: string[];
  buttonText: string;
  buttonHref: string;
}

const DynamicMediaSection: React.FC<DynamicMediaSectionProps> = ({
  title,
  description,
  photos,
  buttonText,
  buttonHref,
}) => {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.contentSection}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.photosContainer}>
          {photos.length === 1 && (
            <img src={photos[0]} alt={title} className={styles.singlePhoto} />
          )}
          {photos.length === 2 && (
            <div className={styles.twoPhotos}>
              <div className={styles.photoContainer}>
                <img src={photos[0]} alt={title} className={styles.photo} />
              </div>
              <div className={styles.photoContainer}>
                <img src={photos[1]} alt={title} className={styles.photo} />
              </div>
            </div>
          )}
        </div>
      </div>
      <a href={buttonHref}>
        <button className={styles.customButton}>
          {buttonText}
          <span className={styles.arrow}>
            <svg
              className={styles.arrowSvg}
              width="31"
              height="12"
              viewBox="0 0 31 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75L30 6.75V5.25L0 5.25L0 6.75Z"
                fill="#202020"
              />
            </svg>
          </span>
        </button>
      </a>
    </section>
  );
};

export default DynamicMediaSection;
