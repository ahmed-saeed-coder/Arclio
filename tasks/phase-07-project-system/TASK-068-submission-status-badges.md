# TASK-068 — بناء شارات حالة التسليم (Draft, Submitted, Reviewed Badges)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 07 — تعميق نظام المشاريع ومواصفات التذاكر (Project System Deepening)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
إنشاء شارات حالة تسليم المشروع (مسودة Draft، تم التسليم Submitted، قيد المراجعة Under Review، معتمد Approved).

## لماذا توجد هذه المهمة؟ Why This Task Exists
توضيح مرحلة المشروع الحالية للمتعلم في صفحة التفاصيل ولوحة التحكم بنظرة سريعة.

## المتطلبات السابقة Prerequisites
- TASK-026
- TASK-067

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-069, TASK-070

## الهدف Objective
تحديث `src/styles/components/badge.css` بإضافة شارات حالات تسليم المشاريع.

## المتطلبات Requirements
- إضافة فئات الشارات: `.badge-draft` (رمادي)، `.badge-submitted` (أزرق)، `.badge-reviewing` (برتقالي)، `.badge-approved` (أخضر).
- تضمين أيقونات SVG صغيرة بجوار نص الشارة (أيقونة ساعة، قلم، صح، أو مجهر).
- تحديث حالة الشارة في صفحة تفاصيل المشروع ديناميكيًا بناءً على حالة التسليم.

## متطلبات واجهة المستخدم UI Requirements
شارات صغيرة عالية التباين تظهر في أعلى ترويسة المشروع وبطاقته.

## متطلبات التجاوب Responsive Requirements
تتطابق مع أحجام الشارات القياسية على جميع الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير نص دلالي يصف حالة التسليم بوضوح لقارئات الشاشة.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/badge.css`
- `src/scripts/project-submission.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدام الألوان الدلالية الموحدة يساعد المستخدم على ربط اللون بالحالة فورًا في كافة صفحات المنصة.

## معايير القبول Acceptance Criteria
- [ ] شارات حالات التسليم منسقة ومتاحة في badge.css.
- [ ] الشارة تتحدث تلقائيًا عند الضغط على زر التسليم في صفحة المشروع.
- [ ] النصوص والأيقونات متناسقة وواضحة.

## الاختبار والتحقق اليدوي Manual Testing
1. قم بتسليم مشروع وتأكد من تحول الشارة من 'مسودة' إلى 'تم التسليم' في الحال.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد شارات حالات التسليم وتكاملها مع نموذج إرسال المشاريع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-068-submission-badges`
- **رسالة الحفظ المقترحة (Commit)**: `feat: add submission lifecycle status badges and dynamic state updates`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم وإدارة الحالات الحياتية للمنتجات البرمجية (Product Lifecycle States).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-069
- TASK-070
