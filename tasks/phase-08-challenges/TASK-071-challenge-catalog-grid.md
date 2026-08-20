# TASK-071 — بناء دليل كتالوج التحديات البرمجية (Challenge Catalog Grid & Tabs)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء صفحة challenges.html لعرض التحديات البرمجية المصغرة وتصنيفها بتبويبات (HTML, CSS, JS, DOM).

## لماذا توجد هذه المهمة؟ Why This Task Exists
التحديات السريعة اليومية (5-15 دقيقة) تثبت المفاهيم البرمجية المركزة دون الحاجة لبناء مشروع كامل.

## المتطلبات السابقة Prerequisites
- TASK-040
- TASK-044

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-072, TASK-073

## الهدف Objective
إنشاء ملف `src/challenges.html` وتنسيق تبويبات التصنيفات وشبكة بطاقات التحديات.

## المتطلبات Requirements
- إنشاء صفحة `src/challenges.html` بالهيكل الدلالي القياسي وشريط مسار التنقل.
- إضافة شريط تبويبات التصنيف (الكل، تحديات HTML، تحديات CSS، تحديات JavaScript، تحديات الـ DOM).
- تهيئة شبكة عرض التحديات `<div id='challenges-grid' class='challenges-grid'>`.
- ربط التبويبات بنظام تبديل المحتوى التفاعلي.

## متطلبات واجهة المستخدم UI Requirements
صفحة كتالوج ممتعة ذات طابع تحفيزي وشبكة بطاقات تحديات متناسقة.

## متطلبات التجاوب Responsive Requirements
شبكة مرنة تتكيف بين عمود واحد على الموبايل و3 أعمدة على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معايير الـ WAI-ARIA Tabs لشريط تبويبات التصنيف.

## الملفات ومناطق العمل Files / Areas
- `src/challenges.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/explore.html

## ملاحظات التنفيذ Implementation Notes
استخدم مكوّن Tabs المنشأ في TASK-040 لإدارة التبديل بين فئات التحديات.

## معايير القبول Acceptance Criteria
- [ ] صفحة challenges.html منشأة وتعمل بنجاح.
- [ ] التبويبات تبدل التصنيفات بسلاسة.
- [ ] الشبكة متجاوبة وخالية من أخطاء الكونسول.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة challenges.html وانقر على تبويبات التصنيف وتأكد من سلاسة التبديل.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد الهيكل الأساسي لكتالوج التحديات البرمجية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-071-challenge-catalog`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build interactive challenge catalog page layout with category tabs`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إعادة استخدام مكونات التبويبات والشبكات لبناء بوابات تدريبية متخصصة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-072
- TASK-073
