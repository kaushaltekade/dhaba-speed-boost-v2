import { ReactNode, useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const LazySection = ({ children, className, delay = 0 }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default LazySection;
