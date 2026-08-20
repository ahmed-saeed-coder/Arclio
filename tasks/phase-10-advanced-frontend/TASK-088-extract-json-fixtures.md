# TASK-088 — فصل بيانات المشاريع والمسارات في ملفات JSON ثابتة (Extract Static JSON Fixtures)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
نقل مصفوفات المشاريع والمسارات من ملفات JS إلى ملفات JSON نقية (`data/projects.json`, `data/paths.json`).

## لماذا توجد هذه المهمة؟ Why This Task Exists
فصل البيانات عن كود المنطق البرمجي والتمهيد لمحاكاة جلب البيانات عبر شبكة الـ API.

## المتطلبات السابقة Prerequisites
- TASK-087

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-089, TASK-090

## الهدف Objective
إنشاء `src/data/projects.json` و `src/data/paths.json` وتنسيقها بصيغة JSON القياسية.

## المتطلبات Requirements
- إنشاء ملف `src/data/projects.json` ونقل مصفوفة المشاريع مع علامات الاقتباس المزدوجة القياسية للحقول والقيم.
- إنشاء ملف `src/data/paths.json` ونقل مصفوفة المسارات التعليمية ووحداتها.
- التحقق من صحة صياغة الـ JSON عبر أدوات التحقق JSON Linter والتأكد من انعدام الفواصل الزائدة Trailing Commas.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/data/projects.json`
- `src/data/paths.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
في صيغة الـ JSON، جميع المفاتيح والنصوص يجب أن تُغلف بعلامات اقتباس مزدوجة `"key": "value"` مع منع الفاصلة في نهاية آخر عنصر.

## معايير القبول Acceptance Criteria
- [ ] ملفات الـ JSON نقية ومتوافقة مع المعيار القياسي 100%.
- [ ] البيانات مكتملة وشاملة لجميع المشاريع والمسارات.
- [ ] تم التحقق من خلو الملفات من أخطاء الـ Syntax.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الملفات وتأكد من عدم وجود أي خطأ باللون الأحمر في محرر الأكواد VS Code.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال إنشاء ملفات البيانات الثابتة JSON Fixtures في المشروع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `refactor/task-088-json-fixtures`
- **رسالة الحفظ المقترحة (Commit)**: `refactor: extract project and path datasets into standalone static json fixtures`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم صيغة تبادل البيانات القياسية JSON والقواعد الصارمة لصياغتها.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-089
- TASK-090
