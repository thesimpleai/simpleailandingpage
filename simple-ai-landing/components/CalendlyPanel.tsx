'use client'
import { useEffect, useState } from 'react'

declare global {
  interface Window { gtag?: (...args: any[]) => void }
}

export default function CalendlyPanel() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openCalendly', handler as EventListener)
    return () => window.removeEventListener('openCalendly', handler as EventListener)
  }, [])

  useEffect(() => {
    if (open && window.gtag) {
      window.gtag('event', 'calendly_open')
    }
  }, [open])

  return (
    <div id="booking" className="w-full overflow-hidden transition-all" style={{ height: open ? 600 : 56 }}>
      {open ? (
        <iframe
          src="https://calendly.com/kin-2h4/15-minute-strategy-meeting"
          className="w-full h-full border-0"
          loading="lazy"
        />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-full h-full bg-blue-600 text-white font-semibold"
        >
          Book your free AI snapshot now →
        </button>
      )}
    </div>
  )
}
