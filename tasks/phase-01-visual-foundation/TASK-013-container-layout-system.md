# TASK-013 — بناء نظام الحاوية المركزية والشبكة (Container & Layout System)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء كلاس .container متجاوب وممركز للشاشات المختلفة مع هوامش جانبية آمنة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الحاوية المركزية تمنع تمدد محتوى الموقع بشكل مفرط على الشاشات العريضة وتحافظ على تجربة قراءة مريحة.

## المتطلبات السابقة Prerequisites
- TASK-012

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-014, TASK-015

## الهدف Objective
كتابة تنسيق .container في layout.css مع ضبط max-width و margin-inline والهوامش التجاوبية.

## المتطلبات Requirements
- تعريف `--container-max-width: 1200px` في tokens.css.
- تطبيق `width: 100%; max-width: var(--container-max-width); margin-inline: auto;` على `.container`.
- إضافة هوامش داخلية جانبية: `padding-inline: var(--space-4)` للموبايل وتوسيعها إلى `var(--space-8)` للشاشات الأكبر من 768px.

## متطلبات واجهة المستخدم UI Requirements
محتوى الصفحة محصور في المنتصف مع مساحات بيضاء متساوية على اليمين واليسار في الشاشات الكبيرة.

## متطلبات التجاوب Responsive Requirements
عدم التصاق المحتوى بحواف الشاشة على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
تسهيل القراءة وتجنب الأسطر الطويلة جدًا التي تزيد عن 80 حرفًا.

## الملفات ومناطق العمل Files / Areas
- `src/styles/layout.css`
- `src/styles/tokens.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
استخدم `margin-inline: auto` كطريقة حديثة ومختصرة لـ `margin-left: auto; margin-right: auto;`.

## معايير القبول Acceptance Criteria
- [ ] كلاس .container يتوسط الصفحة على الشاشات الأكبر من 1200px.
- [ ] الهوامش الجانبية تمنع التصاق النصوص بحواف شاشات الموبايل.
- [ ] لا يوجد Horizontal Scrollbar عند تصغير الشاشة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الصفحة على شاشة ديسكتوب عريضة ولاحظ توسيط الحاوية بمساحات متساوية.
2. صغر نافذة المتصفح إلى 375px وتأكد من وجود padding جانبي آمن.

## تعريف الانتهاء للمهمة Definition of Done
تطبيق كلاس .container على أقسام الهيدر والـ Hero والفوتر وتأكيد تجاوبه.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-013-container-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create responsive container and layout system`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة تخطيط الصفحات وتوسيط الحاويات باستخدام CSS الحديث.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-017
- TASK-020
- TASK-023
