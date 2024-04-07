import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Earth from "@/components/Earth";
import HeadArea from "@/components/HeadArea";
import LandingPage from "@/components/LandingPage";
import EnterName from "@/components/EnterName";

//Hi, so our idea requires earth to move dynaimcally around the screen, meaning that for this page we are only changing the elements and keeping the earth on one page for smoother animation of earth

export default function Home() {

  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showEnterName, setShowEnterName] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  const handleGetStartedClick = () => {
    setShowLandingPage(false); // Hide LandingPage component
    setShowEnterName(true); // Show EnterName component
  };

  return (
    <>
      <HeadArea title="Welcome to Planit!" description="We are an environment app raising awareness on earths most pressing issues"/>
      <main className={`${styles.main}`}>
        {showLandingPage && (
          <LandingPage onGetStartedClick={handleGetStartedClick} />
        )}
        {showEnterName && <EnterName/>}
        <Earth/>
      </main>
    </>
  );
}
