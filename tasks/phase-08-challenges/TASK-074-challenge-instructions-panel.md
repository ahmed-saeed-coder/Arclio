# TASK-074 — بناء لوحة تعليمات ومطلوبات التحدي (Challenge Instructions Panel)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
عرض نص المسألة البرمجية، الشروط والقيود، أمثلة الإدخال والإخراج، وقائمة حالات الاختبار Test Cases.

## لماذا توجد هذه المهمة؟ Why This Task Exists
وضوح تعليمات التحدي وأمثلته يضمن فهم الطالب للمطلوب بدقة قبل البدء في كتابة الحل.

## المتطلبات السابقة Prerequisites
- TASK-073

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-075, TASK-076

## الهدف Objective
تنسيق لوحة التعليمات في صفحة الـ Playground ودعم تنسيق نصوص الأكواد `<code>` وصناديق الأمثلة.

## المتطلبات Requirements
- بناء قسم `.instructions-content` متضمنًا عنوان التحدي ووصف المسألة.
- تنسيق صناديق الأمثلة `.example-box` متضمنة الإدخال Input والنتيجة المتوقعة Output وشرح الفكرة.
- عرض قائمة شروط التحقق التلقائي المتوقعة (مثل: 'يجب أن يعيد التابع مصفوفة بطول 3').
- تضمين التنسيقات في `src/styles/components/playground.css`.

## متطلبات واجهة المستخدم UI Requirements
لوحة نصوص مريحة ومقروءة بتباين ممتاز تدعم التمرير العمودي المستقل.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع اللوح المخصص لها على جميع الأجهزة.

## متطلبات إمكانية الوصول Accessibility Requirements
تسلسل هرمي سليم للعناوين واستخدام وسوم pre و code دلالية.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/playground.css`
- `src/challenge-playground.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تنسيق كتل الأكواد البرمجية داخل التعليمات بخلفيات داكنة يسهل قراءة الشروط البرمجية.

## معايير القبول Acceptance Criteria
- [ ] لوحة التعليمات تحتوي على نص المسألة والأمثلة والشروط بوضوح.
- [ ] صناديق الأمثلة منسقة ومقروءة بشكل جذاب.
- [ ] التمرير العمودي يعمل بسلاسة داخل اللوح.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص لوحة التعليمات وتأكد من وضوح نصوص الأكواد وصناديق الإدخال والإخراج.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد لوحة تعليمات التحديات البرمجية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-074-challenge-instructions`
- **رسالة الحفظ المقترحة (Commit)**: `feat: render challenge problem description, examples, and test cases panel`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
صياغة وتنسيق المواصفات البرمجية ومسائل الخوارزميات في واجهات الويب.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-075
- TASK-076
