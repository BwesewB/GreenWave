import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Earth from "@/components/Earth";
import Footer from "@/components/Footer"
import HeadArea from "@/components/HeadArea";
import LandingPage from "@/components/MainPageComponents/LandingPage";
import EnterName from "@/components/MainPageComponents/EnterName";
import HomePage from "@/components/MainPageComponents/HomePage";
import ActionPlanner from "@/components/MainPageComponents/ActionPlanner";

//Hi, so our idea requires earth to move dynaimcally around the screen, meaning that for this page we are only changing the elements and keeping the earth on one page for smoother animation of earth

export default function Home() {

  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showEnterName, setShowEnterName] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showActionPlanner, setShowActionPlanner] = useState(false);

  const handleGetStarted = () => {
    setShowLandingPage(false); // Hide LandingPage component
    setShowEnterName(true); // Show EnterName component
  };

  const handleContinue = () => {
    setShowEnterName(false);
    setShowHomepage(true);
  }

  const handleActionPlanner = () => {
    setShowHomepage(false);
    setShowActionPlanner(true)
  }

  return (
    <>
      <HeadArea title="Welcome to Planit!" description="We are an environment app raising awareness on earths most pressing issues"/>
      <main className={`${styles.main}`}>
        {showLandingPage && (
          <LandingPage handleGetStartedClick={handleGetStarted}/>
        )}
        {showEnterName && <EnterName/>}

        {showEnterName && (
          <EnterName handleContinueClick={handleContinue}/>
        )}
        {showHomepage && <HomePage/>}
        
        {showHomepage && (
          <Footer handleActionPlannerClick={handleActionPlanner}/>
        )}
        {showActionPlanner && <ActionPlanner/>}

        
        <Earth/>
      </main>
    </>
  );
}
