# TASK-040 — بناء نظام التبويبات التفاعلية مع دعم الكيبورد (Accessible Tabs System)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تبديل المحتوى بين التبويبات مع دعم التنقل بمفاتيح الأسهم في الكيبورد (Arrow Navigation).

## لماذا توجد هذه المهمة؟ Why This Task Exists
تُستخدم التبويبات في كتالوج التحديات، محرر الأكواد متعدد اللغات، وتفاصيل المشاريع.

## المتطلبات السابقة Prerequisites
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-038, TASK-039

## الهدف Objective
إنشاء `src/scripts/tabs.js` و `src/styles/components/tabs.css` لتطبيق نمط WAI-ARIA Tabs.

## المتطلبات Requirements
- بناء الهيكل الدلالي: `<div role='tablist'>`, `<button role='tab' aria-selected='true'>`, `<div role='tabpanel'>`.
- كتابة دالة التبديل لإخفاء الألواح غير النشطة وتحديث `aria-selected` و `tabindex`.
- دعم التنقل بين أزرار التبويبات باستخدام مفاتيح الأسهم (ArrowRight, ArrowLeft).
- استيراد التنسيقات في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
شريط تبويبات أنيق بحد سفلي نشط يبرز التبويب الحالي بلون `--brand-primary`.

## متطلبات التجاوب Responsive Requirements
شريط تبويبات يدعم التمرير الأفقي الناعم على شاشات الموبايل إذا زاد عدد التبويبات.

## متطلبات إمكانية الوصول Accessibility Requirements
استيفاء نمط W3C ARIA Authoring Practices الخاص بالـ Tabs بالكامل.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/tabs.js`
- `src/styles/components/tabs.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
اجعل التبويب النشط فقط يحمل `tabindex='0'` بينما التبويبات الأخرى تحمل `tabindex='-1'` لتمكين التنقل بالأسهم.

## معايير القبول Acceptance Criteria
- [ ] تبديل المحتوى يتم فورًا وبدون وميض أو إعادة تحميل.
- [ ] التنقل بالأسهم يغير التبويب النشط بسلاسة تامة.
- [ ] تم تطبيق سمات role='tablist' و role='tab' و role='tabpanel'.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر على التبويبات بالماوس وتأكد من تبدل المحتوى المقابل.
2. استخدم مفاتيح الأسهم في الكيبورد وتأكد من انتقال التركيز وتفعيل التبويب.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن التبويبات التفاعلي لمحرر الأكواد وكتالوج التحديات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-040-accessible-tabs`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create fully accessible tabs component with keyboard arrow navigation`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تطبيق المعايير المتقدمة لأنماط WAI-ARIA Design Patterns وإدارة أحداث الكيبورد المعقدة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-071
- TASK-075
