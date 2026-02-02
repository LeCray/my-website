import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from '../Animation/Transition';

export const usePageTransition = () => {
  const [transition, setTransition] = useState(false);
  const [txContent, setTxContent] = useState(false);
  const navigate = useNavigate();

  // Refs for transition animation
  const transitionFirstRef = useRef(null);
  const transitionMainRef = useRef(null);
  const transitionSecondRef = useRef(null);
  const FnameTxRef = useRef(null);
  const LnameTxRef = useRef(null);
  const learnTxRef = useRef(null);

  const playTransition = async (targetPath, onComplete) => {
    await setTransition(true);
    await setTxContent(true);

    // Execute your EXACT transition animation
    Transition(
      transitionFirstRef.current,
      transitionMainRef.current,
      transitionSecondRef.current,
      FnameTxRef.current,
      LnameTxRef.current,
      window.innerWidth,
      learnTxRef.current
    );

    // Execute callback after animation starts (for page-specific animations)
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 100);
    }

    // Navigate to new page
    setTimeout(() => {
      navigate(targetPath);
    }, 2000);

    // Hide transition content
    setTimeout(() => {
      setTxContent(false);
    }, 3000);

    // Remove transition container
    setTimeout(() => {
      setTransition(false);
    }, 3200);
  };

  const transitionRefs = {
    transitionFirstRef,
    transitionMainRef,
    transitionSecondRef,
    FnameTxRef,
    LnameTxRef,
    learnTxRef
  };

  return {
    transition,
    txContent,
    transitionRefs,
    playTransition
  };
};
