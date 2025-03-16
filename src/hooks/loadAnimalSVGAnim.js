import { useEffect } from "react";
import anime from "animejs";

const useAnime = (settings) => {
  useEffect(() => {
    const animation = anime(settings);
    return () => animation.pause();
  }, []);
};

export default useAnime;
