# TASK-026 — بناء مكوّن الشارات وحالات المهام (Status & Skill Badges Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء شارات مستويات الصعوبة وحالات المهام (Ready, In Progress, Done) في ملف مكون مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الشارات Badges توفر تمييزًا بصريًا سريعًا لحالة التذاكر، مستويات الصعوبة، والوسوم التقنية للمشاريع.

## المتطلبات السابقة Prerequisites
- TASK-024

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-025, TASK-027

## الهدف Objective
إنشاء ملف `src/styles/components/badge.css` وتعريف أنماط الشارات الدلالية.

## المتطلبات Requirements
- بناء الكلاس الأساسي `.badge` بخط صغير `--text-xs` وانحناء حواف كامل `--radius-full` وعرض مضغوط.
- بناء شارات الحالات: `.badge-ready` (أزرق)، `.badge-progress` (برتقالي)، `.badge-done` (أخضر).
- بناء شارات الصعوبة: `.badge-beginner`, `.badge-intermediate`, `.badge-advanced`.
- استيراد الملف داخل `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
شارات صغيرة أنيقة بخلفيات شبه شفافة وحدود دقيقة متناسقة مع لون النص.

## متطلبات التجاوب Responsive Requirements
حجم خط ثابت لا يتشوه على الشاشات الصغيرة.

## متطلبات إمكانية الوصول Accessibility Requirements
الاعتماد على نص الشارة بجانب اللون لضمان وضوح المعنى لفاقدي تمييز الألوان.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/badge.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم خلفيات بدرجة شفافية مثل `rgba(59, 130, 246, 0.15)` مع نص بلون نقي `--brand-primary` لإعطاء مظهر عصري.

## معايير القبول Acceptance Criteria
- [ ] ملف badge.css يحتوي على كافة الشارات الأساسية للمنصة.
- [ ] الشارات تعرض تباينًا لونيًا ممتازًا ومريحًا للعين.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر مظهر الشارات المختلفة وتأكد من تناسق أحجامها ومسافاتها الداخلية.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن الشارات للاستخدام في بطاقات المشاريع والتحديات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-026-status-badges`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create status and skill badge component library`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم شارات الحالة واستخدام الألوان شبه الشفافة في تنسيقات الـ UI الحديثة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-033
- TASK-045
- TASK-068
