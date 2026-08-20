# TASK-073 — بناء تخطيط بيئة التحدي التفاعلية Playground (Challenge Playground Layout)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء صفحة challenge-playground.html المقسمة إلى لوحة التعليمات (يمين)، محرر الأكواد (يسار)، والمعاينة الحية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير بيئة برمجة مدمجة متكاملة داخل المتصفح تمكن الطالب من كتابة الكود ورؤية النتيجة فورًا دون مغادرة الموقع.

## المتطلبات السابقة Prerequisites
- TASK-071

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-074, TASK-075

## الهدف Objective
إنشاء ملف `src/challenge-playground.html` وتنسيق التخطيط ثلاثي الأقسام.

## المتطلبات Requirements
- إنشاء صفحة `src/challenge-playground.html` بهيكل كامل العرض (Full Height Playground Layout).
- تقسيم الواجهة باستخدام CSS Grid أو Flexbox: لوحة التعليمات (Instructions Panel)، لوحة محرر الأكواد (Code Editor Panel)، ولوحة المعاينة الحية (Live Preview Panel).
- إضافة شريط تحكم علوي يحتوي على اسم التحدي، مؤقت زمني، زر 'تشغيل واختبار الكود'، وزر 'إعادة التعيين'.
- تنسيق شريط الأدوات لاستيعاب أزرار الفحص.

## متطلبات واجهة المستخدم UI Requirements
واجهة محرر احترافية تشبه منصات CodePen و LeetCode بثيم داكن كامل.

## متطلبات التجاوب Responsive Requirements
على الديسكتوب تظهر الألواح متجاورة، وعلى الموبايل تتحول إلى تبويبات قابلة للتبديل.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير تسميات دلالية لكل لوح وتسهيل التنقل عبر لوحة المفاتيح.

## الملفات ومناطق العمل Files / Areas
- `src/challenge-playground.html`
- `src/styles/components/playground.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/index.html

## ملاحظات التنفيذ Implementation Notes
اجعل بيئة الـ Playground تأخذ `height: 100vh` مع إلغاء تمرير الصفحة الرئيسية واقتصار التمرير داخل الألواح فقط.

## معايير القبول Acceptance Criteria
- [ ] صفحة الـ Playground منشأة وتملأ كامل ارتفاع الشاشة.
- [ ] الألواح الثلاثة متناسقة وتسمح بالقراءة والكتابة بسلاسة.
- [ ] شريط التحكم العلوي يحتوي على زر الاختبار وزر إعادة التعيين.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة challenge-playground.html وافحص تناسق الألواح وتجاوبها على الشاشات الكبيرة والصغيرة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد هيكل وتخطيط بيئة البرمجة المدمجة Playground.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-073-playground-layout`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build in-browser challenge playground layout and control toolbar`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
هندسة واجهات تطبيقات الويب التفاعلية الكاملة Full-Screen Web App Layouts.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-074
- TASK-075
