# TASK-070 — بناء نافذة معايير التقييم والـ Rubric التفاعلية (Project Rubric Scoring Modal)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 07 — تعميق نظام المشاريع ومواصفات التذاكر (Project System Deepening)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء نافذة منبثقة تفاعلية تعرض جدول معايير الـ Rubric التفصيلية لكل مشروع لمساعدة الطالب على التقييم الذاتي.

## لماذا توجد هذه المهمة؟ Why This Task Exists
معرفة معايير التصحيح مسبقًا يساعد المطور على فحص كوده الذاتي والتأكد من استيفاء شروط الجودة قبل التسليم.

## المتطلبات السابقة Prerequisites
- TASK-038
- TASK-069

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-071

## الهدف Objective
إنشاء `src/scripts/rubric-modal.js` وتفعيل نافذة استعراض جدول معايير التقييم.

## المتطلبات Requirements
- بناء جدول الـ Rubric داخل نافذة منبثقة `<dialog id='rubric-modal'>`.
- تقسيم الجدول لأربعة محاور: نظافة الكود، الدلالات وإمكانية الوصول، التجاوب، ومعالجة الأخطاء.
- عرض متطلبات كل مستوى تقييم (ضعيف 1، مقبول 2، جيد 3، ممتاز 4).
- ربط زر 'معايير التقييم الـ Rubric' في صفحة المشروع بفتح المودال وإدارتها بالـ JS.

## متطلبات واجهة المستخدم UI Requirements
جدول تقييم منظم ذو صفوف متبادلة الألوان يسهل قراءته داخل نافذة المودال.

## متطلبات التجاوب Responsive Requirements
الجدول يدعم التمرير الأفقي الناعم داخل المودال على شاشات الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين وسوم `<th>` و `scope='col'` و `scope='row'` لضمان القراءة السليمة في قارئات الشاشة.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/rubric-modal.js`
- `src/styles/components/modal.css`
- `src/project-detail.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
جداول الـ Rubric الشفافة ترفع ثقة المتعلم وتزيل أي غموض حول كيفية تقييم الكود.

## معايير القبول Acceptance Criteria
- [ ] الضغط على زر الـ Rubric يفتح النافذة المنبثقة فورًا.
- [ ] الجدول منسق وواضح ويحتوي على معايير الدرجات الأربع لكل محور.
- [ ] إغلاق المودال بزر Escape أو زر الإغلاق يعمل بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح نافذة الـ Rubric وتصفح معايير التقييم واختبر إغلاقها بالكيبورد.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نافذة معايير التقييم وتكاملها مع صفحة تفاصيل المشروع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-070-rubric-modal`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create interactive project rubric scoring guide modal dialog`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء الجداول الدلالية المتقدمة Accessible Tables ودمجها داخل النوافذ المنبثقة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-071
- TASK-079
