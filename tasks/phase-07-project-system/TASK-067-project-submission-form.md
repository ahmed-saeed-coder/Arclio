# TASK-067 — بناء نموذج تسليم رابط المشروع ورابط المعاينة (Project Submission Form UI)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 07 — تعميق نظام المشاريع ومواصفات التذاكر (Project System Deepening)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء نموذج تسليم المشروع متضمنًا حقل رابط مستودع GitHub ورابط المعاينة الحية Live Demo والملاحظات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المطور من إرسال مشروعه للمراجعة والتقييم بعد الانتهاء من بنائه وتجربته.

## المتطلبات السابقة Prerequisites
- TASK-043
- TASK-063

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-068, TASK-069

## الهدف Objective
إنشاء ملف `src/scripts/project-submission.js` وبناء واجهة ومنطق نموذج التسليم والتحقق.

## المتطلبات Requirements
- بناء نموذج التسليم `<form id='submission-form'>` بحقول: رابط GitHub Repository، رابط Live Demo، وملاحظات التحدي Notes.
- التحقق من صحة روابط GitHub وروابط النشر عبر أدوات التحقق `validateUrl()` المنشأة في TASK-043.
- حفظ مسودة التسليم في `localStorage.setItem('arclio_submission_' + projectId, ...)`.
- عرض حالة التسليم الناجح وإظهار إشعار Toast تأكيدي وتغيير حالة الزر إلى 'تم التسليم بنجاح ✓'.

## متطلبات واجهة المستخدم UI Requirements
نموذج تسليم أنيق بحدود واضحة وأزرار تفاعلية وتغذية راجعة مرئية فورية.

## متطلبات التجاوب Responsive Requirements
حقول الإدخال تأخذ عرض 100% وتتلاءم مع شاشات اللمس والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية لكل حقل عبر وسوم label مع رسائل خطأ دلالية aria-invalid.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/project-submission.js`
- `src/project-detail.html`
- `src/styles/components/project-detail.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
في هذه المرحلة نخزن التسليم محليًا في المتصفح؛ سنربطه بالخادم الحقيقي وقاعدة البيانات في المرحلة 15.

## معايير القبول Acceptance Criteria
- [ ] النموذج يمنع إرسال الروابط غير الصالحة ويعرض رسالة توضيحية.
- [ ] التسليم الناجح يحفظ الروابط في LocalStorage ويحدث واجهة المستخدم.
- [ ] إعادة تحميل الصفحة تعرض الروابط المسلمة سابقًا.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب رابط GitHub صالح ورابط موقع حي واضغط تسليم؛ تأكد من ظهور إشعار النجاح.
2. أعد تحميل الصفحة وتأكد من بقاء حالة المشروع كـ 'مسلّم'.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال واجهة ومنطق تسليم المشاريع وتأكيد حفظها المحلي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-067-project-submission-ui`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build project submission form UI with url validation and draft persistence`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء نماذج تسليم الواجهات وإدارة حالات النماذج غير المتزامنة والتخزين المحلي.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-068
- TASK-069
- TASK-070
