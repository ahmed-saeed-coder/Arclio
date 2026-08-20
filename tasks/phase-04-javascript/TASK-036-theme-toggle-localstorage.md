# TASK-036 — بناء زر تبديل الثيم الداكن والفاتح مع LocalStorage (Dark/Light Theme Toggle)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تطبيق تبديل الثيم عبر تعديل خصائص CSS على عنصر html وحفظ اختيار المستخدم في LocalStorage.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير راحة بصرية للمطور باختيار الثيم المناسب لبيئة إضاءته وحفظ تفضيله تلقائيًا للزيارات القادمة.

## المتطلبات السابقة Prerequisites
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-037, TASK-038

## الهدف Objective
إنشاء ملف `src/scripts/theme.js` وبناء منطق تبديل الثيم والتحقق من التفضيل المحفوظ.

## المتطلبات Requirements
- إنشاء زر تبديل الثيم `<button id='theme-toggle' class='btn btn-secondary' aria-label='تبديل المظهر'>` في الهيدر.
- كتابة دالة `toggleTheme()` التي تضيف أو تزيل سمة `data-theme='light'` من عنصر `<html>`.
- حفظ القيمة المختارة في `localStorage.setItem('arclio_theme', theme)` داخل كتلة `try...catch`.
- قراءة الثيم المحفوظ عند بدء التحميل وتطبيقه فورًا لمنع وميض الشاشة الأبيض.

## متطلبات واجهة المستخدم UI Requirements
أيقونة شمس / قمر تتغير عند النقر مع انتقال ناعم لألوان الخلفيات والنصوص.

## متطلبات التجاوب Responsive Requirements
موضع مناسب للزر داخل هيدر الموقع في الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث السمة `aria-label` لتوضح الحالة الحالية بدقة (مثل: 'التبديل إلى الوضع الفاتح').

## الملفات ومناطق العمل Files / Areas
- `src/scripts/theme.js`
- `src/styles/tokens.css`
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
استخدم `try...catch` حول `localStorage` دائمًا لتجنب توقف السكربت لو كان المستخدم في وضع التصفح المتخفي.

## معايير القبول Acceptance Criteria
- [ ] الزر يبدل ألوان الموقع بالكامل بنجاح بين الوضعين.
- [ ] إعادة تحميل الصفحة تحافظ على الثيم المختار من الـ LocalStorage.
- [ ] لا توجد أخطاء في الكونسول أثناء التبديل.

## الاختبار والتحقق اليدوي Manual Testing
1. اضغط على زر الثيم وشاهد تغير ألوان الخلفيات.
2. أعد تحميل الصفحة وتأكد من بقاء الثيم الذي اخترته.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال ميزة الثيم الليلي/النهاري وحفظها محليًا.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-036-theme-toggle`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement dark and light theme toggle with localstorage persistence`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان التعامل مع خصائص البيانات data attributes والتخزين المحلي localStorage في المتصفح.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-039
- TASK-040
