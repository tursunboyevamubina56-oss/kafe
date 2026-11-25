import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="text-7xl font-bold text-kofe-500">404</div>
      <h1 className="text-2xl font-bold">Sahifa topilmadi</h1>
      <p className="max-w-md text-kofe-700">
        Siz izlagan sahifa mavjud emas yoki boshqa joyga ko'chirilgan.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border border-kofe-500 px-6 py-2 font-medium text-kofe-700 transition hover:bg-kofe-100"
        >
          Orqaga
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="rounded-lg bg-kofe-600 px-6 py-2 font-medium text-white transition hover:bg-kofe-700"
        >
          Panelga qaytish
        </button>
      </div>
    </div>
  )
}
