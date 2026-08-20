# TASK-041 — تحديث سنة حقوق النشر تلقائيًا بالـ JS (Dynamic Footer Year Script)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
استخدام كائن التاريخ Date لتحديث سنة حقوق النشر في الفوتر تلقائيًا.

## لماذا توجد هذه المهمة؟ Why This Task Exists
منع تقادم أرقام السنوات في فوتر الموقع وضمان تحديثها بشكل ديناميكي مع كل سنة جديدة.

## المتطلبات السابقة Prerequisites
- TASK-023
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-042, TASK-043

## الهدف Objective
إضافة دالة صغيرة في `src/scripts/main.js` لقراءة وتحديث عنصر السنة في الفوتر.

## المتطلبات Requirements
- إضافة وسم `<span id='current-year'>2026</span>` داخل حقوق النشر في الفوتر.
- استخراج السنة الحالية عبر `new Date().getFullYear()`.
- تحديث نص العنصر إذا كان موجودًا في الـ DOM.

## متطلبات واجهة المستخدم UI Requirements
ظهور رقم السنة الحالية بشكل متناسق مع نص الفوتر.

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
كتابة سنة افتراضية في الـ HTML يضمن ظهور رقم السنة حتى لو كان الـ JavaScript معطلاً في متصفح الزائر.

## معايير القبول Acceptance Criteria
- [ ] السكربت يقرأ السنة الحالية ديناميكيًا.
- [ ] لا تحدث أي أخطاء في حال عدم وجود عنصر الفوتر في الصفحة.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص عنصر الفوتر وتأكد من ظهور السنة الحالية بدقة.

## تعريف الانتهاء للمهمة Definition of Done
تحديث سكربت الفوتر وتأكيد عمله في الصفحة الرئيسية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-041-dynamic-footer-year`
- **رسالة الحفظ المقترحة (Commit)**: `feat: dynamically update footer copyright year using javascript date`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع كائن Date الأساسي وتعديل محتوى عناصر الـ DOM بأمان.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-044
