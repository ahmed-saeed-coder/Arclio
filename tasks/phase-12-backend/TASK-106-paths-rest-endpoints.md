# TASK-106 — بناء مسارات ونقاط الـ API للمسارات التعليمية /api/v1/paths (Paths REST Endpoints)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مسارات ومتحكمات المسارات التعليمية `GET /api/v1/paths` وتفاصيل شجرة المناهج `GET /api/v1/paths/:id`.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير نقاط الـ API الخاصة باستعراض كتالوج المسارات وشجرة المناهج والوحدات والدروس.

## المتطلبات السابقة Prerequisites
- TASK-104

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-105, TASK-107

## الهدف Objective
إنشاء `server/src/routes/paths.ts` و `server/src/controllers/pathsController.ts`.

## المتطلبات Requirements
- بناء مسار `GET /api/v1/paths` لإرجاع قائمة المسارات التخصصية ومؤشرات الوقت والساعات.
- بناء مسار `GET /api/v1/paths/:id` لإرجاع تفاصيل المسار الكاملة متضمنة مصفوفة الوحدات والدروس المتداخلة.
- التعامل مع حالات الأخطاء وإرجاع 404 عند طلب مسار غير صالح.
- تسجيل الموجه داخل مسار الخادم الرئيسي.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/routes/paths.ts`
- `server/src/controllers/pathsController.ts`
- `server/src/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
تأكد من إرجاع بيانات شجرة المنهج بهيكل نظيف ومحدد لتسهيل رندرتها في الواجهة الأمامية.

## معايير القبول Acceptance Criteria
- [ ] مسارات الـ Paths تعمل بدقة وتعيد البيانات بصيغة JSON القياسية.
- [ ] الاستجابة تتضمن شجرة الوحدات والدروس التفصيلية للمسار.
- [ ] الأخطاء معالجة بأمان تام.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ `http://localhost:5000/api/v1/paths/frontend` وتأكد من استلام هيكل شجرة المنهج كاملاً.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مسارات المسارات التعليمية في خادم الـ REST API.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-106-paths-api-routes`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create learning paths api endpoints and curriculum hierarchy controllers`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
هندسة مسارات البيانات الهرمية المعقدة في خوادم Express.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-108
- TASK-109
