# TASK-032 — بناء مكوّن عناصر التحميل الهيكلية (Skeleton Loading Placeholder)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء تأثير وميض ناعم بالـ CSS (Shimmer Animation) لمحاكاة تحميل البطاقات والبيانات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
شاشات التحميل الهيكلية تعطي انطباعًا بسرعة التطبيق وتقلل من شعور المستخدم ببطء الشبكة.

## المتطلبات السابقة Prerequisites
- TASK-027

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-031, TASK-033

## الهدف Objective
إنشاء ملف `src/styles/components/skeleton.css` وبناء كلاسات `.skeleton` مع كود حركة @keyframes.

## المتطلبات Requirements
- بناء كود حركة `@keyframes shimmer` يتدرج في الألوان بين `--bg-surface` و `--bg-surface-hover`.
- تعريف فئات هيكلية: `.skeleton-text`, `.skeleton-title`, `.skeleton-avatar`, `.skeleton-badge`.
- تطبيق انحناء الحواف المناسب لكل فئة لتطابق المكونات الحقيقية.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
حركة وميض رمادية ناعمة ومريحة للعين تتكرر بشكل لا نهائي.

## متطلبات التجاوب Responsive Requirements
تطابق أحجام الهياكل مع أحجام البطاقات الحقيقية على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
احترام تفضيل المستخدم لتقليل الحركة `@media (prefers-reduced-motion)` بإيقاف الوميض وإبقاء لون ثابت.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/skeleton.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم استعلام `prefers-reduced-motion` لدعم مستخدمي إمكانية الوصول الذين يعانون من الدوار الدهليزي.

## معايير القبول Acceptance Criteria
- [ ] حركة الوميض تعمل بسلاسة بدون استهلاك مفرط للمعالج.
- [ ] دعم استعلام prefers-reduced-motion مطبق بنجاح.
- [ ] تم استيراد الملف في main.css.

## الاختبار والتحقق اليدوي Manual Testing
1. شاهد حركة الوميض في المتصفح وتأكد من انسيابية التدرج اللوني.
2. فعل وضع تقليل الحركة في إعدادات النظام وتأكد من توقف الأنيميشن.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن Skeleton Loading للاستخدام أثناء جلب البيانات غير المتزامنة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-032-skeleton-loading`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create skeleton loading shimmer animation component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان كتابة حركات CSS Keyframes وتطبيق استعلامات إمكانية الوصول prefers-reduced-motion.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-093
