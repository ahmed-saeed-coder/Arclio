# TASK-023 — بناء وتنسيق الفوتر الدلالي للموقع (Semantic Site Footer Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
بناء الفوتر بحقوق الملكية وروابط الأدلة وتنسيقه بـ Flexbox المتجاوب.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الفوتر هو الخاتمة الدلالية للصفحة ويحتوي على حقوق الملكية وروابط الوصول لمعايير الجودة.

## المتطلبات السابقة Prerequisites
- TASK-013
- TASK-017

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-020, TASK-022

## الهدف Objective
كتابة وتنسيق وسم `<footer>` في index.html و layout.css مع ضبط التراصف المتجاوب.

## المتطلبات Requirements
- استخدام عنصر `<footer class='site-footer'>` مع حدود علوية `border-top: 1px solid var(--border-subtle)`.
- تنسيق `.footer-inner` ليعرض الحقوق والروابط في عمود على الموبايل وفي صف على الديسكتوب.
- تنسيق نصوص الحقوق بلون `--text-muted` وروابط الأدلة بكلاس `.nav-link`.

## متطلبات واجهة المستخدم UI Requirements
فوتر نظيف وهادئ في قاع الصفحة يفصل المحتوى بحد علوي ناعم.

## متطلبات التجاوب Responsive Requirements
محاذاة في المنتصف على الموبايل ومحاذاة أفقية متفرقة على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين حقوق الملكية وروابط واضحة الهدف.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `margin-top: auto` في layout الصفحة لضمان بقاء الفوتر في أسفل الشاشة حتى لو كان المحتوى قصيرًا.

## معايير القبول Acceptance Criteria
- [ ] الفوتر يظهر في نهاية الصفحة بشكل دلالي سليم.
- [ ] الروابط تقود للأدلة الصحيحة وتتغير ألوانها عند الـ hover.
- [ ] التراصف متجاوب وسلس بين الموبايل والديسكتوب.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الصفحة وتأكد من ظهور الفوتر في أسفل الشاشة واختبر نقر روابطه.

## تعريف الانتهاء للمهمة Definition of Done
دمج الفوتر الدلالي المكتمل في الصفحة الرئيسية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-023-semantic-footer`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement responsive semantic site footer component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم دور عنصر footer الدلالي وتطبيق Flexbox لتجاوب النهايات.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-024
- TASK-041
