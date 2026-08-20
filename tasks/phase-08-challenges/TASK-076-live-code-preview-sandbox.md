# TASK-076 — بناء إطار المعاينة الحية الآمن Iframe Sandbox (Live Code Preview Sandbox)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
دمج كود HTML و CSS و JS وحقنه بأمان داخل `<iframe sandbox='allow-scripts'>` لعرض المعاينة الحية الفورية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
عزل كود الطالب داخل بيئة معزولة Sandbox لمنع أي كود خبيث أو أخطاء من التأثير على موقع ARCLIO الرئيسي.

## المتطلبات السابقة Prerequisites
- TASK-075

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-077, TASK-078

## الهدف Objective
إنشاء `src/scripts/playground-preview.js` لبناء دالة تحديث المعاينة الحية `updatePreview()`.

## المتطلبات Requirements
- إنشاء عنصر `<iframe id='preview-frame' sandbox='allow-scripts'>` داخل لوحة المعاينة.
- كتابة دالة `generatePreviewDocument(html, css, js)` التي تدمج الأكواد الثلاثة في مستند HTML كامل.
- حقن المستند في الـ iframe باستخدام `srcdoc` أو `iframe.contentDocument`.
- تحديث المعاينة تلقائيًا عند تعديل الكود مع تطبيق تقنية Debounce (500ms).

## متطلبات واجهة المستخدم UI Requirements
لوحة معاينة بيضاء أو داكنة تعرض النتيجة الحية للمشروع في الوقت الفعلي مع شريط حالة سفلي.

## متطلبات التجاوب Responsive Requirements
شاشة المعاينة تدعم التبديل بين أبعاد الموبايل (375px) والديسكتوب (100%).

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين عنوان دلالي `title='معاينة نتيجة الكود'` لعنصر الـ iframe.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/playground-preview.js`
- `src/challenge-playground.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
خاصية `sandbox='allow-scripts'` تسمح بتشغيل السكربتات مع منع الوصول لكوكيز وسياق الصفحة الأم لمنع هجمات XSS.

## معايير القبول Acceptance Criteria
- [ ] المعاينة تعرض نتيجة كود HTML و CSS فورًا.
- [ ] كود JavaScript ينفذ بأمان داخل الـ iframe.
- [ ] بيئة الـ iframe معزولة تمامًا عن المستند الرئيسي.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب `<h1>مرحبًا ARCLIO</h1>` في محرر الـ HTML وتأكد من ظهورها في لوحة المعاينة فورًا.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال بيئة المعاينة الحية الآمنة في الـ Playground.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-076-live-preview-sandbox`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement secure iframe sandboxed live code preview engine`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم أمان الويب وهندسة الـ Iframe Sandboxing والعزل البرمجي في المتصفح.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-077
- TASK-078
