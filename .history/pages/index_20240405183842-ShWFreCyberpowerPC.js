import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Earth from "@/components/Earth";
import HeadArea from "@/components/HeadArea";

//Hi, so our idea requires earth to move dynaimcally around the screen, meaning that for this page we are only changing the elements and keeping the earth on one page for smoother animation of earth

export default function Home() {
  return (
    <>
      <HeadArea title="Welcome to Planit!"/>
      <main className={`${styles.main} `}>
        <Earth/>
      </main>
    </>
  );
}