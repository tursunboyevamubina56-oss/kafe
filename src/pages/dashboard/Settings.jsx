import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Field from '../../components/Field.jsx'

export default function Settings() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    cafeName: 'Kofe Dunyosi',
    phone: '+998 90 123 45 67',
    address: 'Toshkent, Amir Temur ko\'chasi 1',
  })
  const [saved, setSaved] = useState(false)

  // Bonus 2: "Saqlandi" chiqqach, 2 soniyadan keyin /dashboard ga o'tamiz
  useEffect(() => {
    if (!saved) return
    const timer = setTimeout(() => navigate('/dashboard'), 2000)
    // Foydalanuvchi boshqa sahifaga o'tib ketsa, taymerni to'xtatamiz
    return () => clearTimeout(timer)
  }, [saved, navigate])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <div className="max-w-md">
      <h2 className="mb-6 text-2xl font-bold">Sozlamalar</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow"
      >
        <Field id="cafeName" label="Kafe nomi" value={form.cafeName} onChange={handleChange} />
        <Field id="phone" label="Telefon" value={form.phone} onChange={handleChange} />
        <Field id="address" label="Manzil" value={form.address} onChange={handleChange} />

        {saved && (
          <p role="status" className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
            Saqlandi ✓
          </p>
        )}

        <button
          type="submit"
          disabled={saved}
          className="rounded-lg bg-kofe-600 px-5 py-2 font-medium text-white transition hover:bg-kofe-700 disabled:opacity-60"
        >
          Saqlash
        </button>
      </form>
    </div>
  )
}
