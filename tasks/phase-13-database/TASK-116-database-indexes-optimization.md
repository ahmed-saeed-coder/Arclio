# TASK-116 — تحسين فهارس قاعدة البيانات وسرعة الاستعلامات (Database Indexes & Query Optimization)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إضافة فهارس برمجية (Database Indexes) على الحقول شائعة البحث والفلترة (difficulty, slug, userId) في schema.prisma.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تسريع استعلامات قاعدة البيانات وتجنب فحص الجدول بالكامل (Full Table Scan) عند تزايد حجم البيانات لآلاف المشاريع والطلاب.

## المتطلبات السابقة Prerequisites
- TASK-114
- TASK-115

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-117

## الهدف Objective
تحديث `schema.prisma` بإضافة سمات `@@index([difficulty])` و `@@index([userId, status])` وإنشاء ملف ترحيل تحسين الفهارس.

## المتطلبات Requirements
- إضافة فهارس على حقول: `Project.difficulty`, `Project.slug`, `Submission.userId`, `Submission.status`.
- إضافة فهرس مركب `@@index([userId, pathId])` على جدول تقدم الدروس لتسريع حساب التقدم.
- تشغيل أمر الترحيل: `npx prisma migrate dev --name add_performance_indexes`.
- توثيق الفهارس وأسباب إضافتها في مستند قاعدة البيانات.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/prisma/schema.prisma`
- `docs/database/DATABASE-SCHEMA.md`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
الفهارس البرمجية تعمل كفهرس الكتاب الأبجدي، فتمكن محرك قاعدة البيانات من القفز مباشرة للبيانات المطلوبة في أجزاء من الثانية.

## معايير القبول Acceptance Criteria
- [ ] الفهارس معرفة ومطبقة بنجاح في قاعدة البيانات.
- [ ] ملف الترحيل تم إنشاؤه بدون أي أخطاء.
- [ ] توثيق الفهارس مكتمل في ملف معمارية قاعدة البيانات.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص مخطط قاعدة البيانات في Prisma Studio وتأكد من تطبيق الفهارس على الجداول المحددة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تحسين فهارس قاعدة البيانات واعتمادها في الإنتاج.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-116-database-indexes`
- **رسالة الحفظ المقترحة (Commit)**: `feat: add performance database indexes for frequent query filters and relations`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم كيفية عمل فهارس قواعد البيانات Database Indexing وتحسين أداء الاستعلامات.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-117
- TASK-118
