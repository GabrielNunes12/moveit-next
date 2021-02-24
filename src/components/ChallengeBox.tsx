import { symlink } from 'fs';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeBoxActive}>
           <header> Ganhe 400 xp</header>
           <main>
             <img src="icons/body.svg"/>
             <strong>Novo desafio</strong>
             <p>Levante e faça uma caminhada de 3 minutos</p>
           </main>
           <footer>
            <button 
              className={styles.challengeFailedButton}
              type="button" 
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