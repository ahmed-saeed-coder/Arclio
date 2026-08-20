# TASK-115 — بناء استعلامات تتبع تقدم الطالب والتسليمات (User Progress Relational Queries)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء دوال استعلامات تتبع تقدم الطالب في الدروس وحساب نسبة إنجاز المسارات وتسجيل نقاط الخبرة في قاعدة البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
نقل منطق تتبع التقدم من مجرد LocalStorage مؤقت إلى حساب دائم ومحمي في قاعدة بيانات المنصة المركزية.

## المتطلبات السابقة Prerequisites
- TASK-114

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-116

## الهدف Objective
إنشاء `server/src/services/progressService.ts` وبناء استعلامات التقدم والتسليمات العلائقية.

## المتطلبات Requirements
- كتابة دالة `markLessonComplete(userId, lessonId)` التي تحفظ إنجاز الدرس وتحدث نقاط الـ XP للمستخدم في معاملة واحدة Transaction.
- كتابة دالة `getUserPathProgress(userId, pathId)` لحساب النسبة المئوية استنادًا للجداول العلائقية.
- كتابة دالة `submitProject(userId, projectId, submissionData)` لحفظ تسليم المشروع وتغيير حالته إلى `SUBMITTED`.
- استخدام Prisma Transactions `prisma.$transaction([...])` لضمان سلامة المعاملات المالية والنقاط.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/progressService.ts`
- `server/src/controllers/progressController.ts`
- `server/src/routes/progress.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
استخدام معاملات الـ Database Transactions يضمن أنه في حال فشل أي خطوة، يتم التراجع عن كامل العملية وتجنب البيانات التالفة (ACID).

## معايير القبول Acceptance Criteria
- [ ] حفظ إنجاز الدروس وتحديث نقاط الـ XP ينفذ في معاملة ذرية Transaction واحدة.
- [ ] حساب نسب التقدم يعتمد على العلاقات الفعلية في قاعدة البيانات.
- [ ] تسجيل تسليمات المشاريع يعمل بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر مسار إتمام درس وتأكد في قاعدة البيانات من إضافة سجل الإنجاز وزيادة رصيد نقاط الـ XP للمستخدم.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال استعلامات وخدمات تتبع التقدم في الواجهة الخلفية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-115-user-progress-service`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement relational queries and transactions for user progress and submissions`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم معاملات قواعد البيانات Database Transactions وضمان سلامة البيانات المعقدة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-116
- TASK-123
