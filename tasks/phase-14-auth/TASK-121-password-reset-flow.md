# TASK-121 — بناء مسار استعادة كلمة المرور وتأكيد الإيميل (Password Reset & Email Flow)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 14 — توثيق المستخدمين والأمان والصلاحيات (Auth & RBAC)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء دورة استعادة كلمة المرور عبر توليد رموز تحقق مؤقتة مشفرة (Reset Tokens) مع تاريخ انتهاء 15 دقيقة ومحاكاة إرسال الإيميل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مساعدة المطورين على استعادة حساباتهم في حال نسيان كلمة المرور بطريقة آمنة وموثوقة.

## المتطلبات السابقة Prerequisites
- TASK-119

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-122

## الهدف Objective
إنشاء `server/src/controllers/passwordController.ts` وبناء مساري طلب الاستعادة وتعيين كلمة المرور الجديدة.

## المتطلبات Requirements
- بناء مسار `POST /api/v1/auth/forgot-password` لتوليد رمز عشوائي آمن `crypto.randomBytes(32).toString('hex')` وتخزين تجزئته مع تاريخ انتهاء `expiresAt`.
- محاكاة إرسال البريد الإلكتروني أو ربطه بخدمة بريد تجريبية (مثل Nodemailer / Resend).
- بناء مسار `POST /api/v1/auth/reset-password` للتحقق من صلاحية الرمز وتحديث كلمة المرور الجديدة وإلغاء الرمز.
- إرجاع رسالة نجاح موحدة لمنع هجمات تخمين وجود البريد الإلكتروني (User Enumeration Defense).

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/controllers/passwordController.ts`
- `server/src/routes/auth.ts`
- `server/src/services/emailService.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
لا تخبر المستخدم أبدًا 'هذا البريد غير مسجل لدينا'؛ أظهر دائمًا 'إذا كان البريد مسجلاً، فستصلك رسالة الاستعادة' لحماية خصوصية المستخدمين.

## معايير القبول Acceptance Criteria
- [ ] رموز استعادة كلمة المرور مؤقتة وتلغى تلقائيًا بعد 15 دقيقة أو بعد أول استخدام.
- [ ] تحديث كلمة المرور يشفر القيمة الجديدة بـ Argon2 بنجاح.
- [ ] الاستجابات تحمي من هجمات تخمين البريد User Enumeration.

## الاختبار والتحقق اليدوي Manual Testing
1. اطلب استعادة كلمة مرور لبريد تجريبي وتأكد من طباعة رابط الاستعادة في الكونسول وتحديث كلمة المرور بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مسار استعادة كلمة المرور الآمن في الخادم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-121-password-reset`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement secure timed token password reset and email recovery flow`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم دورة استعادة الحسابات Password Recovery وحماية الأنظمة من هجمات التخمين.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-122
- TASK-123
