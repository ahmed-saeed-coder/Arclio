# TASK-081 — بناء بطاقة استئناف المسار التعليمي الجاري (In-Progress Resume Course Card)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
عرض بطاقة بارزة في لوحة التحكم توضح المسار الجاري والدرس الحالي وزر 'متابعة التعلم ➔'.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير وصول فوري بضغطة زر واحدة تمكن الطالب من متابعة درسه الأخير مباشرة دون البحث في المناهج.

## المتطلبات السابقة Prerequisites
- TASK-079

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-082, TASK-083

## الهدف Objective
تنسيق بطاقة استئناف التعلم وقراءة آخر درس مفتوح من LocalStorage.

## المتطلبات Requirements
- بناء بطاقة `.resume-learning-card` بحدود زرقاء مشعة وخلفية سطحية أنيقة.
- عرض اسم المسار واسم الدرس التالي وشريط التقدم المئوي للمسار.
- تضمين زر أساسي كبير 'متابعة التعلم (الدرس 4) ➔' يوجه الطالب مباشرة لصفحة الدرس.
- تضمين التنسيقات في `src/styles/components/dashboard-cards.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة عريضة تحتل صدارة لوحة التحكم وتجذب انتباه المستخدم فور الدخول.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع العرض الكامل للوحة التحكم على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية واضحة لزر المتابعة.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/dashboard-cards.css`
- `src/dashboard.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
قراءة آخر درس تم التوقف عنده وتحديث الرابط تلقائيًا يمنح تجربة استخدام سلسة واحترافية.

## معايير القبول Acceptance Criteria
- [ ] بطاقة الاستئناف تعرض الدرس التالي وشريط التقدم بدقة.
- [ ] زر المتابعة ينقل المستخدم مباشرة للدرس المستهدف.
- [ ] التصميم متناسق وجذاب.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص بطاقة استئناف التعلم وتأكد من مطابقة نسبة التقدم مع البيانات المحفوظة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد بطاقة استئناف التعلم في لوحة التحكم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-081-resume-course-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create in-progress resume course card with dynamic next lesson link`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم بطاقات الإجراء السريع Quick-Action Cards وتسهيل مسار عودة المستخدم.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-082
- TASK-083
- TASK-084
