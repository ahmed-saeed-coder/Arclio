# TASK-014 — بناء تنسيق الأزرار الأساسية Primary و Secondary (Base Button Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء مكوّن الأزرار الأساسية وحالات التحويم :hover والتركيز :focus.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الأزرار هي وسيلة التفاعل الأساسية للمستخدم ويجب أن تكون واضحة وسهلة النقر وتتبع هوية المنصة.

## المتطلبات السابقة Prerequisites
- TASK-010
- TASK-011

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-013, TASK-015

## الهدف Objective
كتابة فئات .btn و .btn-primary و .btn-secondary في layout.css مع ضبط الحالات التفاعلية.

## المتطلبات Requirements
- بناء الكلاس الأساسي `.btn` مع `display: inline-flex; align-items: center; justify-content: center; font-weight: 600; cursor: pointer;`.
- بناء كلاس `.btn-primary` بخلفية زرقاء `--brand-primary` ونص أبيض وتأثير hover مغمق `--brand-primary-hover`.
- بناء كلاس `.btn-secondary` بخلفية سطحية `--bg-surface` وحدود `--border-subtle` ونص رئيسي.
- إضافة انتقالات ناعمة `transition: all 0.15s ease`.

## متطلبات واجهة المستخدم UI Requirements
أزرار بحواف منحنية `--radius-md` ومسافات داخلية متناسقة ونصوص بارزة.

## متطلبات التجاوب Responsive Requirements
مساحة نقر للأزرار لا تقل عن 40px في الارتفاع لتناسب شاشات اللمس.

## متطلبات إمكانية الوصول Accessibility Requirements
ظهور إطار التركيز :focus-visible بوضوح عند استخدام الكيبورد.

## الملفات ومناطق العمل Files / Areas
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تأكد من أن الأزرار تعمل كعنصر `<button>` أو كرابط `<a>` يحمل كلاس `.btn` بنفس الكفاءة.

## معايير القبول Acceptance Criteria
- [ ] الزر الأساسي Primary واضح وبارز وله تأثير hover جذاب.
- [ ] الزر الثانوي Secondary متناسق مع الثيم الداكن.
- [ ] إمكانية النقر والتنقل عبر زر Tab في لوحة المفاتيح تعمل بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. مرر الماوس فوق الأزرار وتأكد من تغير اللون بسلاسة.
2. اضغط على زر Tab وتأكد من إمكانية الوصول إلى الزر وظهور إطار الفوكس.

## تعريف الانتهاء للمهمة Definition of Done
جاهزية مكوّن الأزرار الأساسي للاستخدام في كافة صفحات المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-014-base-buttons`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement primary and secondary button components`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مكونات UI تفاعلية قابلة لإعادة الاستخدام وإتقان حالات :hover و :focus.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-016
- TASK-021
- TASK-025
