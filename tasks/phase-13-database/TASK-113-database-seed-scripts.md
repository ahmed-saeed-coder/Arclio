# TASK-113 — كتابة سكربت بذر البيانات الأولية للمشاريع والمسارات (Database Seed Scripts)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
كتابة سكربت `server/prisma/seed.ts` لحقن بيانات المشاريع والمسارات والدروس والتحديات تلقائيًا في قاعدة البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تجهيز قاعدة البيانات بمحتوى واقعي جاهز بضغطة زر واحدة لتسهيل عمل الفريق وتطوير الميزات دون إدخال البيانات يدويًا.

## المتطلبات السابقة Prerequisites
- TASK-112

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-114, TASK-115

## الهدف Objective
إنشاء `server/prisma/seed.ts` وربطه بأمر 'prisma': { 'seed': 'ts-node prisma/seed.ts' }.

## المتطلبات Requirements
- قراءة بيانات المشاريع والمسارات من ملفات الـ JSON وإدراجها في قاعدة البيانات عبر `prisma.project.createMany()` و `prisma.learningPath.create()`.
- إدراج مستخدم تجريبي ومشرف تجريبي بكلمات مرور مشفرة للاختبار.
- تنظيف الجداول السابقة قبل البذر لضمان عدم تكرار المعرفات.
- تشغيل أمر البذر بنجاح: `npx prisma db seed`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/prisma/seed.ts`
- `server/package.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
سكربت البذر يجب أن يكون متكرر التنفيذ (Idempotent) بحيث يمكن تشغيله 100 مرة دون أن يسبب أخطاء تكرار مفاتيح.

## معايير القبول Acceptance Criteria
- [ ] أمر `npx prisma db seed` يملأ قاعدة البيانات بكافة المشاريع والمسارات بنجاح.
- [ ] البيانات تظهر كاملة في Prisma Studio.
- [ ] السكربت خالي من أي أخطاء برمجية.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `npx prisma db seed` وافحص الجداول في Prisma Studio وتأكد من وجود السجلات.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال سكربت بذر البيانات الأولية واعتماده في المشروع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-113-database-seed-scripts`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement automated database seed scripts for projects and curriculum`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم بذر قواعد البيانات Database Seeding وأهميته في بيئات التطوير والاختبارات الآلية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-114
- TASK-115
