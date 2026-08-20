# TASK-145 — ضبط حدود استهلاك الـ API ورؤوس الحماية Helmet (Rate Limiting & Helmet Headers)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 19 — تعزيز الأمان وحماية البيانات (Application Security Hardening)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تثبيت `helmet` لضبط رؤوس أمان الـ HTTP (CSP, HSTS, X-Frame-Options) وتثبيت `express-rate-limit` لمنع هجمات حجب الخدمة والتخمين Brute Force.

## لماذا توجد هذه المهمة؟ Why This Task Exists
حماية السيرفر من هجمات إغراق الطلبات DDoS وحماية المتصفح من هجمات التضمين الخبيث Clickjacking.

## المتطلبات السابقة Prerequisites
- TASK-143

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-146

## الهدف Objective
تحديث `server/src/index.ts` وتفعيل وسيطي Helmet و Rate Limiter.

## المتطلبات Requirements
- تثبيت حزمتي `helmet` و `express-rate-limit` في خادم Express.
- تفعيل `app.use(helmet())` لضبط رؤوس الأمان التلقائية مثل `X-Content-Type-Options: nosniff` و `X-Frame-Options: DENY`.
- ضبط محدد استهلاك عام: أقصى حد 100 طلب لكل 15 دقيقة لكل عنوان IP.
- ضبط محدد استهلاك صارم لمسارات تسجيل الدخول: أقصى حد 5 محاولات لكل 15 دقيقة لمنع تخمين كلمات المرور (Brute Force Protection).

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/middleware/security.ts`
- `server/src/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
رؤوس أمان الـ HTTP هي إعدادات قياسية يقرأها المتصفح لحماية المستخدم تلقائيًا من ثغرات الحقن والتضمين.

## معايير القبول Acceptance Criteria
- [ ] رؤوس الحماية Helmet مطبقة وتظهر في استجابات الـ HTTP Headers.
- [ ] تجاوز 5 محاولات تسجيل دخول يعيد كود الحالة `429 Too Many Requests` مع رسالة انتظار.
- [ ] الطلبات العادية تمر بسلاسة دون تأخير.

## الاختبار والتحقق اليدوي Manual Testing
1. أرسل 6 طلبات تسجيل دخول سريعة وتأكد من استلام كود 429 ورسالة 'يرجى الانتظار والمحاولة لاحقًا'.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تطبيق وسائط Helmet و Rate Limiting في خادم Express.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-145-rate-limiting-helmet`
- **رسالة الحفظ المقترحة (Commit)**: `feat: apply express rate limiting and helmet http security headers`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم تأمين خوادم الويب وتطبيق رؤوس الأمان HTTP Headers والوقاية من هجمات الـ Brute Force.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-146
- TASK-147
