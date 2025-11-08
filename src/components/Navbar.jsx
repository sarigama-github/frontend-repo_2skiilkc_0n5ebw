import { Menu, Calendar, Bell, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-green-400 to-emerald-500 shadow-inner" />
          <span className="text-xl font-semibold tracking-tight">LinkUp</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#calendar" className="hover:text-blue-600 flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Calendar
          </a>
          <a href="#requests" className="hover:text-blue-600 flex items-center gap-2">
            <Bell className="h-4 w-4" /> AI Requests
          </a>
          <a href="#profile" className="hover:text-blue-600 flex items-center gap-2">
            <User className="h-4 w-4" /> Profile
          </a>
        </nav>
        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-300 text-neutral-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
