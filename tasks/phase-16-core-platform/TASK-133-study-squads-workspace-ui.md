# TASK-133 — بناء مساحات عمل الفرق ومجموعات التعلم Squads (Study Squads Workspace UI)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
بناء صفحة مساحة عمل المجموعة `SquadsPage.tsx` لعرض أعضاء الفريق (3-5 مطورين)، لوحة المهام المشتركة، وروابط المستودع.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين الفرق الصغيرة من التعاون في بناء مشاريع الفريق الجماعية وممارسة دور قائد المجموعة ومراجع الكود.

## المتطلبات السابقة Prerequisites
- TASK-129

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-134

## الهدف Objective
إنشاء `src/pages/SquadsPage.tsx` ومسارات إدارة الفرق `server/src/routes/squads.ts`.

## المتطلبات Requirements
- بناء لوحة مهام الفريق Kanban Board البسيطة (To Do, In Progress, Done) المخصصة للمشاريع الجماعية.
- عرض قائمة أعضاء المجموعة وصورهم وأدوارهم الدورية (Squad Lead, Reviewer, QA).
- تضمين شات نقاشات سريع للفريق ومتابعة نسبة تقدم مشروع المجموعة المشترك.
- ربط مساحة الفريق بمستودع GitHub المشترك للمجموعة.

## متطلبات واجهة المستخدم UI Requirements
مساحة عمل تعاونية متكاملة تنبض بالحياة وتشجع على العمل الجماعي والتواصل السريع.

## متطلبات التجاوب Responsive Requirements
لوحة مهام مرنة تدعم السحب والإفلات أو النقر لنقل المهام على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معايير سهولة الوصول للوحات الـ Kanban وإمكانية نقل المهام بالكيبورد.

## الملفات ومناطق العمل Files / Areas
- `src/pages/SquadsPage.tsx`
- `server/src/controllers/squadController.ts`
- `server/src/routes/squads.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
مساحات الفرق تحاكي بيئة العمل الحقيقية في الشركات الناشئة وتدرب المطور على المسؤولية الجماعية.

## معايير القبول Acceptance Criteria
- [ ] مساحة الفريق تعرض الأعضاء ولوحة المهام المشتركة بدقة.
- [ ] نقل المهام بين الأعمدة يحدث في قاعدة البيانات فورًا.
- [ ] الروابط تقود للمستودعات الصحيحة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة الفريق وانقل مهمة من 'قيد التنفيذ' إلى 'مكتملة' وتأكد من حفظ التغيير وتحديث نسبة إنجاز الفريق.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مساحة عمل الفرق ومجموعات التعلم الجماعية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-133-study-squads-workspace`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build collaborative study squads workspace layout and shared kanban task board`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء منصات العمل الجماعي Team Collaboration Workspaces وتصميم لوحات الـ Kanban التفاعلية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-134
- TASK-135
