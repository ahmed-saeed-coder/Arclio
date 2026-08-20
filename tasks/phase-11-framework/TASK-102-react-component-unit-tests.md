# TASK-102 — كتابة اختبارات المكونات البرمجية بـ Vitest و Testing Library (React Component Tests)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تهيئة بيئة الاختبارات الآلية بـ Vitest و React Testing Library وكتابة اختبارات وحدات لمكونات Button و ProjectCard.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان عدم انكسار سلوك المكونات عند تعديل الكود مستقبلاً وترسيخ ثقافة الاختبارات الآلية لدى الفريق.

## المتطلبات السابقة Prerequisites
- TASK-098
- TASK-100

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-103

## الهدف Objective
إنشاء ملفات الاختبار `src/components/ui/__tests__/Button.test.tsx` و `src/components/__tests__/ProjectCard.test.tsx`.

## المتطلبات Requirements
- تثبيت وإعداد حزم الاختبار: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
- كتابة اختبار لمكوّن Button يتأكد من رندرة النص وتطبيق الكلاس المناسب واستجابة حدث النقر `onClick`.
- كتابة اختبار لمكوّن ProjectCard يتأكد من ظهور اسم المشروع وشارة الصعوبة والوسوم التقنية بدقة.
- إضافة أمر الاختبار 'test': 'vitest run' داخل ملف package.json.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (اختبارات آلية تعمل في الطرفية Terminal).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
استخدام محددات سهولة الوصول في الاختبارات (مثل `screen.getByRole('button')`, `screen.getByText()`).

## الملفات ومناطق العمل Files / Areas
- `src/components/ui/__tests__/Button.test.tsx`
- `src/components/__tests__/ProjectCard.test.tsx`
- `vitest.config.ts`
- `package.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
كتابة الاختبارات باستخدام `getByRole` تحاكي تجربة المستخدم الحقيقي وتجبرك على كتابة كود دلالي سليم.

## معايير القبول Acceptance Criteria
- [ ] أمر `npm test` يشغل الاختبارات ويجتازها بنجاح 100%.
- [ ] الاختبارات تفحص رندرة المكونات والأحداث والحالات المختلفة.
- [ ] لا توجد تحذيرات أو أخطاء في الـ Test Runner.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `npm test` في الطرفية وتأكد من ظهور علامات النجاح الخضراء لجميع الاختبارات.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال بنية اختبارات المكونات الآلية واجتيازها بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `test/task-102-react-component-tests`
- **رسالة الحفظ المقترحة (Commit)**: `test: setup vitest and react testing library with unit tests for core components`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم واحتراف كتابة اختبارات الوحدات Unit Testing واستخدام أدوات Testing Library الحديثة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-103
- TASK-104
