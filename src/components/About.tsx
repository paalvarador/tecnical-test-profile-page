import React from "react";
import styles from "../styles/About.module.css";

interface AboutProps {
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ title, description }: AboutProps) => {
  return (
    <section className={styles.about}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default About;
