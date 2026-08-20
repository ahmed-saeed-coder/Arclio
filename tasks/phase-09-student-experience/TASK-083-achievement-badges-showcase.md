# TASK-083 — بناء مكوّن استعراض أوسمة الإنجاز والشهادات (Achievement Badges Showcase)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
عرض شبكة أوسمة الإنجاز المكتسبة (الأوسمة الملونة) والأوسمة المقفلة (رمادية شبه شفافة).

## لماذا توجد هذه المهمة؟ Why This Task Exists
استعراض الإنجازات يمنح الطالب دافعًا لفتح جميع الأوسمة وإكمال التحديات والمشاريع المتبقية.

## المتطلبات السابقة Prerequisites
- TASK-079

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-084, TASK-085

## الهدف Objective
إنشاء `src/styles/components/badges-showcase.css` وتنسيق شبكة أوسمة الإنجاز.

## المتطلبات Requirements
- بناء شبكة أوسمة الإنجاز `.badges-grid` بأيقونات دائرية ملونة وأسماء الأوسمة.
- تطبيق كلاس `.is-locked` للأوسمة غير المكتسبة بعد (رمادية مع أيقونة قفل صغيرة).
- إضافة تلميح Tooltip يوضح كيفية فتح الوسام (مثال: 'أكمل 5 تحديات JavaScript متتالية').
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
أوسمة أنيقة ذات إطارات ذهبية وفضية وأيقونات ثلاثية الأبعاد خفيفة.

## متطلبات التجاوب Responsive Requirements
تتوزع الأوسمة في شبكة مرنة من 3 إلى 6 أعمدة حسب حجم الشاشة.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين سمات aria-label توضح حالة الوسام (مكتسب / مقفل).

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/badges-showcase.css`
- `src/styles/main.css`
- `src/dashboard.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تمييز الأوسمة المكتسبة عن المقفلة يمثل حافزًا دائمًا للتعلم والمثابرة.

## معايير القبول Acceptance Criteria
- [ ] شبكة الأوسمة تعرض الأوسمة المكتسبة والرمادية المقفلة بوضوح.
- [ ] التلميحات تشرح شروط فتح كل وسام بدقة.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. مرر الماوس فوق الأوسمة المختلفة وتأكد من ظهور شروط الفتح بوضوح.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد معرض أوسمة الإنجاز في لوحة التحكم والملف الشخصي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-083-badges-showcase`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build achievement badges showcase grid with locked and unlocked states`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم مكونات الأوسمة والشارات التحفيزية وإدارة الحالات النشطة والمقفلة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-084
- TASK-085
