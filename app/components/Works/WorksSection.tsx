import React from "react";
import styles from "./WorksSection.module.css";

const WorksSection = () => {
  const categories = [
    { name: "3D ролики", href: "#3d-clips" },
    { name: "Графический дизайн", href: "#graphic-design" },
    { name: "LED экраны", href: "#led-screens" },
    { name: "Моушн дизайн", href: "#motion-design" },
    { name: "Стенды и визуализация", href: "#visualization" },
    { name: "UX/UI", href: "#uXuI" },
  ];

  return (
    <div className={styles.worksSection}>
      <h2 className={styles.heading}>Наши работы</h2>
      <div className={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className={`${styles.category} ${styles.hoveUnderline}`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
