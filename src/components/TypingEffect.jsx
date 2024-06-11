// src/TypingEffect.js
import React, { useState, useEffect } from 'react';

export const TypingEffect = ({ sentences, speed, eraseSpeed, delayBetweenSentences, delayBeforeErase }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!isErasing) {
      if (charIndex < sentences[sentenceIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + sentences[sentenceIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, speed);

        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsErasing(true);
        }, delayBeforeErase);

        return () => clearTimeout(timeoutId);
      }
    } else {
      if (charIndex > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, eraseSpeed);

        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsErasing(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, delayBetweenSentences);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [charIndex, isErasing, sentenceIndex, sentences, speed, eraseSpeed, delayBetweenSentences, delayBeforeErase]);

  return <div>{displayedText}</div>;
};
