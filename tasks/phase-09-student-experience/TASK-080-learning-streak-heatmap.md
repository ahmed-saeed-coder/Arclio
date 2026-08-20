# TASK-080 — بناء مكوّن عداد الاستمرارية وخريطة النشاط (Learning Streak & Activity Heatmap)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
عرض عداد الأيام المتتالية (Streak Counter 🔥) وشبكة خريطة النشاط السنوية/الأسبوعية مستوحاة من GitHub Contribution Heatmap.

## لماذا توجد هذه المهمة؟ Why This Task Exists
بناء عادة البرمجة اليومية عبر التحفيز البصري وإبراز التزام المطور وجهده المستمر.

## المتطلبات السابقة Prerequisites
- TASK-079

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-081, TASK-082

## الهدف Objective
إنشاء `src/scripts/dashboard-heatmap.js` و `src/styles/components/heatmap.css` لرندرة خريطة النشاط.

## المتطلبات Requirements
- بناء بطاقة عداد الاستمرارية `.streak-card` متضمنة أيقونة الشعلة البرتقالية وعدد الأيام (مثال: `🔥 12 يوم متتالي`).
- رندرة شبكة مربعات خريطة النشاط (7 صفوف تمثل أيام الأسبوع في 12 إلى 52 عمودًا تمثل الأسابيع).
- تلوين المربعات بدرجات اللون الأخضر/الأزرق حسب كثافة النشاط اليومي (0 نشاط، 1-2 نشاط، 3+ أنشطة).
- إظهار تلميح Tooltip صغير عند التحويم على أي مربع يعرض التاريخ وعدد المهام المنجزة فيه.

## متطلبات واجهة المستخدم UI Requirements
خريطة نشاط دقيقة وأنيقة تتدرج ألوانها بنعومة وتعطي مظهرًا احترافيًا لملف المطور.

## متطلبات التجاوب Responsive Requirements
خريطة النشاط تدعم التمرير الأفقي الناعم على الشاشات الصغيرة مع بقاء الأيام ثابتة.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين سمات aria-label لكل مربع يوم يوضح تاريخه ومستوى النشاط.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/dashboard-heatmap.js`
- `src/styles/components/heatmap.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
رندرة مربعات الـ Heatmap عبر مصفوفة تواريخ يرسخ مهارات التعامل مع كائنات Date والمصفوفات الثنائية.

## معايير القبول Acceptance Criteria
- [ ] خريطة النشاط تُرندر بدقة عبر JavaScript.
- [ ] تدرج الألوان يعكس كثافة النشاط الحقيقي.
- [ ] التلميحات Tooltips تظهر بسلاسة عند مرور الماوس.

## الاختبار والتحقق اليدوي Manual Testing
1. مرر الماوس فوق مربعات خريطة النشاط وتأكد من ظهور التلميحات بالتواريخ الدقيقة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مكوّن خريطة النشاط وعداد الاستمرارية في لوحة التحكم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-080-streak-heatmap`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement learning streak counter and github-style activity heatmap`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء الرسوم البيانية الدقيقة Grid Heatmaps والتعامل مع التواريخ ومصفوفات النشاط.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-081
- TASK-082
- TASK-083
