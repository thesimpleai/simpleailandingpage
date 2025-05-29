'use client'
import { useRef } from 'react'
import { useScrollWrite } from '../hooks/useScrollWrite'

type Props = {
  children: string | JSX.Element
  className?: string
}

export default function ScrollWriteSection({ children, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const text = typeof children === 'string' ? children : ''
  useScrollWrite(ref, text)

  return (
    <p ref={ref} className={className} aria-live="polite">
      {typeof children === 'string' ? '' : children}
    </p>
  )
}
