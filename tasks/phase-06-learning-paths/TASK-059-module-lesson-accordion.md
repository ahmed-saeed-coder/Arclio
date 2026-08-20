# TASK-059 — بناء مكوّن قائمة الوحدات والدروس القابلة للطي (Module & Lesson Accordion List)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
عرض وحدات المسار كقوائم أكورديون قابلة للفتح والطي ورندرة دروس كل وحدة بداخلها ديناميكيًا.

## لماذا توجد هذه المهمة؟ Why This Task Exists
المسارات التعليمية الطويلة تحتوي على عشرات الدروس؛ تنظيمها في وحدات مطوية يمنع التشتت ويسهل الوصول للدرس المطلوب.

## المتطلبات السابقة Prerequisites
- TASK-039
- TASK-058

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-060, TASK-061

## الهدف Objective
إنشاء `src/scripts/path-detail.js` لرندرة شجرة الوحدات وتفعيل الفتح والطي.

## المتطلبات Requirements
- كتابة دالة `renderCurriculum(pathData, container)` لقراءة الوحدات ورندرتها بنمط الأكورديون.
- عرض عنوان كل وحدة وعدد دروسها ووقتها الإجمالي في رأس الوحدة `.module-header`.
- رندرة قائمة الدروس داخل لوح الوحدة متضمنة عنوان الدرس ونوعه (درس نظري، تحدي، مشروع).
- تفعيل فتح وغلق الوحدة عند النقر على رأسها وتحديث سمات الـ ARIA.

## متطلبات واجهة المستخدم UI Requirements
قوائم وحدات أنيقة ذات حدود واضحة وسهم دوار يوضح حالة الفتح والإغلاق.

## متطلبات التجاوب Responsive Requirements
تتجاوب القوائم مع العرض الكامل لحاوية المنهج.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معايير إمكانية الوصول لمكونات الأكورديون ARIA Accordion Pattern.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/path-detail.js`
- `src/styles/components/accordion.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
اجعل الوحدة الأولى مفتوحة افتراضيًا وباقي الوحدات مطوية لتسهيل بدء التعلم فورًا.

## معايير القبول Acceptance Criteria
- [ ] الوحدات والدروس تُرندر ديناميكيًا من ملف paths.js.
- [ ] الفتح والإغلاق يعمل بسلاسة لكل وحدة على حدة.
- [ ] عناوين الدروس وأيقونات الأنواع واضحة ومقروءة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة path-detail.html وانقر على رؤوس الوحدات وتأكد من ظهور واختفاء الدروس.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال رندرة شجرة المنهج التفاعلية في صفحة المسار.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-059-curriculum-accordion`
- **رسالة الحفظ المقترحة (Commit)**: `feat: render dynamic module and lesson accordion list in path detail`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
دمج مكونات الـ UI المركبة مع البيانات الديناميكية المتداخلة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-060
- TASK-061
