# TASK-033 — بناء مكوّن التنبيهات والبانر الإرشادي (Alert & Banner Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء بطاقات تنبيه لرسائل النجاح، التحذير، والمعلومات مع إمكانية الوصول في ملف مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
إعلام المستخدم بنتائج عملياته (مثل: نجاح تسليم المشروع، أو وجود تحديث هام) بشكل بصري واضح.

## المتطلبات السابقة Prerequisites
- TASK-026

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-031, TASK-032

## الهدف Objective
إنشاء ملف `src/styles/components/alert.css` وتنسيق أنماط التنبيهات الدلالية.

## المتطلبات Requirements
- بناء الكلاس الأساسي `.alert` بحدود وانحناء حواف ومسافات داخلية متناسقة وأيقونة دلالية.
- تعريف متغيرات الأنواع: `.alert-info` (أزرق)، `.alert-success` (أخضر)، `.alert-warning` (برتقالي)، `.alert-danger` (أحمر).
- إضافة زر إغلاق اختياري `.alert-close` بحجم مناسب.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقات تنبيه أنيقة بخلفيات شبه شفافة وحدود يسارية/يمينية بارزة تدل على نوع التنبيه.

## متطلبات التجاوب Responsive Requirements
التمدد الكامل عبر عرض الشاشة مع مسافات آمنة من الجانبين على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
إضافة السمة `role='alert'` أو `role='status'` لتنبيه مستخدمي قارئات الشاشة فور ظهور الرسالة.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/alert.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
سمة `role='alert'` تجعل قارئ الشاشة يقرأ التنبيه فورًا دون مقاطعة مسار الصفحة.

## معايير القبول Acceptance Criteria
- [ ] جميع أنواع التنبيهات (info, success, warning, danger) منسقة بدقة.
- [ ] الألوان والحدود تتبع متغيرات التصميم المعتمدة.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر مظهر الأنواع الأربعة للتنبيهات وتأكد من وضوح الأيقونات والتباين اللوني.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن التنبيهات وإتاحته للاستخدام في النماذج والرسائل.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-033-alert-banner`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create alert and banner feedback component library`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مكونات التغذية الراجعة واستخدام أدوار ARIA الحية (Live Regions).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-042
