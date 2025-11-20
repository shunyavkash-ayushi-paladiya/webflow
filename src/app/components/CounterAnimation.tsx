'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  endValue: number;
  suffix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ endValue, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let startTimestamp: number | null = null;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            const currentCount = Math.min(
              endValue,
              (progress / duration) * endValue
            );

            setCount(Math.floor(currentCount));

            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
              observer.unobserve(entry.target);
            }
          };

          window.requestAnimationFrame(step);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue]);

  return (
    <h3 className="counter-title" ref={ref}>
      {count.toLocaleString()}
      {suffix && <span>{suffix}</span>}
    </h3>
  );
};

export default CounterAnimation;
