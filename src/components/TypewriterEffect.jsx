import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true); // State untuk mengatur blink

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev); // Toggle blinking
    }, 500); // Ubah interval blink sesuai kebutuhan

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {displayedText}
      <span className={`text-2xl ${isBlinking ? 'text-white shadow-md' : 'text-transparent'}`}>|</span>
    </span>
  );
};

export default TypewriterEffect;
