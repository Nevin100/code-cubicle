'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const AnimatedSection = dynamic(() => import('./AnimatedSection'), { ssr: false });

interface ClientWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ClientWrapper = ({ children, ...props }: ClientWrapperProps) => {
  return <AnimatedSection {...props}>{children}</AnimatedSection>;
};

export default ClientWrapper;
