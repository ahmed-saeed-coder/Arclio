# TASK-039 — بناء القائمة التفاعلية القابلة للطي Accordion (Interactive Accordion Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء قائمة أسئلة وأجوبة قابلة للفتح والطي باستخدام عنصر details/summary أو أزرار ARIA المخصصة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تُستخدم القوائم القابلة للطي لعرض شجرة المناهج والوحدات والأسئلة الشائعة FAQ دون ملء الشاشة.

## المتطلبات السابقة Prerequisites
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-038, TASK-040

## الهدف Objective
إنشاء `src/scripts/accordion.js` و `src/styles/components/accordion.css` لتنظيم عناصر الأكورديون.

## المتطلبات Requirements
- بناء هيكل القائمة باستخدام أزرار `<button class='accordion-trigger' aria-expanded='false'>` وألواح `<div class='accordion-panel' hidden>`.
- كتابة دالة JavaScript لتبديل حالة الفتح والإغلاق وتحديث سمة `aria-expanded` وإزالة خاصية `hidden`.
- دعم خيار إغلاق الألواح الأخرى تلقائيًا عند فتح لوح جديد (Single Open Mode).
- استيراد التنسيقات في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
سهم جانبي يدور بزاوية 180 درجة عند فتح اللوح مع انزلاق ناعم للمحتوى.

## متطلبات التجاوب Responsive Requirements
عرض كامل 100% ومتجاوب مع كافة أحجام الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
ربط أزرار التحكم بالألواح عبر سمات `aria-controls` و `id`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/accordion.js`
- `src/styles/components/accordion.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم خاصية `hidden` الأصلية في HTML لإخفاء المحتوى تمامًا عن شجرة إمكانية الوصول عند الإغلاق.

## معايير القبول Acceptance Criteria
- [ ] الألواح تفتح وتغلق بنقرة واحدة بسلاسة تامة.
- [ ] دوران سهم الأيقونة يعمل بالـ CSS Transition.
- [ ] سمات الـ ARIA تتحدث في الوقت الفعلي.

## الاختبار والتحقق اليدوي Manual Testing
1. اضغط على عناصر الأكورديون بالماوس وبالكيبورد (Enter/Space) وتأكد من الفتح والإغلاق.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن الأكورديون التفاعلي لاستخدامه في المناهج والدروس.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-039-interactive-accordion`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement accessible interactive accordion component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مكونات الإظهار والإخفاء المشروطة وإدارتها عبر JavaScript و ARIA.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-059
