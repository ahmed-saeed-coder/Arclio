# TASK-112 — تهيئة Prisma ORM وإنشاء ملفات الترحيل الأولى (Setup Prisma ORM & Migrations)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تثبيت Prisma ORM وكتابة مخطط `schema.prisma` وإنشاء أول ملف ترحيل Migration لقاعدة بيانات PostgreSQL أو SQLite المحلية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير طبقة وصول للبيانات آمنة ومكتوبة بـ TypeScript بالكامل (Type-Safe Database Access) مع تتبع سجل التغييرات في الجداول.

## المتطلبات السابقة Prerequisites
- TASK-111

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-113, TASK-114

## الهدف Objective
تهيئة Prisma داخل مجلد `server/prisma/` وإنشاء الجداول في قاعدة البيانات المحلية.

## المتطلبات Requirements
- تثبيت الحزم: `prisma` و `@prisma/client` في مجلد server.
- كتابة نماذج البيانات في `server/prisma/schema.prisma` مطابقة لمخطط الـ ERD المعتمد.
- تشغيل أمر الترحيل الأول: `npx prisma migrate dev --name init_schema` وإنشاء الجداول.
- توليد عميل Prisma Client عبر `npx prisma generate`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/prisma/schema.prisma`
- `server/src/lib/prisma.ts`
- `server/.env.example`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
استخدم ملف وسيط `server/src/lib/prisma.ts` لإنشاء نسخة واحدة Global Singleton من Prisma Client لمنع فتح اتصالات زائدة.

## معايير القبول Acceptance Criteria
- [ ] ملف schema.prisma يحتوي على كافة النماذج والعلاقات بدقة.
- [ ] ملفات الترحيل Migrations تم إنشاؤها بنجاح في مجلد prisma/migrations/.
- [ ] عميل Prisma Client مولد وجاهز للاستعلامات البرمجية.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح أداة Prisma Studio عبر `npx prisma studio` وتأكد من استعراض الجداول المنشأة في المتصفح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تهيئة Prisma ORM وإنشاء الجداول بنجاح في قاعدة البيانات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-112-prisma-migrations-setup`
- **رسالة الحفظ المقترحة (Commit)**: `feat: setup prisma orm and generate initial relational database migrations`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام Prisma ORM وإدارة ترحيلات قواعد البيانات Database Migrations.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-113
- TASK-114
- TASK-115
