import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AIRequests from './components/AIRequests'
import CalendarPreview from './components/CalendarPreview'
import SocialFeed from './components/SocialFeed'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 text-neutral-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <section className="max-w-6xl mx-auto px-4 -mt-16 md:-mt-24 space-y-8 pb-16">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <AIRequests />
              <CalendarPreview />
            </div>
            <div className="lg:col-span-1">
              <SocialFeed />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-200 bg-white/70">
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

export default App
