// Mahsulotlarni localStorage'da saqlash (Bonus 1)
const KEY = 'kafe_products'

export const CATEGORIES = ['Kofe', 'Choy', 'Desert', 'Ichimlik', 'Taom']

const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Americano', category: 'Kofe', price: 18000 },
  { id: 2, name: 'Cappuccino', category: 'Kofe', price: 22000 },
  { id: 3, name: 'Latte', category: 'Kofe', price: 24000 },
  { id: 4, name: 'Yashil choy', category: 'Choy', price: 12000 },
  { id: 5, name: 'Chizkeyk', category: 'Desert', price: 28000 },
  { id: 6, name: 'Limonad', category: 'Ichimlik', price: 15000 },
]

export function getProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    if (Array.isArray(saved)) return saved
  } catch {
    // buzilgan ma'lumot bo'lsa, boshlang'ich ro'yxatga qaytamiz
  }
  return DEFAULT_PRODUCTS
}

export function addProduct({ name, category, price }) {
  const products = getProducts()
  const id = products.reduce((max, p) => Math.max(max, p.id), 0) + 1
  const next = [...products, { id, name, category, price }]
  localStorage.setItem(KEY, JSON.stringify(next))
  return next
}

export function formatPrice(value) {
  return `${Number(value).toLocaleString('ru-RU')} so'm`
}
