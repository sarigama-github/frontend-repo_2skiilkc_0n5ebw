import { LogOut, Trash2, KeyRound, User } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [username, setUsername] = useState('student')
  const [password, setPassword] = useState('')

  const signOut = () => alert('Signed out')
  const deleteAccount = () => confirm('Delete account? This cannot be undone.') && alert('Account deleted')
  const save = () => alert('Settings saved')

  return (
    <section className="relative max-w-xl mx-auto px-4 py-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white border rounded-xl p-5 space-y-4 shadow-sm">
        <div>
          <label className="text-sm font-medium flex items-center gap-2"><User className="h-4 w-4"/> Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium flex items-center gap-2"><KeyRound className="h-4 w-4"/> New Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={save} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">Save Changes</button>
          <div className="flex items-center gap-2">
            <button onClick={signOut} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border"><LogOut className="h-4 w-4"/> Sign out</button>
            <button onClick={deleteAccount} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-red-600"><Trash2 className="h-4 w-4"/> Delete</button>
          </div>
        </div>
      </div>
    </section>
  )
}
