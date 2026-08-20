# TASK-028 — بناء مكوّن عنوان الأقسام مع العنوان الفرعي (Section Header Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
إنشاء مكوّن موحد لعناوين الأقسام الرئيسية مع شارة علوية ونصوص فرعية في ملف مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توحيد مظهر عناوين الأقسام (مثل: المشاريع المميزة، المسارات الشائعة) عبر صفحات الموقع.

## المتطلبات السابقة Prerequisites
- TASK-027

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-029, TASK-030

## الهدف Objective
إنشاء ملف `src/styles/components/section-header.css` وتنسيق كلاسات ترويسة الأقسام.

## المتطلبات Requirements
- بناء كلاس `.section-header` مع مسافات سفلية تفصل الترويسة عن محتوى القسم.
- تنسيق الشارة العلوية `.section-eyebrow` بخط Monospace ولون `--brand-accent`.
- تنسيق العنوان `.section-title` بحجم `--text-3xl` والنص الفرعي `.section-description` بلون `--text-secondary`.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
ترويسة قسم أنيقة تمنح وضوحًا لمحتوى القسم القادم.

## متطلبات التجاوب Responsive Requirements
تصغير حجم العنوان تلقائيًا على الموبايل ليناسب العرض.

## متطلبات إمكانية الوصول Accessibility Requirements
استخدام وسم h2 الدلالي لعنوان القسم.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/section-header.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
يمكن توفير خيار محاذاة للمنتصف عبر كلاس إضافي `.section-header--center`.

## معايير القبول Acceptance Criteria
- [ ] ترويسة الأقسام موحدة الخطوط والمسافات.
- [ ] دعم المحاذاة لليمين (افتراضي RTL) والمحاذاة للمنتصف.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر ترويسة القسم على شاشات مختلفة وتأكد من تناسق حجم الخط والمحاذاة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن عناوين الأقسام وتضمينه في التنسيقات العامة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-028-section-header`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create reusable section header component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم أنماط الترويسات المتكررة وتنسيق الخطوط الدلالية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-044
- TASK-055
- TASK-071
