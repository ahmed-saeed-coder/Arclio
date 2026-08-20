# TASK-104 — تهيئة خادم Node.js / Express وإعداد المتغيرات البيئية (Setup Express Backend)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء هيكل مجلد الخادم `server/` وتهيئة خادم Express بـ TypeScript مع دعم CORS و JSON Middleware والمتغيرات البيئية `.env`.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تأسيس بيئة تشغيل الواجهة الخلفية المعيارية التي ستستقبل طلبات المتصفح وتتعامل مع قواعد البيانات.

## المتطلبات السابقة Prerequisites
- TASK-103

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-105, TASK-106

## الهدف Objective
تهيئة مشروع Node.js داخل مجلد `server/` وبناء نقطة الانطلاق `server/src/index.ts`.

## المتطلبات Requirements
- تهيئة الحزم الأساسية: `express`, `cors`, `dotenv`, `typescript`, `ts-node-dev`, `@types/node`, `@types/express`.
- كتابة كود الخادم في `server/src/index.ts` مع تفعيل وسيط `express.json()` و `cors()`.
- إنشاء نقطة فحص الصحة `GET /api/v1/health` التي تعيد `{ status: 'ok', uptime: ... }`.
- إعداد ملف المتغيرات البيئية `server/.env.example` مع المتغير `PORT=5000`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (خادم واجهة خلفية).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/package.json`
- `server/tsconfig.json`
- `server/src/index.ts`
- `server/.env.example`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
ممنوع رفع ملف `.env` الحقيقي على Git أبدًا؛ ارفع فقط `.env.example` واضف `.env` إلى `.gitignore`.

## معايير القبول Acceptance Criteria
- [ ] أمر `npm run dev` داخل مجلد server يشغل خادم التطوير بنجاح.
- [ ] نقطة النهاية `/api/v1/health` تعيد استجابة 200 OK بحالة السيرفر.
- [ ] دعم CORS و JSON parsing يعمل بكفاءة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح المتصفح أو أداة Postman/cURL واستدعِ `http://localhost:5000/api/v1/health` وتأكد من استلام JSON سليم.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تشغيل خادم Express وتأكيد استقباله للطلبات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-104-setup-express-backend`
- **رسالة الحفظ المقترحة (Commit)**: `feat: setup node express backend server with typescript and cors middleware`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء وتأسيس خوادم الويب بـ Node.js و Express وفهم الـ Middlewares والمتغيرات البيئية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-105
- TASK-106
- TASK-107
