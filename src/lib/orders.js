// Namuna buyurtmalar (haqiqiy backend yo'q)
export const ORDERS = [
  { id: 1001, customer: 'Ali Valiyev', items: 'Americano, Chizkeyk', total: 46000, status: 'Yetkazildi' },
  { id: 1002, customer: 'Madina Karimova', items: 'Latte x2', total: 48000, status: 'Tayyorlanmoqda' },
  { id: 1003, customer: 'Jasur Aliyev', items: 'Cappuccino, Limonad', total: 37000, status: 'Yangi' },
  { id: 1004, customer: 'Dilnoza Rahimova', items: 'Yashil choy', total: 12000, status: 'Yetkazildi' },
  { id: 1005, customer: 'Sardor Ergashev', items: 'Chizkeyk x2, Latte', total: 80000, status: 'Yangi' },
]

export const STATUS_STYLES = {
  Yangi: 'bg-blue-100 text-blue-700',
  Tayyorlanmoqda: 'bg-amber-100 text-amber-700',
  Yetkazildi: 'bg-green-100 text-green-700',
}
