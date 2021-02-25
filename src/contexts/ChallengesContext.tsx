import { createContext, useState, ReactNode } from 'react';

interface ChallengesNewData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children:ReactNode
}

export const ChallengesContext = createContext({} as ChallengesNewData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)
  
  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    console.log('New challenge');
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}