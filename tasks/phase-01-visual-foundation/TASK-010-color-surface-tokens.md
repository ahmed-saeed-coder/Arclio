# TASK-010 — تحديد متغيرات الألوان والأسطح في Design Tokens (Color & Surface Tokens)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تحديد لوحة الألوان والأسطح والثيم الداكن باستخدام CSS Custom Properties في tokens.css.

## لماذا توجد هذه المهمة؟ Why This Task Exists
استخدام المتغيرات المركزية يمنع تكرار أكواد الألوان الست عشرية (Hex) ويسهل بناء الثيم الليلي والنهاري.

## المتطلبات السابقة Prerequisites
- TASK-009

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-011, TASK-012

## الهدف Objective
هيكلة متغيرات الألوان الأساسية: الخلفيات، الأسطح، الحدود، النصوص، وألوان الهوية والحالات في tokens.css.

## المتطلبات Requirements
- تعريف متغيرات الأسطح: `--bg-primary` (#0a0d12), `--bg-surface` (#121820), `--bg-surface-hover` (#1b222d).
- تعريف متغيرات الحدود: `--border-subtle` (#242e3d), `--border-strong` (#38465c).
- تعريف متغيرات النصوص: `--text-primary` (#f1f5f9), `--text-secondary` (#94a3b8), `--text-muted` (#64748b).
- تعريف متغيرات العلامة التجارية والحالات: `--brand-primary`, `--brand-accent`, `--color-success`, `--color-danger`.

## متطلبات واجهة المستخدم UI Requirements
ألوان عالية التباين تمنح طابعًا تقنيًا حديثًا ومريحًا للعين.

## متطلبات التجاوب Responsive Requirements
الألوان ثابتة وموحدة عبر كافة أحجام الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تحقيق نسبة تباين لا تقل عن 4.5:1 بين نصوص `--text-primary` وخلفية `--bg-primary`.

## الملفات ومناطق العمل Files / Areas
- `src/styles/tokens.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css
- src/styles/layout.css

## ملاحظات التنفيذ Implementation Notes
استخدم أسماء دلالية مثل `--text-secondary` بدلاً من أسماء ألوان مباشرة مثل `--grey-400`.

## معايير القبول Acceptance Criteria
- [ ] جميع المتغيرات معرفة داخل كلاس `:root` في tokens.css.
- [ ] لا توجد أكواد hex مكررة خارج ملف tokens.css.
- [ ] تم فحص التباين اللوني عبر أداة Lighthouse أو WebAIM Contrast Checker.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الصفحة واستخدم أداة فحص العناصر DevTools للتحقق من قراءة المتغيرات داخل :root.
2. غير قيمة --bg-primary وشاهد التغيير الفوري على خلفية الموقع.

## تعريف الانتهاء للمهمة Definition of Done
توثيق واعتماد لوحة متغيرات الألوان في مستندات التصميم ودمج الـ PR.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-010-color-surface-tokens`
- **رسالة الحفظ المقترحة (Commit)**: `feat: define color and surface design tokens`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام CSS Custom Properties لبناء نظام تصميم Design System متكامل.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-012
- TASK-013
- TASK-014
