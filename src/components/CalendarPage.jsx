import { useMemo, useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, EyeOff } from 'lucide-react'

function startOfWeek(date) {
  const d = new Date(date)
  const day = d.getDay() // 0-6 Sun-Sat
  const diff = (day === 0 ? -6 : 1) - day // make Monday start
  d.setDate(d.getDate() + diff)
  d.setHours(0,0,0,0)
  return d
}

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

const hours = Array.from({ length: 12 }, (_, i) => i + 8) // 8am - 7pm

const seedEvents = [
  { id: 'e1', dayOffset: 1, start: 10, end: 11.5, title: 'CS Lecture', status: 'BUSY' },
  { id: 'e2', dayOffset: 2, start: 13, end: 14, title: 'Team Meeting', status: 'BUSY' },
  { id: 'e3', dayOffset: 3, start: 12, end: 13, title: 'Lunch', status: 'BUSY' },
  { id: 'e4', dayOffset: 4, start: 16, end: 17, title: 'Game Night', status: 'PENDING' },
]

export default function CalendarPage() {
  const [weekIndex, setWeekIndex] = useState(0)
  const [showPending, setShowPending] = useState(true)

  const base = useMemo(() => startOfWeek(new Date()), [])
  const weekStart = useMemo(() => addDays(base, weekIndex * 7), [base, weekIndex])
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CalendarDays className="h-6 w-6 text-blue-600" /> Calendar
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={() => setWeekIndex(w => w - 1)} className="h-9 w-9 rounded-lg border bg-white hover:bg-neutral-50 grid place-items-center">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="px-3 py-1.5 rounded-lg border bg-white text-sm">
            {weekStart.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} – {addDays(weekStart,6).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
          </div>
          <button onClick={() => setWeekIndex(w => w + 1)} className="h-9 w-9 rounded-lg border bg-white hover:bg-neutral-50 grid place-items-center">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={showPending} onChange={(e) => setShowPending(e.target.checked)} className="h-4 w-4" />
          <EyeOff className="h-4 w-4" /> Hide PENDING if unchecked
        </label>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="grid grid-cols-8 text-xs font-medium text-neutral-600 border-b border-neutral-200">
          <div className="p-2">Time</div>
          {days.map((d, i) => (
            <div key={i} className="p-2 text-center">
              {d.toLocaleDateString(undefined, { weekday: 'short' })}
              <div className="text-[11px] text-neutral-500">{d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8">
          <div className="divide-y divide-neutral-200">
            {hours.map(h => (
              <div key={h} className="h-12 px-2 text-xs flex items-start pt-1 text-neutral-500">{h}:00</div>
            ))}
          </div>
          {days.map((_, dayIdx) => (
            <div key={dayIdx} className="relative divide-y divide-neutral-200">
              {hours.map(h => (
                <div key={h} className="h-12" />
              ))}
              {seedEvents.filter(e => e.dayOffset === dayIdx && (showPending || e.status !== 'PENDING')).map((e) => {
                const top = (e.start - 8) * 48
                const height = (e.end - e.start) * 48
                const styles = e.status === 'PENDING' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-blue-100 border-blue-200 text-blue-800'
                return (
                  <div key={e.id} className={`absolute left-1 right-1 rounded-md border px-2 py-1 text-xs overflow-hidden ${styles}`} style={{ top, height }}>
                    <div className="flex items-center justify-between">
                      <span>{e.title}</span>
                      <span className="text-[10px] font-medium">{e.status}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
