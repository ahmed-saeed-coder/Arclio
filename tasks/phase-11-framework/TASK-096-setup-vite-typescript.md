# TASK-096 — تهيئة بيئة العمل الحديثة باستخدام Vite و TypeScript (Setup Vite & TypeScript)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تهيئة مشروع Vite مع React 19 و TypeScript وضبط إعدادات tsconfig.json بدون تعقيدات زائدة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير بيئة تطوير سريعة جدًا تدعم الـ Hot Module Replacement (HMR) والتدقيق الصارم للأنواع البرمجية Type Checking.

## المتطلبات السابقة Prerequisites
- TASK-095

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-097, TASK-098

## الهدف Objective
إنشاء ملفات التكوين `package.json`, `vite.config.ts`, `tsconfig.json`, ونقطة الدخول `src/main.tsx`.

## المتطلبات Requirements
- تهيئة حزم المشروع: `react`, `react-dom`, `typescript`, `@types/react`, `vite`.
- ضبط ملف `tsconfig.json` بالوضع الصارم `strict: true` ودعم JSX الحديث `jsx: react-jsx`.
- تهيئة ملف `vite.config.ts` مع إضافة مسارات الاختصار `@/` لتسهيل الاستيراد.
- إنشاء الملف الأساسي `src/main.tsx` ورندرة مكوّن تجريبي بسيط للتأكد من نجاح التهيئة.

## متطلبات واجهة المستخدم UI Requirements
تشغيل خادم التطوير وظهور صفحة البداية بـ React على localhost:5173.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
استخدم `npm create vite@latest` كمرجع لتهيئة ملفات الـ TypeScript النظيفة.

## معايير القبول Acceptance Criteria
- [ ] أمر `npm run dev` يشغل التطبيق بسرعة وبدون أخطاء.
- [ ] أمر `npm run build` ينفذ فحص الـ TypeScript Type Check بنجاح ويولد مجلد dist.
- [ ] لا توجد أخطاء في الـ TypeScript Compiler.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل خادم التطوير المحلي وتأكد من رندرة صفحة React وظهور ميزة الـ HMR عند تعديل كود App.tsx.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تهيئة بيئة العمل بـ Vite و TypeScript وجاهزيتها لبناء المكونات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-096-setup-vite-typescript`
- **رسالة الحفظ المقترحة (Commit)**: `feat: initialize modern vite build tooling and typescript configuration`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان إعداد أدوات البناء الحديثة Vite وفهم إعدادات الـ TypeScript Compiler.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-097
- TASK-098
- TASK-099
