import { useState } from 'react'
import { useNavigate } from 'react-router'
import Field from '../../components/Field.jsx'
import { CATEGORIES, addProduct } from '../../lib/products.js'

export default function NewProduct() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', category: CATEGORIES[0], price: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const price = Number(form.price)

    if (!form.name.trim()) {
      setError('Mahsulot nomini kiriting')
      return
    }
    if (!form.price || Number.isNaN(price) || price <= 0) {
      setError("Narx 0 dan katta son bo'lishi kerak")
      return
    }

    addProduct({ name: form.name.trim(), category: form.category, price })
    // replace: true — "orqaga" bosganda qayta forma ochilmaydi
    navigate('/dashboard/products', { replace: true })
  }

  return (
    <div className="max-w-md">
      <h2 className="mb-6 text-2xl font-bold">Yangi mahsulot</h2>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow"
      >
        <Field
          id="name"
          label="Nomi"
          type="text"
          placeholder="Masalan: Espresso"
          value={form.name}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="category" className="mb-1 block text-sm font-medium">
            Kategoriya
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-kofe-200 bg-white px-3 py-2 outline-none focus:border-kofe-500 focus:ring-2 focus:ring-kofe-200"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <Field
          id="price"
          label="Narxi (so'm)"
          type="number"
          min="0"
          placeholder="20000"
          value={form.price}
          onChange={handleChange}
        />

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-kofe-600 px-5 py-2 font-medium text-white transition hover:bg-kofe-700"
          >
            Saqlash
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border border-kofe-500 px-5 py-2 font-medium text-kofe-700 transition hover:bg-kofe-100"
          >
            Bekor qilish
          </button>
        </div>
      </form>
    </div>
  )
}
