import { useEffect, useState, useRef } from "react";

export default useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callBackFunc = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, options);

    if (containerRef.current) observer.observe(containerRef);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
