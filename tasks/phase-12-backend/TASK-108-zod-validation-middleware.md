# TASK-108 — بناء وسيط التحقق من المدخلات عبر Zod (Request Validation Middleware with Zod)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 12 — أساسيات الواجهة الخلفية والـ REST API (Backend Foundations)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
استخدام مكتبة Zod لتعريف مخططات التحقق من جسم الطلب Request Body والمعاملات Params وحماية السيرفر من البيانات الخبيثة أو الناقصة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التحقق الصارم من مدخلات المستخدمين في جانب الخادم هو خط الدفاع الأمني الأول ضد البيانات التالفة والهجمات.

## المتطلبات السابقة Prerequisites
- TASK-105
- TASK-106

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-109, TASK-110

## الهدف Objective
إنشاء `server/src/middleware/validate.ts` وبناء مخططات التحقق لنماذج التسليم والبحث.

## المتطلبات Requirements
- تثبيت مكتبة `zod` وبناء وسيط عام `validate(schema)` يفحص `req.body`, `req.query`, `req.params`.
- بناء مخطط التحقق لنماذج التسليم `submissionSchema` (رابط GitHub صالح، رابط Demo صالح، نص الملاحظات).
- إرجاع كود الحالة `400 Bad Request` مع مصفوفة رسائل أخطاء تفصيلية ومفهومة عند فشل التحقق.
- تطبيق الوسيط على مسارات الإرسال والتسليم.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/middleware/validate.ts`
- `server/src/schemas/submissionSchema.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
مكتبة Zod توفر ميزة الـ Type Inference لاستخراج أنواع الـ TypeScript تلقائيًا من المخطط عبر `z.infer<typeof schema>`.

## معايير القبول Acceptance Criteria
- [ ] الوسيط يعترض أي طلب يحتوي على بيانات غير مطابقة للمخطط فورًا.
- [ ] رسائل الخطأ توضح الحقل غير الصالح وسبب الرفض بدقة.
- [ ] الطلبات السليمة تمر بنجاح إلى المتحكم التالي `next()`.

## الاختبار والتحقق اليدوي Manual Testing
1. أرسل طلب POST ببيانات ناقصة وتأكد من استلام رد 400 مع رسائل الخطأ التفصيلية من Zod.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال وتطبيق وسيط التحقق من المدخلات بـ Zod في مسارات الخادم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-108-zod-validation-middleware`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create request validation middleware using zod schemas and type inference`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان التحقق من صحة البيانات بـ Zod في خوادم Node.js وتأمين نقاط الـ API.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-109
- TASK-110
- TASK-111
