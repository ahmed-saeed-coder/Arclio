# TASK-035 — تهيئة ملف JavaScript ونظام Strict Mode (JS Setup & Strict Mode)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
ربط السكربتات بأمان وتطبيق 'use strict' وحدث DOMContentLoaded كمدخل أساسي للتفاعل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان عدم تشغيل أي كود برمجي قبل اكتمال تحميل شجرة الـ DOM وتجنب أخطاء المتغيرات العامة.

## المتطلبات السابقة Prerequisites
- TASK-024
- TASK-034

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-036, TASK-037

## الهدف Objective
مراجعة وتهيئة ملف `src/scripts/main.js` ليكون نقطة الانطلاق المركزية لتفاعلات الموقع.

## المتطلبات Requirements
- التأكد من وجود `'use strict';` في السطر الأول من السكربت.
- تغليف منطق التشغيل داخل مستمع الحدث `document.addEventListener('DOMContentLoaded', () => { ... });`.
- ربط السكربت في نهاية صفحة `src/index.html` مع خاصية `defer`.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/main.js`
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
خاصية `defer` تضمن تحميل السكربت في الخلفية وتنفيذه فقط بعد اكتمال قراءة هيكل الصفحة بالكامل.

## معايير القبول Acceptance Criteria
- [ ] السكربت يطبق الوضع الصارم Strict Mode.
- [ ] كود التهيئة يعمل بعد اكتمال بناء الـ DOM.
- [ ] طباعة رسالة ترحيبية مهنية في الكونسول لتأكيد التشغيل.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح كونسول المتصفح وتأكد من ظهور رسالة تهيئة منصة ARCLIO بدون أي أخطاء.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد نقطة انطلاق كود JavaScript في المشروع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-035-js-strict-setup`
- **رسالة الحفظ المقترحة (Commit)**: `feat: initialize javascript entrypoint with strict mode baseline`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم دور Strict Mode وحدث DOMContentLoaded وخاصية defer في المتصفح.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-036
- TASK-037
- TASK-038
