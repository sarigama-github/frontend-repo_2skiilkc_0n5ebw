import { Check, X, Sparkles } from 'lucide-react'

const sampleRequests = [
  {
    id: 'req1',
    title: 'Study for Calculus Midterm',
    friend: 'Ava Chen',
    when: 'Today, 4:00–5:00 PM',
    where: 'Engineering Library',
    tags: ['study', 'math'],
  },
  {
    id: 'req2',
    title: 'Gym Session',
    friend: 'Jordan Lee',
    when: 'Tomorrow, 7:30–8:15 AM',
    where: 'Campus Rec Center',
    tags: ['fitness'],
  },
  {
    id: 'req3',
    title: 'Coffee & Catch-up',
    friend: 'Sam Patel',
    when: 'Fri, 2:00–2:30 PM',
    where: 'Union Cafe',
    tags: ['social'],
  },
]

export default function AIRequests() {
  return (
    <section id="requests" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-500" /> Smart Proposals
        </h2>
        <button className="text-sm text-blue-600 hover:underline">Refresh</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleRequests.map((r) => (
          <article key={r.id} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900">{r.title}</h3>
                <p className="text-sm text-neutral-600">With {r.friend}</p>
              </div>
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
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">
                <Check className="h-4 w-4" /> Accept
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 text-neutral-800 text-sm font-medium hover:bg-neutral-200">
                <X className="h-4 w-4" /> Decline
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
