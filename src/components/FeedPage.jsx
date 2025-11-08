import { useState } from 'react'
import { MessageCircle, Heart } from 'lucide-react'

const initialPosts = [
  { id: 1, user: 'Maya', text: 'Studying 18-100 midterm at the library', tags: ['study', 'ece'], likes: 12, comments: [
    { id: 'c1', user: 'Ava', text: 'Good luck!'},
    { id: 'c2', user: 'Nina', text: "I can join at 6!"},
  ], liked: false },
  { id: 2, user: 'Diego', text: 'Gym at 7pm – who\'s in?', tags: ['gym'], likes: 5, comments: [
    { id: 'c3', user: 'Sam', text: 'I\'m in!'},
  ], liked: false },
  { id: 3, user: 'Nina', text: 'Baking night in the dorm kitchen!', tags: ['baking','social'], likes: 9, comments: [
    { id: 'c4', user: 'Maya', text: 'Save me a cookie!'},
    { id: 'c5', user: 'Diego', text: 'I\'ll bring flour.'},
  ], liked: false },
]

export default function FeedPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [commentText, setCommentText] = useState('')
  const [activePostId, setActivePostId] = useState(null)

  const toggleLike = (id) => {
    setPosts(ps => ps.map(p => {
      if (p.id !== id) return p
      const liked = !p.liked
      return { ...p, liked, likes: liked ? p.likes + 1 : p.likes - 1 }
    }))
  }

  const addComment = (id) => {
    if (!commentText.trim()) return
    setPosts(ps => ps.map(p => {
      if (p.id !== id) return p
      const newComment = { id: `c${Date.now()}`, user: 'You', text: commentText.trim() }
      return { ...p, comments: [...p.comments, newComment] }
    }))
    setCommentText('')
    setActivePostId(id)
  }

  return (
    <section className="relative max-w-2xl mx-auto px-4 py-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 via-emerald-200/60 to-teal-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-cyan-100 blur-3xl" />
      </div>
      <h1 className="text-2xl font-bold mb-6">What’s On</h1>
      <div className="space-y-4">
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
              <button onClick={() => toggleLike(p.id)} className={`inline-flex items-center gap-1 ${p.liked ? 'text-rose-600' : 'hover:text-rose-600'}`}>
                <Heart className={`h-4 w-4 ${p.liked ? 'fill-rose-600 text-rose-600' : ''}`} /> {p.likes}
              </button>
              <button onClick={() => setActivePostId(activePostId === p.id ? null : p.id)} className="inline-flex items-center gap-1 hover:text-blue-600">
                <MessageCircle className="h-4 w-4" /> {p.comments.length}
              </button>
            </div>
            {(activePostId === p.id) && (
              <div className="mt-3 space-y-3">
                <div className="space-y-2">
                  {p.comments.map(c => (
                    <div key={c.id} className="text-sm"><span className="font-medium">{c.user}:</span> {c.text}</div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input value={commentText} onChange={e => setCommentText(e.target.value)} placeholder="Add a comment" className="flex-1 rounded-lg border px-3 py-2 text-sm" />
                  <button onClick={() => addComment(p.id)} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm">Post</button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
