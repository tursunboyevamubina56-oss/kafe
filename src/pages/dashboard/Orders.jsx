import { ORDERS, STATUS_STYLES } from '../../lib/orders.js'
import { formatPrice } from '../../lib/products.js'

export default function Orders() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Buyurtmalar</h2>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-kofe-100 text-kofe-700">
            <tr>
              <th className="px-4 py-3">№</th>
              <th className="px-4 py-3">Mijoz</th>
              <th className="px-4 py-3">Buyurtma</th>
              <th className="px-4 py-3">Summa</th>
              <th className="px-4 py-3">Holati</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id} className="border-t border-kofe-100">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3 font-medium">{o.customer}</td>
                <td className="px-4 py-3">{o.items}</td>
                <td className="px-4 py-3">{formatPrice(o.total)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[o.status]}`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
