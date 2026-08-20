# TASK-044 — بناء هيكل صفحة استكشاف المشاريع (Explore Projects Page Layout)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء صفحة explore.html بهيكل دلالي وشريط مسار تنقل Breadcrumb وشبكة عرض للمشاريع.

## لماذا توجد هذه المهمة؟ Why This Task Exists
صفحة استكشاف المشاريع هي القلب التدريبي للمنصة حيث يتصفح المطور المهام والمشاريع المتاحة.

## المتطلبات السابقة Prerequisites
- TASK-024
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-045, TASK-046

## الهدف Objective
إنشاء ملف `src/explore.html` وتضمين الهيدر والفوتر والترويسة ومنطقة الفلاتر وشبكة العرض.

## المتطلبات Requirements
- إنشاء صفحة `src/explore.html` بالهيكل الدلالي القياسي واستيراد ملفات التنسيق والسكربتات.
- إضافة شريط مسار التنقل `<nav aria-label='مسار التنقل' class='breadcrumb'>`.
- إضافة ترويسة الصفحة ومنطقة شريط الأدوات `.explore-toolbar` (حقل البحث، قائمة الصعوبة، قائمة الترتيب).
- إضافة شبكة المشاريع الفارغة `<div id='projects-grid' class='projects-grid' aria-live='polite'>`.

## متطلبات واجهة المستخدم UI Requirements
صفحة استكشاف منظمة ذات تقسيم واضح بين شريط الأدوات وشبكة المشاريع.

## متطلبات التجاوب Responsive Requirements
شريط الأدوات يرتب عناصر الفلترة والبحث عموديًا على الموبايل وأفقيًا على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين شريط مسار تنقل دلالي Breadcrumb لتسهيل الرجوع للرئيسية.

## الملفات ومناطق العمل Files / Areas
- `src/explore.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/index.html

## ملاحظات التنفيذ Implementation Notes
استخدم نفس مكونات الهيدر والفوتر والـ Tokens للحفاظ على اتساق الهوية البصرية.

## معايير القبول Acceptance Criteria
- [ ] صفحة explore.html منشأة وتعمل بنجاح على المتصفح المحلي.
- [ ] شريط الأدوات يحتوي على حقول البحث والفلترة.
- [ ] لا توجد أي أخطاء في الـ Console.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة explore.html في المتصفح وتأكد من تناسق المسافات والتصميم مع الصفحة الرئيسية.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد الهيكل التأسيسي لصفحة استكشاف المشاريع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-044-explore-page-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create explore projects page layout and toolbar structure`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء صفحات جديدة متعددة في الموقع مع الحفاظ على تناسق الهوية البصرية والتصميم.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-045
- TASK-046
- TASK-047
