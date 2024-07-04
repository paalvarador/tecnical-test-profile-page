import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

interface ProfileProps {
  username: string;
  imageProfile: string;
}

const Header: React.FC<ProfileProps> = ({
  username,
  imageProfile,
}: ProfileProps) => {
  return (
    <header className={styles.container}>
      <Image
        src={`/${imageProfile}`}
        alt="Profile"
        width={100}
        height={100}
        className={styles.profileImage}
      />
      <h1 className={styles.userName}>{username}</h1>
    </header>
  );
};

export default Header;
