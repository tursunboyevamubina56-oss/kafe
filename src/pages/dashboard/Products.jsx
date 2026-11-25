import { useState } from 'react'
import { useNavigate } from 'react-router'
import { getProducts, formatPrice } from '../../lib/products.js'

export default function Products() {
  const navigate = useNavigate()
  const [products] = useState(getProducts)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mahsulotlar</h2>
        <button
          onClick={() => navigate('/dashboard/products/new')}
          className="rounded-lg bg-kofe-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-kofe-700"
        >
          + Qo'shish
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-kofe-100 text-kofe-700">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Nomi</th>
              <th className="px-4 py-3">Kategoriya</th>
              <th className="px-4 py-3">Narxi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className="border-t border-kofe-100">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">{formatPrice(p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
