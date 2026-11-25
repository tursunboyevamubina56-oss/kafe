import { NavLink, Outlet, useNavigate } from 'react-router'

const menu = [
  { to: '/dashboard', label: 'Asosiy', end: true },
  { to: '/dashboard/products', label: 'Mahsulotlar' },
  { to: '/dashboard/orders', label: 'Buyurtmalar' },
  { to: '/dashboard/settings', label: 'Sozlamalar' },
]

function linkClass({ isActive }) {
  return [
    'block rounded-lg px-4 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-kofe-600 text-white'
      : 'text-kofe-100 hover:bg-kofe-700',
  ].join(' ')
}

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen">
      {/* Chap tomon: menyu */}
      <aside className="flex w-60 flex-col bg-kofe-900 p-4">
        <h1 className="mb-6 px-2 text-xl font-bold text-white">☕ Kafe Admin</h1>

        <nav className="flex flex-1 flex-col gap-1">
          {menu.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => navigate('/login')}
          className="rounded-lg border border-kofe-500 px-4 py-2 text-sm text-kofe-100 transition hover:bg-kofe-700"
        >
          Chiqish
        </button>
      </aside>

      {/* O'ng tomon: ichma-ich sahifa shu yerda chiqadi */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
