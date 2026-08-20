# TASK-051 — ترتيب المشاريع حسب الأحدث والصعوبة (Project Sorting Logic)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إضافة خيارات الترتيب (الأحدث، الأقدم، حسب نقاط الخبرة XP) باستخدام Array.prototype.sort ومقارنة القيم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مساعدة المطور في العثور على أحدث المشاريع المضافة أو ترتيبها تصاعديًا حسب الجهد المطلوب.

## المتطلبات السابقة Prerequisites
- TASK-030
- TASK-047

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-050, TASK-052

## الهدف Objective
ربط قائمة الترتيب المنسدلة `#sort-select` بدالة الترتيب وإعادة عرض الشبكة.

## المتطلبات Requirements
- الاستماع لحدث `change` على قائمة الترتيب المنسدلة `#sort-select`.
- كتابة دالة `sortProjects(projects, criteria)` تقبل معايير: 'newest', 'oldest', 'xp-high', 'xp-low'.
- استخدام `[...projects].sort((a, b) => ...)` لنسخ المصفوفة وتجنب تعديل الأصل بالخطأ (Immutability).
- إعادة استدعاء دالة الرندرة بالمصفوفة المرتبة.

## متطلبات واجهة المستخدم UI Requirements
إعادة ترتيب سريعة وسلسة لبطاقات المشاريع فور تغيير خيار الترتيب.

## متطلبات التجاوب Responsive Requirements
القائمة متوافقة مع شاشات الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية واضحة لقائمة الترتيب.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/data/projects.js

## ملاحظات التنفيذ Implementation Notes
تذكر دائمًا أن `Array.prototype.sort` تعدل المصفوفة الأصلية في مكانها (Mutating)؛ لذلك انسخها أولاً بـ `[...array]`.

## معايير القبول Acceptance Criteria
- [ ] الترتيب حسب نقاط XP العالية يضع المشاريع الأكثر نقاطًا في المقدمة.
- [ ] المصفوفة الأصلية تظل محمية بدون تعديل غير مقصود.
- [ ] لا توجد أخطاء في الـ Console.

## الاختبار والتحقق اليدوي Manual Testing
1. اختر 'Highest XP' وتأكد من تصدر المشروع ذي النقاط الأعلى لشبكة العرض.
2. اختر 'Newest' وتأكد من إعادة ترتيب العناصر حسب المعرف أو تاريخ الإضافة.

## تعريف الانتهاء للمهمة Definition of Done
تكامل منطق ترتيب المشاريع واعتماده في صفحة الاستكشاف.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-051-project-sorting`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement immutable project sorting logic by date and xp`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام Array.prototype.sort ومفهوم عدم تعديل البيانات الأصلية Immutability.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-053
- TASK-054
