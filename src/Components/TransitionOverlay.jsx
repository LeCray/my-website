import React from 'react';
import '../Components/Landing/Styles/LandingTransitions.css';

export const TransitionOverlay = ({ transition, txContent, transitionRefs }) => {
  const {
    transitionFirstRef,
    transitionMainRef,
    transitionSecondRef,
    FnameTxRef,
    LnameTxRef,
    learnTxRef
  } = transitionRefs;

  if (!transition) return null;

  return (
    <div className="transition-container">
      <div ref={transitionFirstRef} className="transition-first"></div>
      <div ref={transitionMainRef} className="transition-main">
        <div
          className="transition-content"
          style={{ display: txContent ? null : "none" }}
        >
          <p ref={FnameTxRef} className="name-tx">
            J
          </p>
          <p ref={LnameTxRef} className="name-tx" style={{ marginLeft: 5 }}>
            K
          </p>
          <p ref={learnTxRef} className="learn-tx">
            - LIVING TO LEARN -
          </p>
        </div>
      </div>
      <div ref={transitionSecondRef} className="transition-second"></div>
    </div>
  );
};
