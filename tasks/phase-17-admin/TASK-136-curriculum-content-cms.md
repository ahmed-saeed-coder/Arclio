# TASK-136 — بناء محرر إدارة المناهج والمسارات التعليمية (Curriculum Content CMS Editor)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 17 — لوحة تحكم الإدارة وتقييم المشاريع (Admin & Instructor Platform)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
بناء واجهة ونماذج إضافة وتعديل المسارات والوحدات والدروس والمشاريع من لوحة تحكم المشرف مباشرة دون لمس قاعدة البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين مؤلفي المناهج والمشرفين من تحديث الدروس وإضافة مشاريع جديدة للمنصة بسلاسة وسرعة.

## المتطلبات السابقة Prerequisites
- TASK-135

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-137, TASK-138

## الهدف Objective
إنشاء `src/admin/CurriculumEditor.tsx` ومسارات `POST/PUT/DELETE /api/v1/admin/curriculum/...`.

## المتطلبات Requirements
- بناء نموذج إنشاء وتعديل المسارات (الاسم، الوصف، الساعات التقديرية، الشارة).
- بناء نموذج إضافة الوحدات والدروس ونصوص المسائل مع محرر Markdown مدمج.
- بناء نموذج إضافة المشاريع متضمنًا متطلبات قصة المستخدم ومعايير الـ Rubric.
- تنفيذ عمليات الحفظ والتعديل والحذف عبر Prisma مع تأمين الصلاحيات للمشرفين فقط.

## متطلبات واجهة المستخدم UI Requirements
واجهة محرر محتوى CMS متكاملة مع إمكانية التبديل بين التعديل والمعاينة المباشرة.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع شاشات اللابتوب والديسكتوب العريضة.

## متطلبات إمكانية الوصول Accessibility Requirements
ربط دلالي كامل لجميع حقول النماذج والوسوم.

## الملفات ومناطق العمل Files / Areas
- `src/admin/CurriculumEditor.tsx`
- `server/src/controllers/curriculumAdminController.ts`
- `server/src/routes/admin.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
توفير ميزة المعاينة الحية Live Markdown Preview أثناء كتابة نصوص الدروس يسهل على المؤلفين تنسيق الشروحات.

## معايير القبول Acceptance Criteria
- [ ] المشرف يستطيع إضافة درس جديد أو تعديل مشروع ويظهر التحديث فورًا في صفحة المستخدمين.
- [ ] عمليات الحذف تتطلب تأكيدًا منبثقًا Modal لمنع الحذف بالخطأ.
- [ ] التحقق من البيانات مدعوم بمخططات Zod في الخادم.

## الاختبار والتحقق اليدوي Manual Testing
1. أضف مشروعًا جديدًا من محرر الإدارة وتأكد من ظهوره الفوري في صفحة explore.html للمستخدمين.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال محرر إدارة المناهج والمشاريع CMS في لوحة الإدارة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-136-curriculum-cms-editor`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement curriculum content management cms editor for paths and project briefs`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
هندسة نظم إدارة المحتوى CMS Architecture وبناء واجهات التحرير الإدارية المتقدمة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-137
- TASK-138
- TASK-139
