# TASK-056 — بناء مكوّن بطاقة المسار التعليمي (Learning Path Roadmap Card)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تصميم بطاقة المسار التعليمي متضمنة أيقونة المسار، عدد الوحدات، الساعات التقديرية، وشريط التقدم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
بطاقة المسار توفر نظرة بانورامية سريعة عن المحتوى والوقت المتوقع لإتقان التخصص.

## المتطلبات السابقة Prerequisites
- TASK-055

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-057, TASK-058

## الهدف Objective
إنشاء `src/styles/components/path-card.css` وتنسيق بطاقات المسارات.

## المتطلبات Requirements
- بناء كلاس `.path-card` مع تأثير هوفر مميز يبرز حدود المسار بلون الهوية.
- تنسيق شارة عدد الوحدات والساعات التقديرية في ترويسة البطاقة.
- تنسيق شريط التقدم المصغر `.path-progress-bar` في أسفل البطاقة.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة عريضة ذات طابع تقني تحتوي على أيقونة مميزة ومؤشرات إنجاز واضحة.

## متطلبات التجاوب Responsive Requirements
تتجاوب البطاقة بسلاسة مع شبكة الأعمدة.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين سمات aria-valuenow و aria-valuemax لشريط التقدم.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/path-card.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تصميم بطاقات المسارات بشكل مميز عن بطاقات المشاريع يساعد المستخدم على التمييز البصري الفوري بين المسار والمشروع الفردي.

## معايير القبول Acceptance Criteria
- [ ] مكوّن بطاقة المسار منسق في ملف مستقل ومستورد في main.css.
- [ ] شريط التقدم يعرض نسبة الإنجاز الحالية بدقة.
- [ ] تأثير الـ hover أنيق ومتناسق مع هوية الموقع.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر بطاقة المسار بنسب تقدم مختلفة (0%, 50%, 100%) وتأكد من ملء الشريط بدقة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن بطاقة المسار التعليمي لجعلها جاهزة للرندرة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-056-path-roadmap-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: design and style learning path roadmap card component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم بطاقات المسارات التعليمية ومؤشرات التقدم الإحصائية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-058
