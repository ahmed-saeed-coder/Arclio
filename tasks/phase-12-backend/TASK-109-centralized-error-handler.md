# TASK-109 — بناء معالج الأخطاء المركزي ومعايير HTTP Status (Centralized Error Handler)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
بناء فئة أخطاء مخصصة `AppError` ووسيط معالجة أخطاء مركزي `errorHandler.ts` لصيد الأخطاء ومنع انهيار الخادم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان عدم تسريب تفاصيل تقنية حساسة (Stack Traces) للمستخدمين وتقديم استجابات أخطاء موحدة ومفهومة.

## المتطلبات السابقة Prerequisites
- TASK-108

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-110

## الهدف Objective
إنشاء `server/src/utils/AppError.ts` و `server/src/middleware/errorHandler.ts`.

## المتطلبات Requirements
- بناء فئة `class AppError extends Error` متضمنة `statusCode` و `isOperational`.
- بناء وسيط معالجة الأخطاء ذو المعاملات الأربعة `(err, req, res, next)` في Express.
- إخفاء تفاصيل الـ Stack Trace في بيئة الإنتاج وإظهارها فقط في بيئة التطوير `NODE_ENV === 'development'`.
- معالجة أخطاء الـ 404 للمسارات غير المعرفة عبر وسيط `notFoundHandler`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/utils/AppError.ts`
- `server/src/middleware/errorHandler.ts`
- `server/src/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
في Express، وسيط معالجة الأخطاء يجب أن يحتوي على 4 معاملات بالضبط `(err, req, res, next)` ليتعرف عليه المحرك كـ Error Middleware.

## معايير القبول Acceptance Criteria
- [ ] جميع الأخطاء غير المتوقعة يتم التقاطها بسلاسة دون توقف الخادم.
- [ ] الاستجابة تتبع الهيكل الموحد `{ success: false, error: { message: ... } }`.
- [ ] المسارات غير المعرفة تعيد 404 موحد.

## الاختبار والتحقق اليدوي Manual Testing
1. ارمِ خطأ متعمد في أحد المسارات وتأكد من استلام رد JSON نظيف بدون انهيار السيرفر.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد وسيط معالجة الأخطاء المركزي في خادم Express.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-109-centralized-error-handler`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build centralized express error handling middleware and custom apperror class`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم هندسة معالجة الأخطاء وتصميم الـ Error Handling Middlewares الاحترافية في Node.js.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-110
- TASK-111
