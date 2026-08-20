# TASK-114 — بناء طبقة الخدمات واستعلامات Prisma للمشاريع (Prisma Services for Projects)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء `projectService.ts` واستبدال البيانات الثابتة في الخادم باستعلامات Prisma الحقيقية من قاعدة البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ربط مسارات الـ API بمصدر الحقيقة الدائم (قاعدة البيانات) والتمهيد لعمليات التصفية والفرز والبحث على مستوى الـ SQL.

## المتطلبات السابقة Prerequisites
- TASK-112

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-115, TASK-116

## الهدف Objective
إنشاء `server/src/services/projectService.ts` وتحديث متحكمات المشاريع للاستعلام من Prisma.

## المتطلبات Requirements
- كتابة دوال الخدمة: `getAllProjects(filters)`, `getProjectById(id)`, `getFeaturedProjects()`.
- تطبيق شروط التصفية في استعلام Prisma باستخدام `where: { difficulty: ..., title: { contains: ... } }`.
- تطبيق الترتيب بواسطة `orderBy: { xpPoints: 'desc' }` أو `{ createdAt: 'desc' }`.
- تحديث `projectsController.ts` لاستدعاء طبقة الخدمة وإرجاع النتائج الحية.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/projectService.ts`
- `server/src/controllers/projectsController.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
عزل استعلامات قاعدة البيانات في طبقة الخدمات (Service Layer) يمنع تكديس كود قواعد البيانات داخل المتحكمات Controllers.

## معايير القبول Acceptance Criteria
- [ ] مسارات المشاريع تستعلم من قاعدة البيانات عبر Prisma بنجاح.
- [ ] الفلترة والبحث والترتيب تنفذ على مستوى قاعدة البيانات بكفاءة عالية.
- [ ] الاستجابة مطابقة لعقود الـ REST API المعتمدة.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ مسار المشاريع وافحص استعلامات SQL المنفذة في كونسول Prisma وتأكد من استلام البيانات من قاعدة البيانات.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال ربط مسارات المشاريع بقاعدة البيانات عبر طبقة الخدمات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-114-prisma-projects-service`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build database service layer for projects using prisma queries and filters`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان بناء طبقة الخدمات Service Layer وتنفيذ استعلامات قواعد البيانات المتقدمة بـ Prisma.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-115
- TASK-116
- TASK-123
