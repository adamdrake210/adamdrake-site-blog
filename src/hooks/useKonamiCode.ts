import { useEffect, useRef } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = (onUnlock: () => void) => {
  const positionRef = useRef(0);
  const callbackRef = useRef(onUnlock);
  callbackRef.current = onUnlock;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key =
        event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === KONAMI_SEQUENCE[positionRef.current]) {
        positionRef.current += 1;
        if (positionRef.current === KONAMI_SEQUENCE.length) {
          positionRef.current = 0;
          callbackRef.current();
        }
      } else {
        positionRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
