import Image from "next/image";
import styles from "./page.module.css";

// Imported Component Pages
import MainPage from "./components/pages/MainPage"

export default function Home() {
  return (
    <main className={styles.main}>
        <MainPage/>
    </main>
  );
}
