import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles } from '../styles/theme';

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home( props: HomeProps) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <label className="switch">
        <input type="checkbox" onClick={themeToggler}/>
        <span className="slider round"></span>
      </label>
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience} 
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head> 
            <title>Moveit App</title>
          </Head>
          <ExperienceBar/>

          <CountdownProvider>
            <section>
              <div>
                <Profile/>
                <CompletedChallenges />
                <Countdown/>
              </div>
              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </ThemeProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}