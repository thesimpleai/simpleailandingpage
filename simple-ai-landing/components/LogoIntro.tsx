'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LogoIntro() {
  const textRef = useRef<SVGTextElement>(null)

  useEffect(() => {
    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefers) return
    if (textRef.current) {
      const length = textRef.current.getComputedTextLength()
      gsap.set(textRef.current, { strokeDasharray: length, strokeDashoffset: length })
      gsap.to(textRef.current, { strokeDashoffset: 0, duration: 1.5, ease: 'none' })
    }
  }, [])

  return (
    <svg width="100%" height="120" viewBox="0 0 300 120" aria-hidden="true" className="mx-auto">
      <text ref={textRef} x="50%" y="60%" textAnchor="middle" fontSize="48" className="font-zen" fill="none" stroke="currentColor" strokeWidth="2">
        Simple AI
      </text>
    </svg>
  )
}
