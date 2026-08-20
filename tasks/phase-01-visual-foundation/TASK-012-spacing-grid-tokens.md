# TASK-012 — تحديد متغيرات المسافات وشبكة 8px (Spacing & Sizing Tokens)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
بناء مقياس المسافات المعتمد على مضاعفات 8px في tokens.css.

## لماذا توجد هذه المهمة؟ Why This Task Exists
استخدام نظام مسافات منتظم يمنع العشوائية في الهوامش paddings & margins ويخلق إيقاعًا بصريًا متناغمًا.

## المتطلبات السابقة Prerequisites
- TASK-010

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-011, TASK-013

## الهدف Objective
تعريف متغيرات المسافات من `--space-1` (4px) وحتى `--space-16` (64px) وانحناء الحواف `--radius-*`.

## المتطلبات Requirements
- تعريف متغيرات المسافات: `--space-1` (0.25rem), `--space-2` (0.5rem), `--space-3` (0.75rem), `--space-4` (1rem), `--space-6` (1.5rem), `--space-8` (2rem), `--space-12` (3rem), `--space-16` (4rem).
- تعريف انحناء الحواف: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-full` (9999px).

## متطلبات واجهة المستخدم UI Requirements
مسافات وهوامش متناسقة تفصل بين العناصر والبطاقات بوضوح.

## متطلبات التجاوب Responsive Requirements
إمكانية استخدام قيم مسافات مرنة تتناغم مع الشاشات الصغيرة والكبيرة.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير مساحات لمس كافية لا تقل عن 44px للأزرار والعناصر القابلة للنقر.

## الملفات ومناطق العمل Files / Areas
- `src/styles/tokens.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/base.css

## ملاحظات التنفيذ Implementation Notes
ممنوع استخدام أرقام عشوائية مثل `margin: 17px`؛ استخدم دائمًا `var(--space-4)`.

## معايير القبول Acceptance Criteria
- [ ] مقياس المسافات مبني بالكامل على قاعدة 8px grid.
- [ ] متغيرات انحناء الحواف موحدة ومتاحة في tokens.css.
- [ ] تم اختبار المتغيرات وتأكيد سهولة استدعائها.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص كلاسات الأزرار والبطاقات وتأكد من اعتمادها على var(--space-*) في الـ padding.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال منظومة متغيرات المسافات وانحناء الحواف في tokens.css.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-012-spacing-tokens`
- **رسالة الحفظ المقترحة (Commit)**: `feat: define spacing and border-radius design tokens`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
استيعاب أهمية الـ 8pt Grid System في تصميم واجهات المستخدم الاحترافية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-013
- TASK-014
- TASK-015
