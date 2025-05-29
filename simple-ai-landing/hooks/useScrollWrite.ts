'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

export function useScrollWrite(target: React.RefObject<HTMLElement>, text: string) {
  const tl = useRef<gsap.core.Tween>()
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const el = target.current
    if (!el) return
    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.set(el, { text: prefers ? text : '' })
    if (prefers) return
    tl.current = gsap.to(el, {
      text,
      ease: 'none',
      duration: text.length / 50,
      paused: true,
    })
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom center',
      onUpdate: self => {
        tl.current?.play()
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => tl.current?.pause(), 200)
        tl.current?.progress(self.progress)
      }
    })
    return () => {
      st.kill()
      tl.current?.kill()
    }
  }, [text, target])
}
