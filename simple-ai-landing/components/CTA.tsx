'use client'
declare global {
  interface Window { gtag?: (...args: any[]) => void }
}

import { useCallback } from 'react'

interface Props {
  targetId: string
  children: string
}

export default function CTA({ targetId, children }: Props) {
  const handleClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent('openCalendly'))
    if (window.gtag) {
      window.gtag('event', 'cta_click', { target: targetId })
    }
    const el = document.getElementById(targetId)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [targetId])

  return (
    <div className="w-full bg-blue-50 py-6 text-center">
      <button onClick={handleClick} className="px-6 py-3 bg-blue-600 text-white rounded focus:outline-none focus:ring">
        {children}
      </button>
    </div>
  )
}
