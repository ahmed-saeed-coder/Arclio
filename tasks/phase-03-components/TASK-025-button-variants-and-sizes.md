# TASK-025 — بناء متغيرات أحجام وأنماط الأزرار (Button Variants & Sizes)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إضافة أزرار Ghost و Outline وأزرار الخطر Danger وأحجام sm, md, lg في ملف مكون مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
يحتاج النظام لخيارات متعددة من الأزرار تناسب الإجراءات الأساسية والثانوية والتحذيرية عبر المنصة.

## المتطلبات السابقة Prerequisites
- TASK-024

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-026, TASK-027

## الهدف Objective
إنشاء ملف `src/styles/components/button.css` وتعريف كافة المتغيرات والأحجام.

## المتطلبات Requirements
- إنشاء كلاس `.btn-outline` بحدود `--border-strong` وخلفية شفافة وتأثير hover سطح مموه.
- إنشاء كلاس `.btn-ghost` بدون حدود ولا خلفية مع تأثير hover ناعم.
- إنشاء كلاس `.btn-danger` بخلفية حمراء `--color-danger` للإجراءات الحساسة.
- تعريف الأحجام: `.btn-sm` (حشوة صغيرة وخط 12px), `.btn-md` (الحجم القياسي), `.btn-lg` (حشوة كبيرة وخط 18px).
- استيراد الملف الجديد داخل `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
أزرار بأشكال وأحجام واضحة ومتناسقة مع خطوط وألوان نظام التصميم.

## متطلبات التجاوب Responsive Requirements
الأزرار تحتفظ بارتفاع ونسب متناسقة على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحقيق تباين لوني لا يقل عن 4.5:1 لجميع أنماط الأزرار.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/button.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
فصل كود المكون في ملف مستقل `components/button.css` يساعد أعضاء الفريق على العمل بدون تعارض ملفات.

## معايير القبول Acceptance Criteria
- [ ] تم إنشاء ملف components/button.css واستيراده بنجاح في main.css.
- [ ] جميع المتغيرات (outline, ghost, danger) والأحجام (sm, md, lg) تعمل بشكل سليم.
- [ ] حالات :hover و :focus-visible و :active مطبقة لجميع الأنماط.

## الاختبار والتحقق اليدوي Manual Testing
1. أنشئ عناصر تجريبية لكل زر وتأكد من تطبيق التنسيقات والأحجام المختلفة بشكل سليم.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مكتبة الأزرار الموحدة واستيرادها في ملف التنسيقات الرئيسي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-025-button-variants`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create button variants and sizing component library`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مكوّن UI متعدد الأنماط والأحجام بنظام معيار BEM/Utility المنظم.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-028
- TASK-034
