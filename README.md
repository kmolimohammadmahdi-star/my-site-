# Personal Brand — وب‌سایت شخصی

سایت کاملاً استاتیک (HTML / CSS / JS خالص)، دوزبانه (فارسی RTL و انگلیسی LTR).
A fully static, bilingual (Persian RTL / English LTR) personal website.

## ساختار پروژه / Structure

```
index.html  about.html  interests.html  skills.html
projects.html  notes.html  contact.html
css/style.css        استایل مشترک و پالت رنگ (متغیرهای :root)
js/i18n.js           دیکشنری فارسی/انگلیسی
js/main.js           تغییر زبان، منوی موبایل، فیلتر یادداشت‌ها، انیمیشن
assets/emblem.png    تصویر نماد شخصی (فایل اصلی، بدون تغییر)
```

## اجرا روی کامپیوتر / Run locally

ساده‌ترین راه: فایل `index.html` را در مرورگر باز کنید. یا با سرور محلی:

```bash
cd personal-brand
python3 -m http.server 8000
# سپس باز کنید: http://localhost:8000
```

روی گوشی (Termux): همان دستور بالا و باز کردن `http://localhost:8000`.

## انتشار / Publish (رایگان)

**GitHub Pages**
1. یک مخزن بسازید (مثلاً `personal-brand`) و همه‌ی فایل‌ها را در ریشه‌ی آن آپلود کنید.
2. Settings ← Pages ← Source: `Deploy from a branch` ← شاخه‌ی `main` و پوشه‌ی `/ (root)`.
3. بعد از چند دقیقه سایت در `https://<username>.github.io/personal-brand/` فعال می‌شود.

**Netlify / Cloudflare Pages**: پوشه‌ی پروژه را بکشید و رها کنید (Drag & Drop).

## توسعه / Extending

- **متن جدید**: کلید را در `js/i18n.js` (هر دو زبان) اضافه کنید و در HTML از `data-i18n="کلید"` استفاده کنید.
- **یادداشت جدید**: در `notes.html` یک `<article class="note" data-cat="history|tech|learn|ideas">` اضافه کنید (می‌توانید `<img>` هم بگذارید).
- **پروژه‌ی جدید**: در `projects.html` یک `<article class="project">` اضافه کنید.
- **صفحه‌ی جدید**: یکی از صفحات را کپی کنید و لینکش را به `<ul class="nav-links">` همه‌ی صفحات بیفزایید.
- **رنگ‌ها**: در بالای `css/style.css` در بلوک `:root`.

## نکات

- فونت‌های Vazirmatn و Cormorant Garamond از Google Fonts بارگذاری می‌شوند (نیازمند اینترنت)؛ بدون اینترنت، فونت‌های جایگزین سیستم نمایش داده می‌شود.
- زبان انتخابی کاربر در مرورگر ذخیره می‌شود.
- لینک Gift Hub: https://github.com/kmolimohammadmahdi-star
