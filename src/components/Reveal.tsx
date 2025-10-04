import React from "react";

interface RevealProps {
  index?: number;
  maxDelayMs?: number;
  className?: string;
  children: React.ReactNode;
}

export default function Reveal({ index = 0, maxDelayMs = 800, className, children }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [hasShown, setHasShown] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(true);
      setHasShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            setHasShown(true);
            if (el) obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => {
      try { obs.disconnect(); } catch {}
    };
  }, []);

  const delay = Math.min((index || 0) * 80, maxDelayMs);
  const style: React.CSSProperties = visible ? { animationDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={className} style={style}>
      <div className={visible ? 'animate-fade-slide-up' : hasShown ? '' : ''}>
        {children}
      </div>
    </div>
  );
}

