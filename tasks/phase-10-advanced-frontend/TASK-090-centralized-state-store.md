# TASK-090 — بناء مخزن الحالة المركزي بنمط Pub/Sub (Centralized State Store Pub/Sub)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء مخزن مركزي للحالة `src/store/state.js` بنمط النشر والاشتراك (Publish/Subscribe Event Bus) لمزامنة البيانات بين المكونات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مشاركة الحالة (مثل: عدد المشاريع المفضلة، حالة الثيم، نقاط الـ XP) بين مكونات مختلفة دون تمريرها يدويًا.

## المتطلبات السابقة Prerequisites
- TASK-089

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-091, TASK-092

## الهدف Objective
إنشاء `src/store/state.js` وتوفير دوال `getState()`, `setState(newState)`, `subscribe(listener)`.

## المتطلبات Requirements
- بناء كائن الحالة المركزي `initialState` متضمنًا الثيم والمفضلة ونقاط الـ XP وفلاتر البحث.
- كتابة دالة `subscribe(listener)` التي تضيف دالة استماع وتُعيد دالة لإلغاء الاشتراك Unsubscribe.
- كتابة دالة `setState(partialState)` التي تدمج التغييرات وتبلغ جميع المشتركين تلقائيًا.
- تحديث عدادات الهيدر تلقائيًا فور تغير الحالة في أي صفحة.

## متطلبات واجهة المستخدم UI Requirements
تحديث فوري لعدادات الواجهة (مثل شارة عدد المشاريع المفضلة في الهيدر) بدون إعادة تحميل.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث الشارات الدلالية في الوقت الفعلي.

## الملفات ومناطق العمل Files / Areas
- `src/store/state.js`
- `src/scripts/app.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
نمط Pub/Sub هو الأساس الفكري الذي بُنيت عليه مكتبات إدارة الحالة الشهيرة مثل Redux و Zustand.

## معايير القبول Acceptance Criteria
- [ ] المخزن المركزي يدير الحالة بسلاسة بنمط النشر والاشتراك.
- [ ] المكونات تشترك في التغييرات وتستجيب فورًا لتحديثات الحالة.
- [ ] دالة unsubscribe تمنع تسريب الذاكرة Memory Leaks.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ `setState({ favorites: ['p1', 'p2'] })` من الكونسول وشاهد تحديث شارة الهيدر فورًا.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مخزن الحالة المركزي واعتماده في تفاعلات المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-090-pubsub-state-store`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create centralized reactive state store using publish subscribe pattern`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم أنماط التصميم المعمارية Design Patterns وإدارة الحالة المركزية Reactive State Management.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-091
- TASK-092
- TASK-093
