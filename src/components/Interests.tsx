import React from "react";
import styles from "@/styles/Interests.module.css";

interface InterestsProps {
  title: string;
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({
  title,
  interests,
}: InterestsProps) => {
  return (
    <section className={styles.interests}>
      <h2>{title}</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
