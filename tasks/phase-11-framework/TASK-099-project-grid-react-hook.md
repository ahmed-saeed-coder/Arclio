# TASK-099 — إعادة بناء بطاقة وشبكة المشاريع بـ React والخطافات (Project Grid React Hook)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مكون `ProjectCard.tsx` ومكوّن `ProjectGrid.tsx` وخطاف مخصص `useProjects.ts` لإدارة جلب البيانات وحالات التحميل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تطبيق المعمارية التصريحية Declarative UI واستخدام الـ Custom Hooks لفصل منطق البيانات عن عرض الواجهة.

## المتطلبات السابقة Prerequisites
- TASK-098

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-100, TASK-101

## الهدف Objective
إنشاء `src/components/ProjectCard.tsx` و `src/hooks/useProjects.ts` وعرض شبكة المشاريع في React.

## المتطلبات Requirements
- بناء الخطاف المخصص `useProjects()` لإدارة حالات: `projects`, `isLoading`, `error` باستخدام `useEffect` و `useState`.
- بناء مكوّن `ProjectCard.tsx` الذي يستقبل كائن المشروع كـ Prop ويعرض العنوان والصعوبة والوسوم.
- بناء مكوّن `ProjectGrid.tsx` الذي يعرض شبكة CSS Grid ومكونات التحميل Skeleton في حالة `isLoading`.
- عرض الحالة الفارغة EmptyState في حال عدم وجود نتائج.

## متطلبات واجهة المستخدم UI Requirements
شبكة مشاريع ديناميكية أنيقة مطابقة للتصميم المعتمد.

## متطلبات التجاوب Responsive Requirements
شبكة متجاوبة من 1 إلى 3 أعمدة حسب حجم الشاشة.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين سمات aria-live و aria-busy أثناء التحميل.

## الملفات ومناطق العمل Files / Areas
- `src/components/ProjectCard.tsx`
- `src/components/ProjectGrid.tsx`
- `src/hooks/useProjects.ts`
- `src/types/project.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
الخطافات المخصصة Custom Hooks تسمح لك بإعادة استخدام منطق جلب البيانات في أكثر من صفحة ومكون بسهولة مذهلة.

## معايير القبول Acceptance Criteria
- [ ] الخطاف المخصص useProjects يجلب ويعيد البيانات وحالات التحميل بأمان.
- [ ] بطاقات المشاريع تُرندر بنجاح عبر التكرار Array.prototype.map.
- [ ] حالات التحميل والأخطاء معالجة بشكل منظم.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص صفحة المشاريع في React وتأكد من ظهور بطاقات المشاريع وحالات التحميل السلسة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال شبكة المشاريع وخطاف جلب البيانات في تطبيق React.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-099-react-project-grid`
- **رسالة الحفظ المقترحة (Commit)**: `feat: recreate project card and grid in react with custom useprojects hook`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان بناء الخطافات المخصصة Custom Hooks وإدارة دورة حياة المكونات بـ useState و useEffect.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-100
- TASK-101
- TASK-102
