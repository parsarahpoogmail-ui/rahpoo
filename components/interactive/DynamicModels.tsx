'use client';
import dynamic from 'next/dynamic';

export const CellModel = dynamic(() => import('@/components/interactive/CellModel'), {
  ssr: false,
  loading: () => <div className="h-[360px] rounded-3xl bg-white/5 animate-pulse" />,
});

export const ChemModel = dynamic(() => import('@/components/interactive/ChemModel'), {
  ssr: false,
  loading: () => <div className="h-[360px] rounded-3xl bg-white/5 animate-pulse" />,
});
