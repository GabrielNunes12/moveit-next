import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
           <header> Ganhe {activeChallenge.amount} xp</header>
           <main>
             <img src={`icons/${activeChallenge.type}.svg`}/>
             <strong>Novo desafio</strong>
             <p>{activeChallenge.description}</p>
           </main>
           <footer>
            <button 
              className={styles.challengeFailedButton}
              type="button" 
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
              className={styles.challengeSucceededButton}
              type="button" 
            >
              Completei
            </button>
           </footer>
        </div>
      ) : (
        <>
          <div className={styles.challengeNotActive}>
            <strong> Finalize um cíclo para receber um desafio </strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up"/>
              Avance de level completando desafios
            </p>
          </div>
        </>
      )}
    </div>
  )
}