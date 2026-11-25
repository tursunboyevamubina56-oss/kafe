import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthCard from '../components/AuthCard.jsx'
import Field from '../components/Field.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const email = form.email.trim()

    if (!email || !form.password) {
      setError("Barcha maydonlarni to'ldiring")
      return
    }
    if (!email.includes('@')) {
      setError("Emailda @ belgisi bo'lishi kerak")
      return
    }
    if (form.password.length < 6) {
      setError("Parol kamida 6 belgidan iborat bo'lishi kerak")
      return
    }

    // To'g'ri bo'lsa panelga o'tamiz. replace: true — "orqaga" bosganda
    // kirish sahifasiga qaytib bo'lmaydi.
    navigate('/dashboard', { replace: true })
  }

  return (
    <AuthCard title="Kirish">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <Field
          id="email"
          label="Email"
          type="text"
          placeholder="admin@kafe.uz"
          value={form.email}
          onChange={handleChange}
        />
        <Field
          id="password"
          label="Parol"
          type="password"
          placeholder="Kamida 6 belgi"
          value={form.password}
          onChange={handleChange}
        />

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-kofe-600 px-4 py-2 font-medium text-white transition hover:bg-kofe-700"
        >
          Kirish
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Hisobingiz yo'qmi?{' '}
        <Link to="/register" className="font-medium text-kofe-600 underline">
          Ro'yxatdan o'ting
        </Link>
      </p>
    </AuthCard>
  )
}
