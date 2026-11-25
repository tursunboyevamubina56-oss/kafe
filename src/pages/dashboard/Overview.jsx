import { getProducts, formatPrice } from '../../lib/products.js'
import { ORDERS } from '../../lib/orders.js'

function Card({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm text-kofe-700">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  )
}

export default function Overview() {
  const productCount = getProducts().length
  const newOrders = ORDERS.filter((o) => o.status === 'Yangi').length
  const revenue = ORDERS.reduce((sum, o) => sum + o.total, 0)

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Asosiy</h2>
      <p className="mb-6 text-kofe-700">Kafe boshqaruv paneliga xush kelibsiz.</p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card label="Mahsulotlar soni" value={productCount} />
        <Card label="Yangi buyurtmalar" value={newOrders} />
        <Card label="Umumiy tushum" value={formatPrice(revenue)} />
      </div>
    </div>
  )
}
