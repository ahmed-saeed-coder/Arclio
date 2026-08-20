# TASK-030 — بناء وتنسيق القائمة المنسدلة المخصصة (Custom Styled Select Dropdown)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تنسيق عنصر select ليتماشى مع الثيم الداكن للوحة الألوان مع سهم مخصص SVG.

## لماذا توجد هذه المهمة؟ Why This Task Exists
القوائم المنسدلة الافتراضية في المتصفحات تبدو بيضاء وغير متناسقة مع الثيم الداكن للمنصة.

## المتطلبات السابقة Prerequisites
- TASK-015

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-028, TASK-029

## الهدف Objective
إنشاء ملف `src/styles/components/select.css` وتنسيق القوائم المنسدلة.

## المتطلبات Requirements
- إلغاء السهم الافتراضي للمتصفح عبر `appearance: none; -webkit-appearance: none;`.
- إضافة سهم SVG مخصص كخلفية أو عبر حاوية wrapper بالتموضع المطلق.
- تطبيق خلفية `--bg-surface` وحدود `--border-subtle` ولون نص `--text-primary`.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
قائمة منسدلة أنيقة تتناغم مع حقول الإدخال والأزرار المجاورة.

## متطلبات التجاوب Responsive Requirements
ارتفاع مناسب للمس على شاشات الموبايل (42px+).

## متطلبات إمكانية الوصول Accessibility Requirements
الحفاظ على إمكانية التنقل بمفاتيح الأسهم في الكيبورد واستيفاء معايير الفوكس.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/select.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تأكد من ضبط `padding-inline-end` لتوفير مساحة كافية لسهم القائمة المنسدلة في نمطي LTR و RTL.

## معايير القبول Acceptance Criteria
- [ ] السهم المخصص يظهر بوضوح وبحجم متناسق.
- [ ] القائمة تفتح وتعرض الخيارات بشكل مقروء في الثيم الداكن.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح القائمة المنسدلة في المتصفح وتأكد من سهولة اختيار العناصر والتنقل بالأسهم.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن القوائم المنسدلة لاستخدامه في فلاتر وتصنيفات المشاريع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-030-styled-select`
- **رسالة الحفظ المقترحة (Commit)**: `feat: style custom select dropdown component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تخصيص عناصر النماذج الأصلية والتعامل مع خاصية appearance وسهام الـ SVG.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-048
- TASK-051
