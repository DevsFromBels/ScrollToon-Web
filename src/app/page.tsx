import Image from "next/image";
import styles from "./page.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import PopularTitles from "@/components/PopularTitles";

export default function Home() {

  return (
    <main className={styles.main}>
      <h2 className={styles.global_titles}>Popular Titles</h2>
      <PopularTitles/>
    </main>
  );
}
