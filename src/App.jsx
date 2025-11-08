import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Home, Calendar, Bell, User, Settings } from 'lucide-react'
import ProposalsPage from './components/ProposalsPage'
import CalendarPage from './components/CalendarPage'
import FeedPage from './components/FeedPage'
import ProfilePage from './components/ProfilePage'
import SettingsPage from './components/SettingsPage'

function Shell({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 text-neutral-900">
      <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-green-400 to-emerald-500 shadow-inner" />
            <span className="text-xl font-semibold tracking-tight">LinkUp</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-700">
            <NavLink to="/proposals" className={({isActive}) => `hover:text-blue-600 flex items-center gap-2 ${isActive ? 'text-blue-600 font-medium' : ''}`}><Bell className="h-4 w-4"/> Proposals</NavLink>
            <NavLink to="/calendar" className={({isActive}) => `hover:text-blue-600 flex items-center gap-2 ${isActive ? 'text-blue-600 font-medium' : ''}`}><Calendar className="h-4 w-4"/> Calendar</NavLink>
            <NavLink to="/feed" className={({isActive}) => `hover:text-blue-600 flex items-center gap-2 ${isActive ? 'text-blue-600 font-medium' : ''}`}><Home className="h-4 w-4"/> What’s On</NavLink>
            <NavLink to="/profile" className={({isActive}) => `hover:text-blue-600 flex items-center gap-2 ${isActive ? 'text-blue-600 font-medium' : ''}`}><User className="h-4 w-4"/> Profile</NavLink>
            <NavLink to="/settings" className={({isActive}) => `hover:text-blue-600 flex items-center gap-2 ${isActive ? 'text-blue-600 font-medium' : ''}`}><Settings className="h-4 w-4"/> Settings</NavLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-neutral-200 bg-white/70 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} LinkUp</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-blue-600" href="#">Privacy</a>
            <a className="hover:text-blue-600" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Landing() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Meet, study, and connect. Effortlessly.</h1>
        <p className="mt-4 text-neutral-700 md:text-lg max-w-2xl mx-auto">LinkUp proposes smart meetups using your free time, interests, and campus network. No Spline hero — just clean gradients and focus.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/proposals" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">View AI Proposals</Link>
          <Link to="/calendar" className="px-5 py-3 rounded-lg bg-white text-neutral-900 font-semibold border border-neutral-200 hover:border-neutral-300">Open Calendar</Link>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/proposals" element={<ProposalsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}

export default App
