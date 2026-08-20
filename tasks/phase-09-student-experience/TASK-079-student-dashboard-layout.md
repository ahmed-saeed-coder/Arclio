# TASK-079 — بناء تخطيط لوحة تحكم الطالب مع القائمة الجانبية (Student Dashboard Layout)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء صفحة dashboard.html مع شريط جانبي للتنقل Dashboard Sidebar وشبكة بطاقات ملخص النشاط.

## لماذا توجد هذه المهمة؟ Why This Task Exists
لوحة التحكم هي المقر الرئيسي للطالب لمتابعة استمراريته، مشاريعه الجارية، وملاحظات الموجهين في مكان واحد.

## المتطلبات السابقة Prerequisites
- TASK-024
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-080, TASK-081

## الهدف Objective
إنشاء ملف `src/dashboard.html` وتنسيق التخطيط العام للوحة التحكم.

## المتطلبات Requirements
- إنشاء صفحة `src/dashboard.html` بالهيكل الدلالي القياسي.
- بناء الشريط الجانبي `.dashboard-sidebar` بروابط: نظرة عامة Overview، مساراتي My Learning، مشاريعي My Projects، الإنجازات Achievements، والإعدادات Settings.
- بناء منطقة المحتوى الرئيسية `.dashboard-main` المقسمة لشبكة بطاقات إحصائية وعرض للمشاريع الجارية.
- تضمين شريط التنقل العلوي مع معلومات المطور وصورته الرمزية Avatar.

## متطلبات واجهة المستخدم UI Requirements
واجهة لوحة تحكم عصرية ذات تنظيم هرمي مريح تشبه لوحات تحكم GitHub و Linear.

## متطلبات التجاوب Responsive Requirements
شريط جانبي ثابت على الديسكتوب وقائمة سفلية أو جانبية قابلة للطي على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
استخدام وسم `<nav aria-label='لوحة التحكم'>` وتحديد الرابط النشط عبر `aria-current='page'`.

## الملفات ومناطق العمل Files / Areas
- `src/dashboard.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/index.html

## ملاحظات التنفيذ Implementation Notes
استخدم CSS Grid لتقسيم لوحة التحكم إلى شريط جانبي 260px ومساحة محتوى مرنة 1fr على الديسكتوب.

## معايير القبول Acceptance Criteria
- [ ] صفحة dashboard.html منشأة وتعمل بنجاح.
- [ ] الشريط الجانبي متناسق ومحدد الروابط النشطة بدقة.
- [ ] التخطيط متجاوب بين الديسكتوب والموبايل.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة dashboard.html وتأكد من تناسق الشريط الجانبي ومساحة المحتوى الرئيسية.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد الهيكل التأسيسي للوحة تحكم الطالب.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-079-dashboard-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create student dashboard page layout with sidebar and metrics grid`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء معمارية لوحات التحكم Dashboard Layouts وتنسيق القوائم الجانبية المتقدمة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-080
- TASK-081
- TASK-082
