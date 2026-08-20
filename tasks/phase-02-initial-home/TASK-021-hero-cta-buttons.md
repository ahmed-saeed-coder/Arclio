# TASK-021 — دمج أزرار الدعوة للإجراء CTA في مساحة البداية (Hero Call-to-Action Buttons)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
ربط أزرار استعراض المهام والتوثيق وضبط تجاوبها وتراصفها على الشاشات الصغيرة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الأزرار الرئيسية توجه المطورين الجدد مباشرة لخارطة الطريق ووثائق المنتج.

## المتطلبات السابقة Prerequisites
- TASK-014
- TASK-020

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-019, TASK-022

## الهدف Objective
تنسيق حاوية `.hero-actions` لترتيب الأزرار أفقيًا على الديسكتوب وعموديًا على الموبايل.

## المتطلبات Requirements
- إضافة زر أساسي: `<a href='../tasks/README.md' class='btn btn-primary'>استعرض جدول المهام (150 Tasks)</a>`.
- إضافة زر ثانوي: `<a href='../docs/00-PRODUCT-VISION.md' class='btn btn-secondary'>رؤية المنتج والتوثيق</a>`.
- تنسيق `.hero-actions` بـ `display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;`.

## متطلبات واجهة المستخدم UI Requirements
أزرار واضحة ومتجاورة مع تأثيرات hover جذابة ومسافات متساوية.

## متطلبات التجاوب Responsive Requirements
تمدد الأزرار على كامل عرض الشاشة أو ترتيبها عموديًا على شاشات الموبايل الضيقة.

## متطلبات إمكانية الوصول Accessibility Requirements
روابط واضحة الهدف تحتوي على نصوص تشرح وجهة الانتقال بدقة.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدمنا وسوم `<a>` هنا بدلاً من `<button>` لأنها تقوم بوظيفة التنقل لصفحة أخرى.

## معايير القبول Acceptance Criteria
- [ ] الأزرار تقود للصفحات والملفات الصحيحة.
- [ ] تراصف الأزرار متجاوب ولا يسبب تداخلاً على الموبايل.
- [ ] الأزرار تدعم التركيز والتنقل عبر الكيبورد.

## الاختبار والتحقق اليدوي Manual Testing
1. اضغط على زر 'استعرض جدول المهام' وتأكد من فتح ملف tasks/README.md بنجاح.
2. افحص مظهر الأزرار على شاشة 375px وتأكد من عدم التصاقها بالحواف.

## تعريف الانتهاء للمهمة Definition of Done
تكامل أزرار الدعوة للإجراء في مساحة الـ Hero وتأكيد عمل روابطها.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-021-hero-cta-buttons`
- **رسالة الحفظ المقترحة (Commit)**: `feat: add responsive call-to-action buttons to hero section`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التمييز بين الروابط والأزرار في الاستخدام وضبط Flexbox للتجاوب على الموبايل.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-024
