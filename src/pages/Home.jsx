import { useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="text-7xl">☕</div>
      <h1 className="text-4xl font-bold">Kafe Admin</h1>
      <p className="max-w-md text-kofe-700">
        Kafeingiz menyusi, buyurtmalari va sozlamalarini bir joydan boshqaring.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => navigate('/login')}
          className="rounded-lg bg-kofe-600 px-6 py-2 font-medium text-white transition hover:bg-kofe-700"
        >
          Kirish
        </button>
        <button
          onClick={() => navigate('/register')}
          className="rounded-lg border border-kofe-500 px-6 py-2 font-medium text-kofe-700 transition hover:bg-kofe-100"
        >
          Ro'yxatdan o'tish
        </button>
      </div>
    </div>
  )
}
