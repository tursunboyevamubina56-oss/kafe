# ☕ Kafe Admin

React Router (`useNavigate`, `NavLink`, `Outlet`) bo'yicha uy vazifasi (2.10-dars): kafe uchun admin panel.

**Texnologiyalar:** Vite, React 19, React Router 8, Tailwind CSS 4.

## Ishga tushirish

```bash
npm install
npm run dev
```

## Sahifalar

| Yo'l | Sahifa |
|---|---|
| `/` | Bosh sahifa («Kirish», «Ro'yxatdan o'tish» — `navigate()`) |
| `/login` | Kirish (tekshiruv, so'ng `navigate("/dashboard", { replace: true })`) |
| `/register` | Ro'yxatdan o'tish (so'ng `navigate("/login")`) |
| `/dashboard` | Panel: chapda `NavLink` menyusi, o'ngda `Outlet` |
| `/dashboard/products` | Mahsulotlar ro'yxati |
| `/dashboard/products/new` | Yangi mahsulot (Saqlash — `replace`, Bekor qilish — `navigate(-1)`) |
| `/dashboard/orders` | Buyurtmalar |
| `/dashboard/settings` | Sozlamalar |
| `*` | 404 («Orqaga» — `navigate(-1)`, «Panelga qaytish») |

## Bonuslar

- **Bonus 1:** yangi mahsulot `localStorage` da saqlanadi va ro'yxatda ko'rinadi.
- **Bonus 2:** Sozlamalarda «Saqlash» → «Saqlandi» yozuvi → 2 soniyadan keyin `/dashboard` (`useEffect` + `setTimeout` + `navigate`).

## Sinab ko'rish

Kirish uchun `@` li istalgan email va kamida 6 belgili parol yetadi, masalan `admin@shop.uz` / `123456`.
