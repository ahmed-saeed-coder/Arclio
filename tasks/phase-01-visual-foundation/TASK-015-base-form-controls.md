# TASK-015 — تنسيق حقول الإدخال والنماذج الأساسية (Base Form Controls Styling)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء تنسيق موحد لحقول input و select و textarea مع حالات التركيز والأخطاء.

## لماذا توجد هذه المهمة؟ Why This Task Exists
النماذج وحقول البحث هي بوابة إدخال البيانات ويجب أن تكون مريحة للعين وواضحة الحدود.

## المتطلبات السابقة Prerequisites
- TASK-010
- TASK-012

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-014, TASK-016

## الهدف Objective
تطبيق التنسيقات الأساسية لحقول النماذج في base.css مع ربطها بمتغيرات الأسطح والحدود.

## المتطلبات Requirements
- تنسيق عناصر `input[type='text']`, `input[type='search']`, `textarea`, `select` بخلفية `--bg-surface` وحدود `--border-subtle`.
- ضبط لون النص `--text-primary` ولون النص الإرشادي placeholder بـ `--text-muted`.
- تطبيق إطار تركيز مميز عند التركيز `:focus` بلون `--brand-primary` وحدود `--border-strong`.
- تنسيق وسوم `<label>` بخط متوسط وتوفير مسافة سفلية تفصلها عن الحقل.

## متطلبات واجهة المستخدم UI Requirements
حقول إدخال أنيقة ذات طابع داكن حديث بارتفاع لا يقل عن 42px.

## متطلبات التجاوب Responsive Requirements
الحقول تأخذ عرض 100% داخل حاوياتها لمنع تجاوز العرض على شاشات الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير ارتباط دلالي بين كل وسم label وحقل الإدخال المقابل له عبر خاصيتي for و id.

## الملفات ومناطق العمل Files / Areas
- `src/styles/base.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
تجنب إزالة إطار التركيز الافتراضي بدون توفير بديل واضح وعالي التباين.

## معايير القبول Acceptance Criteria
- [ ] حقول الإدخال تتبع نظام ألوان الثيم الداكن بدقة.
- [ ] حالة التركيز :focus واضحة وتلفت انتباه المستخدم.
- [ ] النصوص داخل الحقول واضحة ومقروءة بنسبة تباين ممتازة.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر داخل حقل إدخال ولاحظ إضاءة الحدود بلون الـ brand.
2. اكتب نصًا وتأكد من وضوح اللون وتناسق المسافات الداخلية padding.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد أنماط حقول النماذج الأساسية في base.css.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-015-form-controls`
- **رسالة الحفظ المقترحة (Commit)**: `feat: style base form inputs and controls`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان تنسيق عناصر النماذج وتأمين تجربة إدخال بيانات مريحة ومطابقة للمعايير.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-016
- TASK-029
- TASK-030
