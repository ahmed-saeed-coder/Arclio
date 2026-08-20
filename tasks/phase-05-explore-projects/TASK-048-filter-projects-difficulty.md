# TASK-048 — فلترة المشاريع حسب مستوى الصعوبة بـ Array.filter (Filter by Difficulty)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
ربط القائمة المنسدلة بدالة التصفية حسب المستوى (Beginner, Intermediate, Advanced) باستخدام Array.prototype.filter.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مساعدة المتعلم على العثور بسرعة على المشاريع التي تناسب مستواه البرمجي الحالي دون تشتت.

## المتطلبات السابقة Prerequisites
- TASK-030
- TASK-047

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-049, TASK-050

## الهدف Objective
إضافة مستمع حدث `change` للقائمة المنسدلة وإعادة رندرة المشاريع المطابقة.

## المتطلبات Requirements
- الاستماع لحدث `change` على عنصر `#difficulty-filter`.
- كتابة دالة `filterByDifficulty(projects, level)` التي تستخدم `projects.filter(p => p.difficulty === level)`.
- إرجاع جميع المشاريع إذا كانت القيمة المختارة 'all'.
- إعادة استدعاء `renderProjects()` بالمصفوفة المصفاة.

## متطلبات واجهة المستخدم UI Requirements
تحديث فوري لشبكة المشاريع فور تغيير خيار القائمة المنسدلة.

## متطلبات التجاوب Responsive Requirements
القائمة تعمل بسلاسة على شاشات اللمس وشاشات الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير تسمية واضحة للقائمة المنسدلة عبر وسم label.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/data/projects.js

## ملاحظات التنفيذ Implementation Notes
دالة الفلترة يجب أن تكون دالة نقية Pure Function تقبل مصفوفة وتعيد مصفوفة جديدة دون تعديل المصفوفة الأصلية.

## معايير القبول Acceptance Criteria
- [ ] اختيار 'مبتدئ' يعرض فقط المشاريع ذات مستوى beginner.
- [ ] اختيار 'الكل' يعيد عرض جميع المشاريع.
- [ ] لا يحدث أي وميض أو إعادة تحميل للصفحة.

## الاختبار والتحقق اليدوي Manual Testing
1. اختر 'Beginner' وتأكد من أن جميع البطاقات الظاهرة تحمل شارة مبتدئ فقط.
2. اختر 'All' وتأكد من عودة القائمة كاملة.

## تعريف الانتهاء للمهمة Definition of Done
تكامل فلترة الصعوبة بنجاح واختبارها على المتصفح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-048-filter-difficulty`
- **رسالة الحفظ المقترحة (Commit)**: `feat: filter projects by difficulty level using array filter method`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام دالة Array.prototype.filter في سيناريوهات المنتجات الحقيقية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-053
- TASK-054
