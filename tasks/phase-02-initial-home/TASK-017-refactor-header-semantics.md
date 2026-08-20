# TASK-017 — تحسين الهيكل الدلالي للهيدر وقائمة التنقل (Refactor Header HTML & Nav)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
استخدام عناصر header و nav و ul دلالية وتوفير aria-label مناسب لقائمة التنقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الهيدر الدلالي يسهل فهرسة الموقع ويساعد قارئات الشاشة في مساعدة الكفيف على التنقل بين الصفحات.

## المتطلبات السابقة Prerequisites
- TASK-013
- TASK-016

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-020, TASK-023

## الهدف Objective
مراجعة كود الهيدر في index.html والتأكد من توافق البنية مع المعايير القياسية في HTML-GUIDE.

## المتطلبات Requirements
- استخدام عنصر `<header class='site-header'>` يحتوي على `<div class='container header-inner'>`.
- تغليف روابط التنقل داخل `<nav class='site-nav' aria-label='التنقل الأساسي'>`.
- استخدام قائمة نقطية غير مرتبة `<ul>` و `<li>` لعناصر الروابط.
- إضافة وسم `aria-label='ARCLIO الصفحة الرئيسية'` على رابط الشعار.

## متطلبات واجهة المستخدم UI Requirements
هيكل تنظيمي نظيف يتماشى مع التنسيقات في layout.css.

## متطلبات التجاوب Responsive Requirements
الهيكل قابل للتكيف مع شاشات الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديد معالم الصفحة الدلالية Landmarks بوضوح عبر وسمي header و nav.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/scripts/main.js

## ملاحظات التنفيذ Implementation Notes
استخدام القوائم `<ul>` داخل `<nav>` يعطي قارئ الشاشة معلومة عن عدد الروابط المتاحة (مثال: 'قائمة من 3 عناصر').

## معايير القبول Acceptance Criteria
- [ ] كود HTML خالٍ من الـ divs غير الضرورية.
- [ ] وسم nav يحتوي على سمة aria-label واضحة.
- [ ] تم التحقق من صحة الكود عبر W3C HTML Validator.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص هيكل الـ DOM في المتصفح وتأكد من تسلسل العناصر header > container > nav > ul > li > a.

## تعريف الانتهاء للمهمة Definition of Done
دمج الهيكل الدلالي المحسن للهيدر في الفرع الرئيسي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-017-header-semantics`
- **رسالة الحفظ المقترحة (Commit)**: `feat: refactor semantic header and navigation markup`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تطبيق معايير HTML5 الدلالية وقواعد إمكانية الوصول في مكونات التنقل.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-018
- TASK-019
