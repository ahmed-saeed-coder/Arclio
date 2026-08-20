# TASK-132 — توليد شهادات التخرج والتحقق من صحتها عبر رابط (Certificate Generation & Verify)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
توليد شهادة إتمام المسار التعليمي بمعرف فريد UUID ورابط تحقق عام `/verify/:certificateId` قابل للمشاركة على LinkedIn.

## لماذا توجد هذه المهمة؟ Why This Task Exists
منح الطالب وثيقة إنجاز رقمية موثوقة يستطيع إضافتها لسيرته الذاتية ويثبت للشركات إتمامه للمسار ومتطلباته بنجاح.

## المتطلبات السابقة Prerequisites
- TASK-127

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-133, TASK-134

## الهدف Objective
إنشاء `src/pages/CertificatePage.tsx` ومسار التحقق `GET /api/v1/certificates/:id`.

## المتطلبات Requirements
- توليد سجل الشهادة في جدول `Certificate` عند وصول تقدم المسار لـ 100% مع توليد معرف فريد UUID وتاريخ الإصدار.
- بناء صفحة عرض الشهادة الفاخرة متضمنة اسم الطالب، اسم المسار، ختم المنصة، ومعرف التحقق الرسمي.
- إتاحة زر 'طباعة الشهادة / حفظ PDF' وزر 'إضافة إلى LinkedIn Profile ↗'.
- بناء صفحة التحقق العامة `/verify/:id` لتأكيد صحة الشهادة واسم الحاصل عليها.

## متطلبات واجهة المستخدم UI Requirements
شهادة رقمية أنيقة ذات حدود هندسية فاخرة وأختام توثيق رقمية عالية الجودة.

## متطلبات التجاوب Responsive Requirements
تتلاءم الشهادة مع مقاسات الطباعة القياسية A4 وتتجاوب على شاشات الهواتف.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين نصوص دلالية واضحة لبيانات الشهادة ورابط التحقق.

## الملفات ومناطق العمل Files / Areas
- `src/pages/CertificatePage.tsx`
- `server/src/controllers/certificateController.ts`
- `server/src/routes/certificates.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تضمين رابط التحقق المباشر في الشهادة يمنحها مصداقية تامة أمام مسؤولي التوظيف والشركات.

## معايير القبول Acceptance Criteria
- [ ] إتمام المسار يولد الشهادة تلقائيًا بمعرف فريد UUID.
- [ ] صفحة التحقق تؤكد صحة الشهادة وتاريخ إصدارها واسم الطالب.
- [ ] زر الطباعة ينسق الشهادة بدقة على مقاس A4 عبر CSS Print Styles.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح رابط التحقق للشهادة وتأكد من ظهور رسالة التأكيد الخضراء الرسمية وتفاصيل الإنجاز.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام توليد الشهادات الرقمية وصفحة التحقق العامة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-132-certificate-verification`
- **رسالة الحفظ المقترحة (Commit)**: `feat: generate verifiable digital completion certificates with public verification urls`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء أنظمة التوثيق الرقمي والشهادات القابلة للتحقق واستخدام CSS Print Styles للتصدير.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-133
- TASK-134
- TASK-135
