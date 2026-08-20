# TASK-100 — إعادة بناء الفلترة والبحث باستخدام useReducer / Zustand (React State Reducer)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إدارة حالة البحث والفلترة والترتيب في صفحة الاستكشاف باستخدام `useReducer` أو مخزن Zustand خفيف.

## لماذا توجد هذه المهمة؟ Why This Task Exists
إدارة الحالات المعقدة المتداخلة (البحث + الصعوبة + الوسوم + الترتيب) بطريقة تنبؤية ومنظمة تمنع تضارب الـ State.

## المتطلبات السابقة Prerequisites
- TASK-099

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-101, TASK-102

## الهدف Objective
إنشاء `src/store/useFilterStore.ts` أو Reducer مخصص لإدارة فلاتر صفحة استكشاف المشاريع.

## المتطلبات Requirements
- تعريف إجراءات الـ Reducer: `SET_SEARCH`, `SET_DIFFICULTY`, `TOGGLE_TAG`, `SET_SORT`, `RESET_FILTERS`.
- كتابة دالة حساب النتائج المصفاة (Selector) التي تطبق شروط البحث والصعوبة والترتيب معًا.
- ربط حقل البحث وقوائم التصفية بالمخزن المركزي وتحديث النتائج لحظيًا.
- تضمين زر مسح الفلاتر وشريط الرقاقات النشطة.

## متطلبات واجهة المستخدم UI Requirements
استجابة فورية للبحث والفلترة دون أي تأخير بصري.

## متطلبات التجاوب Responsive Requirements
شريط الفلاتر متجاوب ومريح على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث الشارات الدلالية وسمات aria-pressed لأزرار الوسوم.

## الملفات ومناطق العمل Files / Areas
- `src/store/useFilterStore.ts`
- `src/components/ExploreToolbar.tsx`
- `src/pages/ExplorePage.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدام نمط الـ Reducer يجعل تتبع التغييرات وفحص الأخطاء والتوسع المستقبلي في الفلاتر أمرًا بسيطًا وواضحًا.

## معايير القبول Acceptance Criteria
- [ ] جميع عمليات البحث والفلترة والترتيب تعمل بتناغم تام.
- [ ] دالة التصفية المجمعة تعالج كافة الشروط في نفس الوقت بدقة.
- [ ] زر إعادة الضبط يعيد الحالة الأولية بنقرة واحدة.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب كلمة في البحث واختر صعوبة معينة وتأكد من تطبيق الشرطين معًا على النتائج الظاهرة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال إدارة حالة الفلاتر والبحث المتقدم في React.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-100-react-filter-reducer`
- **رسالة الحفظ المقترحة (Commit)**: `feat: manage complex explore filters state using usereducer and zustand store`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم إدارة الحالة المتقدمة عبر نمط الـ Reducer Pattern وتطبيقه في React.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-101
- TASK-102
- TASK-103
