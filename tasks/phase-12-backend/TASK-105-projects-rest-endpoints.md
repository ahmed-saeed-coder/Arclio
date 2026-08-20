# TASK-105 — بناء مسارات ونقاط الـ API للمشاريع /api/v1/projects (Projects REST Endpoints)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء الموجه `projectsRouter.ts` والمتحكم `projectsController.ts` لدعم استرجاع قائمة المشاريع والتصفية والتفاصيل بالمعرف.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير نقاط الـ API الحقيقية التي تخدم صفحة استكشاف المشاريع وتفاصيل المشروع في الواجهة الأمامية.

## المتطلبات السابقة Prerequisites
- TASK-104

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-106, TASK-107

## الهدف Objective
إنشاء `server/src/routes/projects.ts` و `server/src/controllers/projectsController.ts`.

## المتطلبات Requirements
- بناء مسار `GET /api/v1/projects` لدعم معاملات التصفية والاستعلام: `?difficulty=...&search=...&sort=...`.
- بناء مسار `GET /api/v1/projects/:id` لاسترجاع تفاصيل مشروع معين أو إرجاع خطأ 404 إذا لم يتم العثور عليه.
- فصل منطق المتحكمات Controllers عن المسارات Routes للحفاظ على نظافة الكود.
- تسجيل الموجه داخل مسار الخادم الرئيسي في `server/src/index.ts`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/routes/projects.ts`
- `server/src/controllers/projectsController.ts`
- `server/src/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
فصل المتحكمات (Controllers) عن تعريف المسارات (Routes) هو معيار تنظيمي أساسي في هندسة الباك إند.

## معايير القبول Acceptance Criteria
- [ ] مسار استرجاع المشاريع يعمل بنجاح ويدعم الفلترة بالمعاملات Query Params.
- [ ] مسار استرجاع تفاصيل المشروع يعيد بيانات المشروع المحدد بدقة.
- [ ] طلب معرف غير موجود يعيد كود الحالة 404 Not Found مع رسالة خطأ واضحة.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ `http://localhost:5000/api/v1/projects?difficulty=beginner` وتأكد من استلام المشاريع المصفاة بصيغة JSON.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال وتكامل مسارات مشاريع الـ REST API في الخادم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-105-projects-api-routes`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement projects rest api routes and controllers with query filtering`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مسارات الـ REST API في Express والتعامل مع req.params و req.query.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-108
- TASK-109
