# TASK-046 — إنشاء هيكل مصفوفة بيانات المشاريع (Project Data Array Structure)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تعريف كائنات المشاريع في ملف data/projects.js مع المعرف والصعوبة والوسوم والوصف.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير بيانات واقعية متكاملة لمشاريع المنصة لتمكين المطور من ممارسة الفلترة والبحث وعرض الـ DOM.

## المتطلبات السابقة Prerequisites
- TASK-044

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-045, TASK-047

## الهدف Objective
إنشاء ملف `src/data/projects.js` وكتابة مصفوفة تحتوي على 8 مشاريع حقيقية على الأقل.

## المتطلبات Requirements
- تعريف مصفوفة كائنات `const projectsData = [ ... ]`.
- تضمين الحقول الأساسية لكل مشروع: `id`, `title`, `slug`, `description`, `difficulty` ('beginner', 'intermediate', 'advanced'), `techStack` (array of strings), `estimatedHours`, `xpPoints`.
- توفير مشاريع متنوعة تغطي HTML, CSS, JavaScript, APIs.
- تصدير المصفوفة أو إتاحتها في النطاق المناسب للتطبيق.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/data/projects.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
كتابة بيانات واقعية ومحكمة يعطي تجربة واقعية وممتعة أثناء تصفح الواجهة وتجربة الفلاتر.

## معايير القبول Acceptance Criteria
- [ ] الملف يحتوي على 8 مشاريع متكاملة البيانات على الأقل.
- [ ] مستويات الصعوبة والوسوم التقنية متسقة وصحيحة إملائيًا.
- [ ] هيكل البيانات خالي من الأخطاء النحوية Syntax Errors.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح كونسول المتصفح واطبع `projectsData` وتأكد من قراءة المصفوفة وكافة كائناتها بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال وتوثيق مجموعة بيانات المشاريع الأولية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-046-project-data`
- **رسالة الحفظ المقترحة (Commit)**: `feat: define initial projects dataset and object schemas`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم كيفية نمذجة البيانات في مصفوفات وكائنات JavaScript (Data Modeling).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-047
