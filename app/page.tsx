export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Engineering Managers &amp; Team Leads
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-organize Slack threads{' '}
          <span className="text-[#58a6ff]">by priority</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          AI reads your Slack threads, scores them by urgency, and surfaces what actually needs your attention — so nothing critical slips through.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No credit card required to try.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ['AI Priority Scoring', 'Every thread gets a score based on urgency, mentions, and context.'],
            ['Smart Notifications', 'Only get pinged for threads that actually need your response.'],
            ['Custom Views', 'Filter by team, project, or priority level in one dashboard.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
              <p className="text-[#8b949e] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-8">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect unlimited Slack workspaces',
              'AI priority scoring on all threads',
              'Smart digest emails & notifications',
              'Custom filtered dashboard views',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              'How does the AI prioritization work?',
              'We analyze thread content, participant roles, response times, and keywords to generate a priority score from 1–10. You can tune the weights to match your team\'s workflow.',
            ],
            [
              'Is my Slack data secure?',
              'Yes. We only read thread metadata and content needed for scoring. Data is encrypted in transit and at rest, and we never train models on your messages.',
            ],
            [
              'Can I cancel anytime?',
              'Absolutely. Cancel from your account dashboard with one click. You keep access until the end of your billing period.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Slack Thread Organizer. All rights reserved.
      </footer>
    </main>
  )
}
