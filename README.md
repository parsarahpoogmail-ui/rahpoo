# رهپو | پلتفرم یادگیری تعاملی

یک نمونه محصول آموزشی فارسی و RTL برای دانش‌آموزان دهم تا دوازدهم رشته‌های ریاضی‌فیزیک و علوم تجربی، ساخته‌شده با Next.js App Router، React و TypeScript.

## امکانات نمونه
- داشبورد و کلاس من
- درس‌های نمونه با محتوای تعاملی
- شبیه‌سازی F=ma
- نمودار تعاملی تابع
- مدل سه‌بعدی سلول و مولکول با React Three Fiber
- تمرین‌خانه و چالش امروز
- مرور هوشمند Mock
- پلنر، مسیر من و داشبورد پیشرفت
- نبض کنکور، کتابخانه و دستاوردها
- همراه تحصیلی با Route Handler سمت سرور
- طراحی RTL، Responsive، Dark Mode و حالت‌های Loading پایه

## نصب
```bash
npm install
npm run dev
```
سپس `http://localhost:3000` را باز کنید.

## Build
```bash
npm run build
npm start
```

## Environment Variables
فایل `.env.example` را به `.env.local` تبدیل کنید و مقادیر واقعی را فقط در محیط محلی یا تنظیمات Vercel وارد کنید:
- `DATABASE_URL`
- `AUTH_SECRET`
- `AI_API_KEY`
- `AI_PROVIDER`
- `NEXT_PUBLIC_APP_URL`

Secretها با `NEXT_PUBLIC_` تعریف نشده‌اند.

## GitHub
```bash
git init
git add .
git commit -m "Initial Rahpoo platform"
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

## Vercel
Repository را به Vercel متصل کنید. Framework را Next.js بگذارید یا اجازه دهید Vercel آن را تشخیص دهد. Build Command همان `npm run build` است. Environment Variables را از Project Settings > Environment Variables وارد کنید. این پروژه برای سرور دائمی طراحی نشده و Route Handlerهای آن با معماری Serverless سازگار هستند.

## Database
نسخه فعلی با Mock Data اجرا می‌شود. لایه‌های `lib/db` و `lib/server` برای اتصال بعدی به دیتابیس سازگار با Serverless در نظر گرفته شده‌اند. داده دائمی در نسخه production باید به دیتابیس خارجی منتقل شود، نه فایل‌سیستم سرور.

## Copyright
محتوای آموزشی، PDF، تصویر، ویدئو، مدل و Asset دارای محدودیت نشر در این مخزن قرار داده نشده است. برای منابع محدود، لینک منبع رسمی استفاده شود و مجوز Embed بررسی شود.
