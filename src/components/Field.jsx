// Label + input juftligi
export default function Field({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-lg border border-kofe-200 bg-white px-3 py-2 outline-none focus:border-kofe-500 focus:ring-2 focus:ring-kofe-200"
        {...props}
      />
    </div>
  )
}
