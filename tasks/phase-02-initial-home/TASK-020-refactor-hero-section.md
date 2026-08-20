# TASK-020 — تحسين الهيكل الدلالي لمساحة البداية Hero (Refactor Hero Section Semantics)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تنظيم عنوان الصفحة h1 والنص التعريفي وشارة البداية دلاليًا داخل عنصر section.

## لماذا توجد هذه المهمة؟ Why This Task Exists
قسم الـ Hero هو أول ما يراه الزائر ومحركات البحث؛ تنظيمه الدلالي يعزز السيو وإمكانية الوصول.

## المتطلبات السابقة Prerequisites
- TASK-013
- TASK-017

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-018, TASK-023

## الهدف Objective
مراجعة كود قسم الـ Hero في index.html والتأكد من استخدام عنوان h1 واحد وتسلسل منطقي.

## المتطلبات Requirements
- تغليف القسم داخل `<section class='hero-section' aria-labelledby='hero-heading'>`.
- استخدام شارة المرحلة `<div class='hero-badge'>Wave 01 · Initial Foundation</div>`.
- تخصيص وسم `<h1 id='hero-heading' class='hero-title'>Learn. Build. Become.</h1>`.
- كتابة الوصف التأسيسي داخل فقرة `<p class='hero-subtitle'>`.

## متطلبات واجهة المستخدم UI Requirements
تسلسل بصري متناسق: شارة علوية صغيرة -> عنوان رئيسي ضخم وبارز -> فقرة وصفية مريحة.

## متطلبات التجاوب Responsive Requirements
تصغير حجم خط h1 تدريجيًا على شاشات الموبايل ليناسب العرض الضيق.

## متطلبات إمكانية الوصول Accessibility Requirements
وجود وسم h1 وحيد في الصفحة يمثل الهوية الأساسية للمنصة.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
تأكد من عدم استخدام أكثر من وسم h1 في نفس الصفحة لاتباع معايير الـ SEO.

## معايير القبول Acceptance Criteria
- [ ] قسم الـ Hero يحتوي على h1 رئيسي وشارة ووصف محدد.
- [ ] العنوان يستجيب لتصغير الشاشة بدون انكسار غير لائق للكلمات.
- [ ] تم ربط السمة aria-labelledby بعنوان القسم بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص الصفحة وتأكد من أن h1 هو أول وسم عنوان رئيسي يظهر في شجرة الـ DOM.

## تعريف الانتهاء للمهمة Definition of Done
دمج هيكل قسم الـ Hero الدلالي المحسن.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-020-hero-semantics`
- **رسالة الحفظ المقترحة (Commit)**: `feat: refactor hero section semantic structure and typography`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تطبيق قواعد تسلسل العناوين Heading Hierarchy وتحسين قابلية القراءة ومحركات البحث.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-021
- TASK-022
