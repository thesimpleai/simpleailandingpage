import Head from 'next/head'
import Hero from '../components/Hero'
import ScrollWriteSection from '../components/ScrollWriteSection'
import CTA from '../components/CTA'
import CalendlyPanel from '../components/CalendlyPanel'

const sections = [
  { title: 'Why owners call us', lines: ['Too much admin', 'Slow cash flow', 'Rising wages', 'Endless compliance'] },
  { title: 'Our AI tools', lines: [
    'Expert Chatbot    Knows your industry and your business. Answers staff and customer questions, day or night.',
    'Voice-to-Note     Speak in any language. Comes out as clear English notes in seconds.',
    'Report Builder    Reads your system data and produces ready-to-send reports.',
    'Form Auto-Fill    Drop in a doc. Repetitive forms come back complete.',
    'Compliance Check  Checks every file is in the right place and flags gaps.',
    'Phone Bot         Picks up, answers FAQs and books jobs while you sleep.',
    'AI Videos + Tests Turns big manuals into short, realistic videos with optional quizzes for staff or clients.'
  ] },
  { title: 'Quick wins', lines: [
    'Save up to 40 % admin time',
    'Onboard staff and clients 3× faster with AI videos',
    'Hire carers or tradies without worrying about written English',
    'Sail through audits'
  ] },
  { title: 'Plans & prices', lines: [
    'Growth\t$4 500 setup\t$70 per user / month',
    'Complete\tfrom $9 500 setup\t$99 per user / month',
    'No lock-ins. Cancel any time.'
  ] },
  { title: 'Proof', lines: [
    '“Monthly reporting dropped from two days to two hours.” — Second Home NDIS',
    '“Simple AI helped us build a phone bot so Chinese speakers can practise English by talking to it. Everyone loves it.” — MinWen Wu',
    '“The compliance checker flagged missing files we’d missed. Our audit passed with zero issues.” — Sarah Tran, BrightPath Support'
  ] },
  { title: 'How it works', lines: [
    '1. 15-min call – spot easy wins',
    '2. 2-week pilot – live in your system',
    '3. Full roll-out – training included',
    '4. Monthly tune-ups – stay ahead'
  ] },
  { title: 'FAQ', lines: [
    'Do I need an IT team?\tNo. We host and support everything for you.',
    'Is my data stored in Australia?\tYes – encrypted in local data centres.',
    'Can I start small?\tSure. Begin with one tool and add more later.'
  ] },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple AI</title>
        <meta name="description" content="We help small and medium businesses use AI to cut costs and lift productivity." />
      </Head>
      <Hero />
      <div className="max-w-3xl mx-auto space-y-12 px-4 py-8">
        {sections.map((sec, i) => (
          <>
            <div key={sec.title} className="space-y-4">
              <h2 className="text-2xl font-semibold font-zen">{sec.title}</h2>
              {sec.lines.map((line, idx) => (
                <ScrollWriteSection key={idx} className="block">
                  {line}
                </ScrollWriteSection>
              ))}
            </div>
            {i % 2 === 1 && <CTA key={`cta-${i}`} targetId="booking">Get a free AI snapshot →</CTA>}
          </>
        ))}
      </div>
      <CTA targetId="booking">Ready to see it? Book your free AI snapshot now →</CTA>
      <CalendlyPanel />
    </>
  )
}
