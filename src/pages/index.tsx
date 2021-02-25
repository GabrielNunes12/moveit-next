import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
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
  )
}
