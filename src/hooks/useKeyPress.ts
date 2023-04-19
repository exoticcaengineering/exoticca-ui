import { RefObject, useEffect } from 'react';

type Handler = (event: KeyboardEvent) => void;

export const useKeyPress = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  keyCode: string,
  handler: Handler,
): void => {
  useEffect(() => {
    const element = ref.current;
    const listener = (event: KeyboardEvent) => {
      if (event.code === keyCode) {
        handler(event);
      }
    };
    element?.addEventListener('keydown', listener);
    return () => {
      element?.addEventListener('keydown', listener);
    };
  }, [ref, keyCode, handler]);
};
