# TASK-061 — حساب وعرض شريط التقدم البصري للمسار (Visual Progress Bar Calculation)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
حساب النسبة المئوية لإنجاز المسار تلقائيًا (Completed / Total * 100) وتحديث عرض شريط التقدم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تقديم حافز بصري وتغذية راجعة فورية للطالب توضح له بدقة مدى اقترابه من إنهاء المسار التعليمي.

## المتطلبات السابقة Prerequisites
- TASK-060

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-062

## الهدف Objective
كتابة دالة حساب التقدم وتحديث عرض شريط التقدم والرقم المئوي في البطاقة الجانبية.

## المتطلبات Requirements
- حساب إجمالي دروس المسار وعدد الدروس المكتملة المخزنة في LocalStorage.
- حساب النسبة المئوية: `const percentage = Math.round((completedCount / totalCount) * 100)`.
- تحديث عرض الشريط بالـ CSS: `progressBar.style.width = percentage + '%'`.
- تحديث النص الرقمي `75% مكتمل` وتحديث سمات الـ ARIA: `aria-valuenow`.

## متطلبات واجهة المستخدم UI Requirements
شريط تقدم أزرق مشع `--brand-primary` يتمدد بانسيابية ناعمة عبر `transition: width 0.3s ease`.

## متطلبات التجاوب Responsive Requirements
شريط التقدم متناسق وثابت المظهر على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث السمة `aria-valuenow` برقم النسبة المئوية الحالية لمستخدمي قارئات الشاشة.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/path-detail.js`
- `src/styles/components/path-card.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تأكد من التعامل مع حالة القسمة على صفر إذا كان المسار لا يحتوي على دروس لتجنب ظهور NaN.

## معايير القبول Acceptance Criteria
- [ ] شريط التقدم يتحدث فورًا عند تحديد أو إلغاء تحديد أي درس.
- [ ] النسبة المئوية دقيقة ومطابقة لعدد الدروس الفعلية.
- [ ] حركة تمدد الشريط ناعمة ومريحة للعين.

## الاختبار والتحقق اليدوي Manual Testing
1. حدد درسًا إضافيًا وشاهد تمدد شريط التقدم وزيادة النسبة المئوية فورًا.
2. ألغِ تحديد الدرس وتأكد من تراجع النسبة والشريط بدقة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال دالة حساب وعرض التقدم البصري للمسارات التعليمية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-061-visual-progress-bar`
- **رسالة الحفظ المقترحة (Commit)**: `feat: calculate and render dynamic visual progress bar for learning paths`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إجراء العمليات الحسابية الرياضية في JavaScript وتحديث خصائص الـ CSS Style المباشرة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-062
- TASK-063
