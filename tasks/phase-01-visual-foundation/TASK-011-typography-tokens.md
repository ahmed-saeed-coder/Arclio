# TASK-011 — بناء مقياس الخطوط وتنسيقات النصوص (Typography Scale Tokens)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء مقياس أحجام ونصوص وعناوين متناسق (Type Scale) في tokens.css وتطبيقه في base.css.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التناسق البصري في أحجام العناوين والنصوص يمنح الموقع مظهرًا احترافيًا ويسهل قراءة المحتوى التعليمي.

## المتطلبات السابقة Prerequisites
- TASK-009

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-010, TASK-012

## الهدف Objective
تعريف متغيرات عائلات الخطوط وأحجام النصوص من xs إلى 4xl مع ضبط line-height و letter-spacing.

## المتطلبات Requirements
- تعريف عائلة الخطوط الأساسية `--font-sans` وخط الأكواد البرمجية `--font-mono`.
- تعريف مقياس الأحجام: `--text-xs` (12px), `--text-sm` (14px), `--text-base` (16px), `--text-lg` (18px), `--text-xl` (20px), `--text-2xl` (24px), `--text-3xl` (32px), `--text-4xl` (40px).
- تطبيق التنسيقات الافتراضية للعناوين h1 إلى h6 والفقرات p ووسوم الأكواد code في base.css.

## متطلبات واجهة المستخدم UI Requirements
تسلسل هرمي واضح: العناوين واضحة وبارزة والنصوص مريحة للقراءة مع تباعد أسطر 1.6 للفقرات.

## متطلبات التجاوب Responsive Requirements
استخدام وحدات `rem` النسبية لضمان تجاوب الخطوط مع إعدادات تكبير المتصفح.

## متطلبات إمكانية الوصول Accessibility Requirements
دعم تغيير حجم الخط بنسبة 200% دون انكسار النصوص أو تداخلها.

## الملفات ومناطق العمل Files / Areas
- `src/styles/tokens.css`
- `src/styles/base.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css
- src/styles/layout.css

## ملاحظات التنفيذ Implementation Notes
استخدم `rem` بدلاً من `px` الثابتة لتمكين مستخدمي قارئات الشاشة وضعاف البصر من تكبير الخط.

## معايير القبول Acceptance Criteria
- [ ] المقياس يعتمد على وحدات rem النسبية.
- [ ] العناوين h1-h3 تستخدم وزن خط 700 وتباعد أسطر 1.25.
- [ ] وسوم <code> تستخدم عائلة خط Monospace مع خلفية وحدود واضحة.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص العناصر في DevTools وتأكد من تطبيق متغيرات الخطوط على العناوين.
2. جرب تكبير خط المتصفح وتأكد من استجابة عناصر الصفحة بانسيابية.

## تعريف الانتهاء للمهمة Definition of Done
تطبيق مقياس الخطوط القياسي عبر صفحات المنصة واستيفاء معايير التباين.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-011-typography-tokens`
- **رسالة الحفظ المقترحة (Commit)**: `feat: establish typography scale and font tokens`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم نظام قياس النصوص النسبي ووحدات rem وأهميتها في تجربة القراءة وإمكانية الوصول.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-013
- TASK-014
