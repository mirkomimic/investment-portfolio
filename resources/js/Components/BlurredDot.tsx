import { HTMLAttributes } from 'react';

export const BlurredDot = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`blurry-dot ${className}`}></div>;
};
