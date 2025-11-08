import { Users, UserPlus } from 'lucide-react'

const you = { name: 'You', friends: 8 }
const suggestions = [
  { id: 's1', name: 'Ava Chen', mutual: 3 },
  { id: 's2', name: 'Jordan Lee', mutual: 1 },
  { id: 's3', name: 'Sam Patel', mutual: 2 },
  { id: 's4', name: 'Nina Kapoor', mutual: 4 },
]

export default function ProfilePage() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 py-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="inline-flex items-center gap-2 text-sm bg-white border rounded-lg px-3 py-1.5">
          <Users className="h-4 w-4" /> Friends: <span className="font-semibold">{you.friends}</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">People you may know</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map(p => (
          <div key={p.id} className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300" />
            <div className="mt-3 font-medium">{p.name}</div>
            <div className="text-xs text-neutral-600">{p.mutual} mutual friends</div>
            <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">
              <UserPlus className="h-4 w-4" /> Connect
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
