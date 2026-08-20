# TASK-097 — دمج متغيرات التصميم مع أنماط Tailwind / CSS Modules (Tokens to CSS Modules)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
ربط متغيرات الـ Tokens المنشأة سابقًا في tokens.css داخل بيئة React عبر CSS Modules أو Tailwind Config.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الحفاظ على نفس الهوية البصرية ونظام الألوان والمسافات الدقيقة دون إعادة كتابة التنسيقات من الصفر.

## المتطلبات السابقة Prerequisites
- TASK-096

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-098, TASK-099

## الهدف Objective
استيراد ملفات التنسيق الأساسية (reset.css, tokens.css, base.css) داخل نقطة الدخول `src/main.tsx`.

## المتطلبات Requirements
- استيراد `tokens.css` و `reset.css` و `base.css` في `src/main.tsx` لتعمل على مستوى التطبيق بالكامل.
- تهيئة دعم الـ CSS Modules للمكونات (`[name].module.css`) لعزل أسماء الكلاسات محليًا.
- التأكد من قدرة مكونات React على قراءة متغيرات `var(--brand-primary)` و `var(--space-4)` بسلاسة.

## متطلبات واجهة المستخدم UI Requirements
تطابق بصري تام للألوان والخطوط والمسافات مع النسخة السابقة من المشروع.

## متطلبات التجاوب Responsive Requirements
ثبات التجاوب على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
الحفاظ على إطار التركيز focus-visible وتباين الألوان المعتمد.

## الملفات ومناطق العمل Files / Areas
- `src/main.tsx`
- `src/styles/tokens.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
الـ CSS Modules تمنع تصادم أسماء الكلاسات (Class Name Collisions) عبر توليد أسماء عشوائية فريدة تلقائيًا.

## معايير القبول Acceptance Criteria
- [ ] ملفات الـ Tokens تعمل بكفاءة داخل مكونات React.
- [ ] دعم ملفات .module.css يعمل بدون أخطاء في الـ Bundler.
- [ ] الألوان والخطوط تظهر بنفس الدقة والجمال.

## الاختبار والتحقق اليدوي Manual Testing
1. أنشئ مكوّن تجريبي بملف css module وتأكد من تطبيق متغيرات الألوان والمسافات بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تكامل نظام التصميم والـ Tokens مع بيئة React.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-097-tokens-to-react`
- **رسالة الحفظ المقترحة (Commit)**: `feat: integrate design tokens and css modules into react application`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم كيفية عزل التنسيقات Scoped Styles وتطبيق الـ CSS Modules في React.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-098
- TASK-099
- TASK-100
