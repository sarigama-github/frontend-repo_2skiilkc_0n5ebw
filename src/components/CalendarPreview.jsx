import { CalendarDays } from 'lucide-react'

const hours = Array.from({ length: 8 }, (_, i) => i + 9) // 9am - 4pm
const busyBlocks = [
  { day: 2, start: 10, end: 11.5, title: 'CS Lecture' },
  { day: 3, start: 13, end: 14, title: 'Team Meeting' },
  { day: 4, start: 12, end: 13, title: 'Lunch' },
]

export default function CalendarPreview() {
  return (
    <section id="calendar" className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-blue-600" /> Week at a Glance
        </h2>
        <div className="text-sm text-neutral-600">Free/Busy preview</div>
      </div>
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="grid grid-cols-6 text-xs font-medium text-neutral-600 border-b border-neutral-200">
          <div className="p-2">Time</div>
          {['Mon','Tue','Wed','Thu','Fri'].map(d => (
            <div key={d} className="p-2 text-center">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-6">
          {/* times */}
          <div className="divide-y divide-neutral-200">
            {hours.map(h => (
              <div key={h} className="h-12 px-2 text-xs flex items-start pt-1 text-neutral-500">{h}:00</div>
            ))}
          </div>
          {/* days */}
          {[1,2,3,4,5].map(day => (
            <div key={day} className="relative divide-y divide-neutral-200">
              {hours.map(h => (
                <div key={h} className="h-12" />
              ))}
              {busyBlocks.filter(b => b.day === day).map((b, i) => {
                const top = (b.start - 9) * 48
                const height = (b.end - b.start) * 48
                return (
                  <div key={i} className="absolute left-1 right-1 rounded-md bg-blue-100 border border-blue-200 text-blue-800 px-2 py-1 text-xs overflow-hidden" style={{ top, height }}>
                    {b.title}
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
