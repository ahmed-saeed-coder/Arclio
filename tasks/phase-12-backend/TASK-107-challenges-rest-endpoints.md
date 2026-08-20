# TASK-107 — بناء مسارات ونقاط الـ API للتحديات البرمجية (Challenges REST Endpoints)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مسارات `GET /api/v1/challenges` واسترجاع تفاصيل المسألة وحالات الاختبار `GET /api/v1/challenges/:id`.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تغذية محرر التحديات التفاعلي بنصوص المسائل البرمجية وشروط الفحص الآلي من الخادم.

## المتطلبات السابقة Prerequisites
- TASK-104

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-108, TASK-109

## الهدف Objective
إنشاء `server/src/routes/challenges.ts` و `server/src/controllers/challengesController.ts`.

## المتطلبات Requirements
- بناء مسار استعراض التحديات وتصفيتها حسب الفئة: `?category=dom&difficulty=beginner`.
- بناء مسار تفاصيل التحدي متضمنًا الكود الأولي Starter Code وشروط الاختبار التلقائي Test Suite Rules.
- تسجيل الموجه داخل مسار الخادم الرئيسي.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/routes/challenges.ts`
- `server/src/controllers/challengesController.ts`
- `server/src/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
فصل التحديات حسب الفئات والتصنيفات يسهل استدعاء التحديات اليومية المخصصة للمتعلم.

## معايير القبول Acceptance Criteria
- [ ] مسارات التحديات تعمل وتدعم التصفية بالفئات.
- [ ] تفاصيل التحدي تعيد الكود الابتدائي وشروط الاختبار كاملة.
- [ ] لا توجد أخطاء في مسارات الخادم.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ `http://localhost:5000/api/v1/challenges` وافحص استجابة التحديات ونقاط الـ XP.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مسارات التحديات البرمجية في خادم الـ API.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-107-challenges-api-routes`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement interactive challenges rest api routes and starter code controllers`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء نقاط النهاية المخصصة للألعاب التعليمية Gamified Learning Endpoints.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-108
- TASK-109
