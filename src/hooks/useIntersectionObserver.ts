import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            observer.unobserve(element);
          }
        } else if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return { ref, isVisible };
};
