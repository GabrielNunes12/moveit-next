import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void

}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children } : ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 3, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function resetChallenge() {
    setActiveChallenge(null);
  }
 
  function levelUp() {
    setLevel(level + 1);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    } 
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('./notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 😎', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  return (
    <ChallengesContext.Provider
      value={{
        level, 
        currentExperience, 
        challengesCompleted,
        activeChallenge, 
        experienceToNextLevel,
        levelUp, 
        startNewChallenge,
        completeChallenge,
        resetChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}