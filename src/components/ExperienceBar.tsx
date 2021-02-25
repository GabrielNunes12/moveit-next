import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${porcentToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}