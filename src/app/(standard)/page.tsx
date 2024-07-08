import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      Welcome! <Link href="/bookshelf">Enter the Library</Link>!
    </main>
  );
}
