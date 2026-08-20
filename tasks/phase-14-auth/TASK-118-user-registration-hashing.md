# TASK-118 — بناء تسجيل المستخدمين وتشفير كلمات المرور بـ Argon2 (User Registration & Hashing)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 14 — توثيق المستخدمين والأمان والصلاحيات (Auth & RBAC)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مسار `POST /api/v1/auth/register` وتشفير كلمات المرور باستخدام خوارزمية Argon2 أو Bcrypt وحفظ المستخدم في قاعدة البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المستخدمين الجدد من إنشاء حسابات آمنة مع ضمان استحالة استرجاع كلمة المرور الأصلية حتى لو تسربت قاعدة البيانات.

## المتطلبات السابقة Prerequisites
- TASK-117

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-119, TASK-120

## الهدف Objective
إنشاء `server/src/controllers/authController.ts` وتطبيق تشفير كلمات المرور وفحص البريد المكرر.

## المتطلبات Requirements
- تثبيت حزمة `argon2` أو `bcrypt` والتحقق من قوة كلمة المرور (8 أحرف على الأقل، أرقام ورموز) عبر مخطط Zod.
- فحص عدم وجود البريد مسبقًا في قاعدة البيانات `prisma.user.findUnique({ where: { email } })` وإرجاع 409 Conflict إذا كان مكررًا.
- تشفير كلمة المرور: `const passwordHash = await argon2.hash(password)`.
- إنشاء سجل المستخدم في قاعدة البيانات وإرجاع بيانات المستخدم الأساسية (بدون حقل كلمة المرور).

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/controllers/authController.ts`
- `server/src/routes/auth.ts`
- `server/src/schemas/authSchema.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
احرص دائمًا على حذف حقل `passwordHash` من كائن الاستجابة المعادة للمستخدم لمنع تسريبه نهائيًا.

## معايير القبول Acceptance Criteria
- [ ] مسار التسجيل ينشئ الحسابات بنجاح ويشفر كلمات المرور بـ Argon2.
- [ ] البريد الإلكتروني المكرر يتم رفضه بكود 409 مناسب ورسالة واضحة.
- [ ] كلمات المرور الضعيفة يتم رفضها عبر وسيط التحقق Zod.

## الاختبار والتحقق اليدوي Manual Testing
1. أرسل طلب تسجيل مستخدم جديد وتأكد من حفظه في قاعدة البيانات بكلمة مرور مشفرة تمامًا تبدأ بـ `$argon2id$`.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مسار تسجيل المستخدمين وتشفير كلمات المرور بأعلى معايير الأمان.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-118-user-registration`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement user registration with argon2 password hashing and duplicate checks`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان تشفير كلمات المرور Password Hashing وحماية خصوصية بيانات المستخدمين.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-119
- TASK-120
- TASK-121
