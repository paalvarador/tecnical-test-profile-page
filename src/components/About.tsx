import React from "react";
import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface AboutProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({
  icon,
  title,
  description,
}: AboutProps) => {
  return (
    <section className={styles.about}>
      <h2>
        {" "}
        <FontAwesomeIcon icon={icon} className="icon_caption" />
        {title}
      </h2>
      <p>{description}</p>
    </section>
  );
};

export default About;
