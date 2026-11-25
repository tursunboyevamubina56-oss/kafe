import { Link } from 'react-router'

// Kirish va Ro'yxatdan o'tish sahifalari uchun umumiy karta
export default function AuthCard({ title, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <Link to="/" className="mb-6 block text-center text-lg font-bold text-kofe-700">
          ☕ Kafe Admin
        </Link>
        <h1 className="mb-6 text-center text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  )
}
