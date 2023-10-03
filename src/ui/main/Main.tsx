import React, { FC } from "react";
import styles from "./Main.module.css";

interface IMain {
  children?: React.ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
