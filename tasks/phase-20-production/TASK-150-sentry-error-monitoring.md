# TASK-150 — تفعيل مراقبة الأداء وتتبع الأخطاء بـ Sentry (Health Monitoring & Sentry Tracking)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 20 — عمليات النشر والإنتاج السحابي (Production DevOps & Deployment)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
دمج منصة Sentry لمراقبة الأخطاء في الوقت الفعلي في الواجهة والخادم وتتبع صحة النظام (Health Check Uptime Monitoring).

## لماذا توجد هذه المهمة؟ Why This Task Exists
اكتشاف أي خطأ برمجي أو انهيار يصيب أي مستخدم فور حدوثه مع إرسال تنبيه للمهندسين بتفاصيل السطر البرمجي لإصلاحه فورا.

## المتطلبات السابقة Prerequisites
- TASK-149

## إمكانية العمل بالتوازي Parallel Tasks
لا توجد مهام متوازية مباشرة (مهمة تسلسلية حرجة)

## الهدف Objective
إنشاء `src/utils/sentry.ts` و `server/src/utils/sentry.ts` وتوثيق إرشادات المراقبة في `docs/devops/MONITORING.md`.

## المتطلبات Requirements
- تثبيت وإعداد حزمتي `@sentry/react` و `@sentry/node` لربط التطبيق بمشروع Sentry.
- التقاط الأخطاء غير المعالجة Unhandled Exceptions تلقائيًا وإرسالها مع تفاصيل المتصفح دون تسريب بيانات المستخدمين الخاصة.
- بناء نقطة فحص حيوية النظام `GET /api/v1/health/deep` تفحص اتصال قاعدة البيانات وسرعة الاستجابة.
- توثيق إجراءات المراقبة وتنبيهات الطوارئ Incident Response في `docs/devops/MONITORING.md`.

## متطلبات واجهة المستخدم UI Requirements
واجهة معالجة الأخطاء الودية Error Boundary تعرض رسالة اعتذار أنيقة وزر للعودة للرئيسية عند حدوث أي عطل مفاجئ.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
تنبيه دلالي في واجهة الـ Error Boundary.

## الملفات ومناطق العمل Files / Areas
- `src/utils/sentry.ts`
- `src/components/ErrorBoundary.tsx`
- `server/src/utils/sentry.ts`
- `docs/devops/MONITORING.md`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
مراقبة الأخطاء عبر Sentry هي عين الفريق على الإنتاج وتضمن معرفة المشكلة وإصلاحها قبل أن يشتكي منها المستخدم.

## معايير القبول Acceptance Criteria
- [ ] مكتبة Sentry مدمجة وتلتقط الأخطاء في الواجهة والخادم بأمان.
- [ ] مكوّن Error Boundary يمنع الشاشة البيضاء ويعرض رسالة ودودة.
- [ ] نقطة فحص الصحة Deep Health Check تفحص قاعدة البيانات والخادم بدقة.
- [ ] اكتملت جميع مهام خارطة طريق منصة ARCLIO الـ 150 بنجاح تميز واحترافية!

## الاختبار والتحقق اليدوي Manual Testing
1. فجر خطأ تجريبي متعمد وتأكد من التقاطه فورًا في لوحة تحكم Sentry وظهور واجهة الـ Error Boundary الودية للمستخدم.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال المهمة الختامية رقم 150 وخاتمة خارطة طريق منصة ARCLIO التأسيسية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `devops/task-150-sentry-monitoring`
- **رسالة الحفظ المقترحة (Commit)**: `devops: implement sentry error tracking health monitoring and incident response runbook`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
احتراف هندسة المراقبة والتتبع Application Observability وإدارة استقرار النظم الحية في الإنتاج.

## المهام التالية المقترحة Next Recommended Tasks
- لا توجد مهام تالية (المهمة الختامية للمنصة)
