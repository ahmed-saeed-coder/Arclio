# TASK-110 — كتابة اختبارات التكامل للـ REST API عبر Supertest (REST API Integration Tests)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تهيئة Supertest و Vitest/Jest لكتابة اختبارات تكاملية تفحص مسارات الـ API وأكواد الحالة وصيغ الاستجابة تلقائيًا.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التأكد من أن نقاط الـ API تعمل بدقة وفق العقود المحددة وتستجيب للأخطاء والحالات الطبيعية دون انكسار.

## المتطلبات السابقة Prerequisites
- TASK-108
- TASK-109

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-111

## الهدف Objective
إنشاء `server/tests/projects.test.ts` و `server/tests/paths.test.ts` وكتابة اختبارات التكامل.

## المتطلبات Requirements
- تثبيت حزمتي `supertest` و `@types/supertest` وإعداد سكريبت الاختبار في `server/package.json`.
- كتابة اختبار لمسار `GET /api/v1/projects` يتأكد من استلام كود الحالة 200 ومصفوفة مشاريع صالحة.
- كتابة اختبار لمسار `GET /api/v1/projects/invalid-id` يتأكد من استلام كود الحالة 404.
- كتابة اختبار يفحص رفض المدخلات غير الصالحة عبر Zod بكود 400 Bad Request.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (اختبارات آلية في الطرفية).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/tests/projects.test.ts`
- `server/tests/paths.test.ts`
- `server/package.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
اختبارات الـ Supertest تحاكي طلبات الـ HTTP الحقيقية وتختبر عمل الـ Middlewares والـ Controllers معًا كنظام متكامل.

## معايير القبول Acceptance Criteria
- [ ] أمر `npm run test` داخل مجلد server ينفذ اختبارات الـ API ويجتازها بنجاح 100%.
- [ ] الاختبارات تغطي حالات النجاح وحالات الأخطاء (200, 400, 404).
- [ ] سيرفر الاختبار يغلق اتصالاته بأمان بعد انتهاء الفحص.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `npm test` داخل مجلد server وشاهد نتائج فحص نقاط الـ API في الطرفية.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال جناح اختبارات التكامل الآلية لخادم الـ REST API.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `test/task-110-api-integration-tests`
- **رسالة الحفظ المقترحة (Commit)**: `test: setup supertest integration test suite for backend rest api endpoints`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان كتابة اختبارات التكامل للواجهات الخلفية Integration Testing لأطر الـ REST API.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-111
- TASK-112
