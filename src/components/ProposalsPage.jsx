import { useState } from 'react'
import { Check, X, Sparkles, Info } from 'lucide-react'

const initialRequests = [
  {
    id: 'req1',
    title: 'Study for Calculus Midterm',
    friend: 'Ava Chen',
    when: 'Today, 4:00–5:00 PM',
    where: 'Engineering Library',
    tags: ['study', 'math'],
    status: 'NEW',
  },
  {
    id: 'req2',
    title: 'Gym Session',
    friend: 'Jordan Lee',
    when: 'Tomorrow, 7:30–8:15 AM',
    where: 'Campus Rec Center',
    tags: ['fitness'],
    status: 'NEW',
  },
  {
    id: 'req3',
    title: 'Coffee & Catch-up',
    friend: 'Sam Patel',
    when: 'Fri, 2:00–2:30 PM',
    where: 'Union Cafe',
    tags: ['social'],
    status: 'NEW',
  },
]

export default function ProposalsPage() {
  const [requests, setRequests] = useState(initialRequests)
  const [alert, setAlert] = useState(null)

  const handleAccept = (id) => {
    setRequests(rs => rs.map(r => r.id === id ? { ...r, status: 'PENDING' } : r))
    setAlert({ type: 'success', message: 'Proposal accepted. Your approval is pending confirmation.' })
    setTimeout(() => setAlert(null), 3000)
  }
  const handleDecline = (id) => {
    setRequests(rs => rs.map(r => r.id === id ? { ...r, status: 'DECLINED' } : r))
    setAlert({ type: 'warning', message: 'Proposal declined. No invites will be sent.' })
    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-emerald-600" /> AI Proposals
        </h1>
        <button onClick={() => setRequests(initialRequests)} className="text-sm text-blue-600 hover:underline">Reset</button>
      </div>

      {alert && (
        <div className={`mb-4 flex items-start gap-3 rounded-lg border p-3 text-sm ${alert.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
          <Info className="h-4 w-4 mt-0.5" />
          <span>{alert.message}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((r) => (
          <article key={r.id} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900">{r.title}</h3>
                <p className="text-sm text-neutral-600">With {r.friend}</p>
              </div>
              {r.status !== 'NEW' && (
                <span className={`text-xs px-2 py-0.5 rounded-full border ${r.status === 'PENDING' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-neutral-100 text-neutral-700 border-neutral-200'}`}>
                  {r.status}
                </span>
              )}
            </div>
            <div className="mt-3 space-y-1 text-sm text-neutral-700">
              <p><span className="font-medium">When:</span> {r.when}</p>
              <p><span className="font-medium">Where:</span> {r.where}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {r.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">#{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={() => handleAccept(r.id)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">
                <Check className="h-4 w-4" /> Accept
              </button>
              <button onClick={() => handleDecline(r.id)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 text-neutral-800 text-sm font-medium hover:bg-neutral-200">
                <X className="h-4 w-4" /> Decline
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
