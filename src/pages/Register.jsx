import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthCard from '../components/AuthCard.jsx'
import Field from '../components/Field.jsx'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      setError("Barcha maydonlarni to'ldiring")
      return
    }
    if (!form.email.includes('@')) {
      setError("Emailda @ belgisi bo'lishi kerak")
      return
    }
    if (form.password.length < 6) {
      setError("Parol kamida 6 belgidan iborat bo'lishi kerak")
      return
    }
    if (form.password !== form.confirm) {
      setError('Parollar bir xil emas')
      return
    }

    navigate('/login')
  }

  return (
    <AuthCard title="Ro'yxatdan o'tish">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <Field
          id="name"
          label="Ism"
          type="text"
          placeholder="Ismingiz"
          value={form.name}
          onChange={handleChange}
        />
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
        <Field
          id="confirm"
          label="Parolni takrorlang"
          type="password"
          placeholder="Parolni qayta kiriting"
          value={form.confirm}
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
          Ro'yxatdan o'tish
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Hisobingiz bormi?{' '}
        <Link to="/login" className="font-medium text-kofe-600 underline">
          Kirish
        </Link>
      </p>
    </AuthCard>
  )
}
