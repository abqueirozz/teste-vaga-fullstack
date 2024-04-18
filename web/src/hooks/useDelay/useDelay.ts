import { useEffect, useState } from "react";

export const useDelay = (time: number) => {
  const [isFinished, setIsFinished] = useState(false);
  
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsFinished(true);
    }, time * 1000);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  
  return isFinished;
};
