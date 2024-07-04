import React from "react";
import styles from "@/styles/Interests.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InterestsProps {
  icon: IconDefinition;
  title: string;
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({
  icon,
  title,
  interests,
}: InterestsProps) => {
  return (
    <section className={styles.interests}>
      <h2>
        <FontAwesomeIcon icon={icon} className="icon_caption" />
        {title}
      </h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
