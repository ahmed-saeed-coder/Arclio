# TASK-058 — بناء صفحة تفاصيل المسار وشجرة المنهج (Path Detail Curriculum Tree)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء صفحة path-detail.html لعرض تفاصيل المسار وشجرة الوحدات والدروس وقائمة التقدم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير بيئة تصفح مركزة للطالب يرى فيها ترتيب الدروس والوحدات ويتتبع ما أنجزه خطوة بخطوة.

## المتطلبات السابقة Prerequisites
- TASK-056
- TASK-057

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-059, TASK-060

## الهدف Objective
إنشاء ملف `src/path-detail.html` وتنسيق قسم النظرة العامة وشجرة المنهج.

## المتطلبات Requirements
- إنشاء صفحة `src/path-detail.html` بالهيكل الدلالي القياسي وشريط مسار التنقل.
- بناء قسم الترويسة متضمنًا اسم المسار ووصفه وشارة المستوى والوقت الإجمالي.
- تهيئة حاوية شجرة المنهج `<div id='curriculum-tree' class='curriculum-tree'>`.
- إضافة بطاقة جانبية تعرض نسبة الإنجاز والشهادة المكتسبة عند إتمام المسار.

## متطلبات واجهة المستخدم UI Requirements
تخطيط من عمودين على الديسكتوب (شجرة المنهج على اليمين وبطاقة الإحصائيات على اليسار).

## متطلبات التجاوب Responsive Requirements
تخطيط بعمود واحد متتابع على شاشات الموبايل والتابلت.

## متطلبات إمكانية الوصول Accessibility Requirements
تسلسل هرمي منطقي للعناوين h1 ثم h2 للوحدات ثم h3 للدروس.

## الملفات ومناطق العمل Files / Areas
- `src/path-detail.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/paths.html

## ملاحظات التنفيذ Implementation Notes
استخدم CSS Grid لتقسيم المساحة بنسبة 2fr للمنهج و 1fr للبطاقة الجانبية على الديسكتوب.

## معايير القبول Acceptance Criteria
- [ ] صفحة path-detail.html منشأة وتعمل بنجاح.
- [ ] التخطيط متجاوب بين عمودين على الديسكتوب وعمود واحد على الموبايل.
- [ ] شريط التنقل يسمح بالرجوع لصفحة دليل المسارات بسهولة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة path-detail.html وافحص تجاوب العمودين عند تصغير وتكبير الشاشة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد هيكل وتخطيط صفحة تفاصيل المسار وشجرة المنهج.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-058-path-detail-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build path detail page layout and curriculum tree container`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء تخطيطات الصفحات المعقدة ذات العمودين وقوائم المحتوى الشجرية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-059
- TASK-060
- TASK-061
