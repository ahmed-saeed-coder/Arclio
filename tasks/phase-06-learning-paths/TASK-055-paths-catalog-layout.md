# TASK-055 — بناء تخطيط صفحة دليل المسارات التعليمية (Learning Paths Catalog Layout)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء صفحة paths.html بهيكل دلالي وشبكة عرض للمسارات التخصصية في المنصة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
المسارات التعليمية هي الخريطة التوجيهية التي تقود المطور خطوة بخطوة من الصفر حتى التخصص المهني.

## المتطلبات السابقة Prerequisites
- TASK-044

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-056, TASK-057

## الهدف Objective
إنشاء ملف `src/paths.html` وتنسيق الترويسة وشبكة بطاقات المسارات.

## المتطلبات Requirements
- إنشاء ملف `src/paths.html` بالهيكل الدلالي القياسي واستيراد ملفات التنسيق والسكربتات.
- إضافة ترويسة الصفحة مع شارة وعنوان 'المسارات التعليمية التخصصية' وفق مكوّن section-header.
- تهيئة شبكة عرض المسارات `<div id='paths-grid' class='paths-grid'>` باستخدام CSS Grid.
- إضافة شريط مسار التنقل Breadcrumb للعودة للرئيسية.

## متطلبات واجهة المستخدم UI Requirements
صفحة مسارات متكاملة تتناغم مع هوية وأسلوب صفحة استكشاف المشاريع.

## متطلبات التجاوب Responsive Requirements
شبكة متجاوبة من عمود واحد على الموبايل وعمودين على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
هيكل دلالي متسلسل وعناوين واضحة.

## الملفات ومناطق العمل Files / Areas
- `src/paths.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/index.html

## ملاحظات التنفيذ Implementation Notes
استخدم نفس الحاويات والتنسيقات لضمان سلاسة التنقل بين صفحات الموقع.

## معايير القبول Acceptance Criteria
- [ ] صفحة paths.html منشأة وتعمل بسلاسة على المتصفح المحلي.
- [ ] الشبكة متناسقة وتتوسط الصفحة بحاوية .container.
- [ ] لا توجد أخطاء في الـ Console.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة paths.html وتأكد من سلامة الهيكل وتسلسل العناوين والتجاوب.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد الهيكل الأساسي لصفحة دليل المسارات التعليمية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-055-paths-catalog-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build learning paths catalog page layout and grid structure`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
توسيع بنية صفحات الموقع متعددة الصفحات (Multi-page Web Layouts).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-056
- TASK-057
- TASK-058
