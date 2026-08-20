# TASK-084 — بناء صفحة معرض أعمال المطور العامة (Public Developer Portfolio Page)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء صفحة profile.html لعرض السيرة الذاتية للمطور ومعرض مشاريعه المعتمدة وسجل مساهماته ورابط GitHub.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير رابط ملف شخصي عام موثق يستطيع المطور مشاركته مع مسؤولي التوظيف والشركات كدليل على كفاءته وخبرته العملية.

## المتطلبات السابقة Prerequisites
- TASK-079

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-085, TASK-086

## الهدف Objective
إنشاء ملف `src/profile.html` وتنسيق الترويسة الشخصية ومعرض المشاريع والمهارات.

## المتطلبات Requirements
- إنشاء صفحة `src/profile.html` بالهيكل الدلالي القياسي وشريط مسار التنقل.
- بناء ترويسة المطور `.profile-header`: الصورة الرمزية، الاسم، المسمى (Frontend Developer)، نبذة قصيرة، وروابط GitHub و LinkedIn.
- عرض شارات المهارات المعتمدة واللغات البرمجية المتقنة.
- تضمين شبكة المشاريع المعتمدة وخريطة النشاط السنوية.

## متطلبات واجهة المستخدم UI Requirements
ملف شخصي فاخر وعالي الاحترافية يبرز أعمال المطور بثقة وقوة.

## متطلبات التجاوب Responsive Requirements
تخطيط متجاوب يتوسط الصفحة بهوامش أنيقة على جميع المقاسات.

## متطلبات إمكانية الوصول Accessibility Requirements
تسلسل هرمي سليم للعناوين وروابط تواصل خارجية آمنة وموثقة.

## الملفات ومناطق العمل Files / Areas
- `src/profile.html`
- `src/styles/components/profile.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/dashboard.html

## ملاحظات التنفيذ Implementation Notes
الملف الشخصي في ARCLIO ليس مجرد كلام، بل هو دليل مثبت بسجلات Git ومشاريع حقيقية تم فحصها واعتمادها.

## معايير القبول Acceptance Criteria
- [ ] صفحة profile.html منشأة وتعمل بنجاح.
- [ ] ترويسة المطور ومعرض المشاريع متناسقة مع الهوية البصرية.
- [ ] روابط GitHub والتواصل الاجتماعي تعمل وتفتح في تبويبات آمنة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة profile.html وافحص التناسق البصري وترتيب الأقسام والتجاوب.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد الهيكل الأساسي لصفحة معرض أعمال المطور العامة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-084-public-portfolio`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create public developer portfolio profile page layout and skills showcase`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء صفحات السير الذاتية الهندسية ومعارض الأعمال الموثوقة Proof-of-Work Portfolios.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-085
- TASK-086
- TASK-087
