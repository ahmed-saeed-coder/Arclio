# TASK-031 — بناء مكوّن الحالة الفارغة (Empty State Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء مكوّن يعرض رسالة توضيحية وأيقونة عندما لا توجد نتائج للبحث أو تصفية البيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الحالة الفارغة تمنع شعور المستخدم بالارتباك وتقدم له إرشادًا واضحًا للخطوة التالية (مثل: زر مسح الفلاتر).

## المتطلبات السابقة Prerequisites
- TASK-027

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-032, TASK-033

## الهدف Objective
إنشاء ملف `src/styles/components/empty-state.css` وتنسيق الحاوية والأيقونة والنصوص الإرشادية.

## المتطلبات Requirements
- بناء كلاس `.empty-state` بمحاذاة مركزية ومسافات عمودية `padding: var(--space-12)`.
- تنسيق أيقونة الحالة الفارغة `.empty-state-icon` بحجم كبير ولون مموه `--text-muted`.
- تنسيق العنوان الفرعي `.empty-state-title` والفقرة الإرشادية وزر الإجراء المقترح.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
مظهر هادئ وأنيق يتوسط منطقة النتائج مع زر مباشر لإعادة ضبط البحث.

## متطلبات التجاوب Responsive Requirements
تتجاوب الحاوية مع كافة أحجام الشاشات وتتوسط منطقة العرض.

## متطلبات إمكانية الوصول Accessibility Requirements
استخدام وسم دلالي واضح لعنوان الحالة الفارغة.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/empty-state.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
الحالة الفارغة جزء حيوي من تجربة المستخدم ولا تقل أهمية عن عرض البيانات الممتلئة.

## معايير القبول Acceptance Criteria
- [ ] المكون منسق في ملف مستقل ومستورد في main.css.
- [ ] يحتوي على أيقونة وعنوان ووصف وزر إجراء اختياري.
- [ ] تم اختبار المظهر وتأكيد توسيط العناصر.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر المكون في مساحة فارغة وتأكد من محاذاة الأيقونة والنصوص في المنتصف.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن Empty State للاستخدام في صفحات البحث والمشاريع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-031-empty-state`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create reusable empty state component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم وإدارة حالات واجهة المستخدم البديلة (Zero-Data UI States).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-054
