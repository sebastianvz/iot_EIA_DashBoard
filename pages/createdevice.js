import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

export default function CreateDevice() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <SideMenu></SideMenu>

        <div className={styles.title}>Dispositivos</div>
      </main>
    </div>
  );
}
