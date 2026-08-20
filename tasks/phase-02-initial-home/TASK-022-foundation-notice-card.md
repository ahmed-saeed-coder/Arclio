# TASK-022 — بناء بطاقة التنبيه التأسيسي للمنصة (Foundation Notice Card Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تنسيق بطاقة التأسيس بمحاذاة وخطوط وألوان أسطح معتمدة تشرح حالة المشروع الأولية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توضيح الهدف التأسيسي للمنصة للزوار والتأكيد على أن المنصة تنمو تدريجيًا عبر المهام.

## المتطلبات السابقة Prerequisites
- TASK-013
- TASK-020

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-019, TASK-021

## الهدف Objective
تنسيق كلاس `.foundation-card` في layout.css باستخدام متغيرات التصميم.

## المتطلبات Requirements
- تطبيق خلفية سطحية `--bg-surface` وحدود ناعمة `--border-subtle` وانحناء حواف `--radius-lg`.
- إضافة مسافات داخلية متناسقة `padding: var(--space-6)`.
- تنسيق العنوان الفرعي h2 والفقرة بتباين لوني مريح وخطوط متناسقة.

## متطلبات واجهة المستخدم UI Requirements
بطاقة أنيقة ومميزة تتوسط الصفحة أسفل مساحة الـ Hero.

## متطلبات التجاوب Responsive Requirements
تتجاوب البطاقة تلقائيًا مع عرض الحاوية .container.

## متطلبات إمكانية الوصول Accessibility Requirements
عنوان واضح يصف محتوى البطاقة الإرشادية.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
البطاقة مصممة لتكون بسيطة وخالية من التعقيد البصري لتتماشى مع مبدأ الصفحة المبدئية النظيفة.

## معايير القبول Acceptance Criteria
- [ ] البطاقة تستخدم متغيرات الـ Tokens بالكامل.
- [ ] النصوص مقروءة وواضحة ولا تسبب تشتيتًا للمستخدم.
- [ ] التصميم متناسق على شاشات الموبايل والتابلت والديسكتوب.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص البطاقة على شاشات مختلفة وتأكد من ثبات الهوامش الداخلية padding.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مظهر بطاقة التأسيس في الصفحة الرئيسية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-022-foundation-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: style foundation workspace notice card component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء وتنسيق بطاقات المحتوى البسيطة والالتزام بمتغيرات التصميم.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-024
