import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/felipescunha.png" alt="Felipe Cunha"/>
      <div>
        <strong>Felipe Cunha</strong>
        <p>
          <img src="icons/level.svg" alt="Lsevel"/>
          Level {level}
         </p>
      </div>
    </div>
  );
}