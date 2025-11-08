import { MessageCircle, Heart } from 'lucide-react'

const posts = [
  { id: 1, user: 'Maya', text: 'Studying 18-100 midterm at the library', tags: ['study', 'ece'], likes: 12, comments: 3 },
  { id: 2, user: 'Diego', text: 'Gym at 7pm – who\'s in?', tags: ['gym'], likes: 5, comments: 1 },
  { id: 3, user: 'Nina', text: 'Baking night in the dorm kitchen!', tags: ['baking','social'], likes: 9, comments: 2 },
]

export default function SocialFeed() {
  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold mb-4">What’s On</h2>
      <div className="space-y-3">
        {posts.map(p => (
          <article key={p.id} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{p.user}</div>
              <div className="flex gap-2 text-xs">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">#{t}</span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-neutral-700">{p.text}</p>
            <div className="mt-3 flex items-center gap-4 text-sm text-neutral-600">
              <button className="inline-flex items-center gap-1 hover:text-rose-600"><Heart className="h-4 w-4" /> {p.likes}</button>
              <button className="inline-flex items-center gap-1 hover:text-blue-600"><MessageCircle className="h-4 w-4" /> {p.comments}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
