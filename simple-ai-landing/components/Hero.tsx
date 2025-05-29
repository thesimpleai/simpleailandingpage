'use client'
import { useEffect, useRef } from 'react'
import LogoIntro from "./LogoIntro"
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const lineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefers) return
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, { text: '' }, {
        duration: 3,
        text: 'We help small and medium businesses use AI to cut costs and lift productivity.',
        ease: 'none',
        delay: 1.5,
      })
    }
  }, [])

  return (
    <section className="text-center py-8" aria-live="polite">
      <LogoIntro />
      <p ref={lineRef} className="mt-4 text-xl" />
      <a href="#booking" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded focus:outline-none focus:ring">Get a free AI snapshot →</a>
    </section>
  )
}

