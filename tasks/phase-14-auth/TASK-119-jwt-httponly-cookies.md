# TASK-119 — إدارة الجلسات باستخدام رموز JWT وكوكيز HttpOnly (JWT & HttpOnly Cookies Session)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 14 — توثيق المستخدمين والأمان والصلاحيات (Auth & RBAC)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مسار تسجيل الدخول `POST /api/v1/auth/login` وتوليد رمز JWT مشفر وإرساله كـ Cookie آمنة `HttpOnly; SameSite=Strict`.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التحقق من هوية المستخدم وإنشاء جلسة تصفح آمنة ومحمية لا يمكن قراءتها أو التلاعب بها عبر JavaScript في المتصفح.

## المتطلبات السابقة Prerequisites
- TASK-118

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-120, TASK-121

## الهدف Objective
إنشاء `server/src/middleware/authMiddleware.ts` ودوال توليد وفحص رموز JWT.

## المتطلبات Requirements
- تثبيت حزمتي `jsonwebtoken` و `cookie-parser` مع تعريف مفتاح التشفير `JWT_SECRET` في المتغيرات البيئية.
- التحقق من صحة كلمة المرور المدخلة عبر `argon2.verify(user.passwordHash, password)` وإرجاع 401 Unauthorized إذا كانت خاطئة.
- توليد رمز JWT وإرفاقه في استجابة الـ Cookie بخصائص: `httpOnly: true, secure: true, sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000`.
- بناء مسار الخروج `POST /api/v1/auth/logout` الذي يمسح الكوكي وينظف الجلسة.
- بناء مسار `GET /api/v1/auth/me` لإرجاع بيانات المستخدم صاحب الجلسة الحالية.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/controllers/authController.ts`
- `server/src/middleware/authMiddleware.ts`
- `server/src/routes/auth.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
خاصية `httpOnly: true` تمنع كود JavaScript من الوصول للـ Cookie عبر `document.cookie` مما يحمي المستخدم تمامًا من هجمات الـ XSS Token Theft.

## معايير القبول Acceptance Criteria
- [ ] تسجيل الدخول الصحيح يولد JWT ويرسله كـ HttpOnly Cookie.
- [ ] كلمات المرور الخاطئة يتم رفضها بكود 401 موحد.
- [ ] مسار /auth/me يعيد بيانات المستخدم المسجل بدقة عبر قراءة الكوكي.
- [ ] تسجيل الخروج يمسح الكوكي بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. سجل الدخول بحساب صحيح وافحص تبويب Application > Cookies في DevTools وتأكد من وجود علامة صح على خانة HttpOnly.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام إدارة الجلسات والمصادقة الآمنة عبر HttpOnly Cookies.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-119-jwt-cookie-auth`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement secure session management using jwt tokens and httponly cookies`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان التعامل مع رموز JWT وإدارة الكوكيز الآمنة HttpOnly Cookies في خوادم الويب.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-120
- TASK-121
- TASK-122
