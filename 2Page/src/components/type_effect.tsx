// TypingEffect.tsx
import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  textArray: string[];
  elementId: string;
  typingDelay?: number;
  erasingDelay?: number;
  newTextDelay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  textArray,
  elementId,
  typingDelay = 200,
  erasingDelay = 100,
  newTextDelay = 2000,
}) => {
  const [text, setText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!isTyping) setIsTyping(true);
      setText(prevText => prevText + textArray[textArrayIndex].charAt(charIndex));
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setIsTyping(false);
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      if (!isTyping) setIsTyping(true);
      setText(prevText => prevText.substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      setIsTyping(false);
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  };

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    <h1 id={elementId} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center">
      {text}
      <span className={`cursor ${isTyping ? 'typing' : ''}`}>|</span>
    </h1>
  );
};

export default TypingEffect;
