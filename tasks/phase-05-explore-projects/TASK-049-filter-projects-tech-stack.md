# TASK-049 — فلترة المشاريع حسب وسوم التقنيات (Filter Projects by Tech Stack)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تصفية المشاريع عند الضغط على وسوم التقنيات (HTML, CSS, JS, API) باستخدام Array.prototype.includes.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المطور الذي يتدرب على تقنية معينة (مثل CSS أو JavaScript) من استعراض مشاريع تلك التقنية مباشرة.

## المتطلبات السابقة Prerequisites
- TASK-047

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-048, TASK-050

## الهدف Objective
إضافة شريط وسوم تقنية تفاعلية وتصفية شبكة المشاريع بناءً على الوسم المختار.

## المتطلبات Requirements
- إنشاء شريط أزرار الوسوم التقنية `.tech-filter-bar` أعلى شبكة المشاريع.
- كتابة دالة `filterByTech(projects, tag)` تفحص وجود الوسم داخل مصفوفة `project.techStack`.
- إضافة كلاس `.is-active` على زر الوسم النشط حاليًا.
- تحديث شبكة المشاريع بالنتائج المصفاة.

## متطلبات واجهة المستخدم UI Requirements
أزرار وسوم مميزة يتغير لون خلفيتها وحدودها عند التفعيل.

## متطلبات التجاوب Responsive Requirements
شريط الوسوم يدعم التمرير الأفقي الناعم على شاشات الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث السمة `aria-pressed='true'` على الزر النشط.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`
- `src/styles/components/badge.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/data/projects.js

## ملاحظات التنفيذ Implementation Notes
استخدم `Array.prototype.some` أو `Array.prototype.includes` للبحث داخل مصفوفة الوسوم لكل كائن مشروع.

## معايير القبول Acceptance Criteria
- [ ] الضغط على وسم 'JavaScript' يعرض المشاريع التي تتضمن لغة JS فقط.
- [ ] الضغط على الوسم النشط مرة أخرى يلغي الفلترة ويعيد عرض الكل.
- [ ] سمة aria-pressed تتحدث تلقائيًا.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر على زر 'CSS' وتأكد من تصفية البطاقات وعرض مشاريع الـ CSS فقط.
2. انقر عليه مجددًا وتأكد من إلغاء الفلتر.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد ميزة الفلترة بالوسوم التقنية وتكاملها مع شبكة العرض.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-049-filter-tech-stack`
- **رسالة الحفظ المقترحة (Commit)**: `feat: filter projects by tech stack tags with active state toggling`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع المصفوفات المتداخلة داخل الكائنات Nested Arrays واستخدام includes و some.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-053
- TASK-054
