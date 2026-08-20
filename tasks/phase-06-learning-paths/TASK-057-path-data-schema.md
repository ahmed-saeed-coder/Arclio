# TASK-057 — هيكلة بيانات المسار التعليمي والمستويات (Learning Path Data Schema)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تعريف كائنات المسارات التعليمية ووحداتها ودروسها في ملف data/paths.js.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير المحتوى المعرفي المنظم لمسار هندسة الواجهات الأمامية Frontend Development ووحداته.

## المتطلبات السابقة Prerequisites
- TASK-055

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-056, TASK-058

## الهدف Objective
إنشاء ملف `src/data/paths.js` وكتابة مصفوفة بيانات المسارات التخصصية والوحدات والدروس.

## المتطلبات Requirements
- تعريف مصفوفة `const pathsData = [ ... ]`.
- تضمين المسار التأسيسي 'Frontend Engineering' مع الحقول: `id`, `title`, `description`, `totalHours`, `modulesCount`.
- تضمين مصفوفة الوحدات `modules` ومصفوفة الدروس `lessons` داخل كل وحدة متضمنة عنوان الدرس والمدة التقديرية.
- تصدير المصفوفة للاستخدام في رندرة الصفحات.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/data/paths.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/data/projects.js

## ملاحظات التنفيذ Implementation Notes
نمذجة البيانات الشجرية Hierarchical Data تفيد المطور في فهم العلاقات المعقدة بين المسارات والوحدات والدروس.

## معايير القبول Acceptance Criteria
- [ ] الملف يحتوي على مسار الواجهات الأمامية متضمنًا 4 وحدات تعليمية على الأقل.
- [ ] كل وحدة تحتوي على 3 إلى 5 دروس مفصلة.
- [ ] هيكل البيانات خالي من الأخطاء النحوية.

## الاختبار والتحقق اليدوي Manual Testing
1. اطبع `pathsData` في كونسول المتصفح وتأكد من استعراض المسار ووحداته ودروسه بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال وتوثيق مجموعة بيانات المسارات والمناهج التعليمية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-057-path-data-schema`
- **رسالة الحفظ المقترحة (Commit)**: `feat: define structured learning path curriculum dataset and modules schema`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
نمذجة البيانات الهرمية المتداخلة (Hierarchical Tree Data Structures) في JavaScript.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-058
