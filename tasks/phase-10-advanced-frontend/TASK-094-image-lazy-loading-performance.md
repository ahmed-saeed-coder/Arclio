# TASK-094 — تحسين سرعة التحميل والتحميل الكسول للصور (Image Lazy Loading & Web Vitals)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تطبيق `loading='lazy'` وفئات التحميل التدريجي ومراقبة مؤشرات Core Web Vitals (LCP, FID, CLS).

## لماذا توجد هذه المهمة؟ Why This Task Exists
تسريع تحميل الصفحات وتوفير استهلاك بيانات باقات المطورين على الهواتف الذكية وتحسين الأداء العام.

## المتطلبات السابقة Prerequisites
- TASK-087

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-095

## الهدف Objective
إنشاء `src/scripts/performance.js` وتحسين وسوم الصور والأصول في كافة صفحات الموقع.

## المتطلبات Requirements
- إضافة خاصية `loading='lazy'` و `decoding='async'` على جميع صور البطاقات ومعارض الأعمال.
- تحديد أبعاد العرض والارتفاع `width` و `height` على جميع الصور لمنع قفزات التخطيط Cumulative Layout Shift (CLS).
- كتابة دالة صغيرة باستخدام `PerformanceObserver` لقياس زمن التحميل وطباعة مؤشرات الـ Web Vitals في الكونسول.
- تطبيق ضغط ناعم وتوفير صيغ WebP أو SVG خفيفة لجميع الأيقونات.

## متطلبات واجهة المستخدم UI Requirements
ظهور الصور بسلاسة فور التمرير إليها بدون أي وميض أو قفزة مفاجئة في ارتفاع الصفحة.

## متطلبات التجاوب Responsive Requirements
تحميل سريع وخفيف على شبكات الجيل الثالث والرابع على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
التأكد من اكتمال النصوص البديلة alt لجميع الصور الكسولة.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/performance.js`
- `src/styles/base.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تحديد width و height في الـ HTML يخبر المتصفح بنسبة أبعاد الصورة (Aspect Ratio) فيحجز مكانها مسبقًا ويمنع الـ CLS.

## معايير القبول Acceptance Criteria
- [ ] جميع الصور تستخدم خاصية loading='lazy' الأصلية.
- [ ] لا توجد أي قفزات تخطيط CLS أثناء تحميل الصور.
- [ ] مؤشرات الأداء تسجل سرعات تحميل ممتازة في فحص Lighthouse.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة explore.html في DevTools مع تحديد سرعة Fast 3G وتأكد من تأجيل تحميل صور البطاقات البعيدة حتى التمرير إليها.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تحسينات الأداء وتطبيق التحميل الكسول للصور بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-094-lazy-loading-perf`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement native image lazy loading and core web vitals optimizations`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة الأداء وسرعة الويب ومؤشرات Core Web Vitals ومفهوم تقليل الـ Layout Shift.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-095
- TASK-096
