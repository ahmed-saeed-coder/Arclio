# TASK-129 — بناء ساحة مناقشات وتعليقات المشاريع (Project Showcase Discussion Thread)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء نظام التعليقات والنقاشات أسفل المشاريع المعتمدة لتمكين الطلاب من طرح الأسئلة وتبادل النصائح والحلول البرمجية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تعزيز روح التعلم المجتمعي ومساعدة الطلاب لبعضهم البعض في تجاوز التحديات البرمجية.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-130, TASK-131

## الهدف Objective
إنشاء `src/components/community/DiscussionThread.tsx` ومسارات `GET /api/v1/projects/:id/comments` و `POST /api/v1/projects/:id/comments`.

## المتطلبات Requirements
- بناء نموذج إضافة تعليق يدعم تنسيق الـ Markdown وكتابة كتل الأكواد البرمجية.
- رندرة شجرة التعليقات والردود متضمنة اسم وصورة المطور وتاريخ التعليق.
- إضافة زر 'أعجبني 👍' وتحديث عداد الإعجابات في قاعدة البيانات.
- حماية المسار والتحقق من تسجيل المستخدم قبل السماح بالنشر.

## متطلبات واجهة المستخدم UI Requirements
ساحة نقاشات نظيفة تشبه مناقشات GitHub Discussions مع تمييز لوني للأكواد.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع العرض الكامل لصفحة تفاصيل المشروع على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية لحقول التعليق وأزرار الإعجاب.

## الملفات ومناطق العمل Files / Areas
- `src/components/community/DiscussionThread.tsx`
- `server/src/controllers/commentController.ts`
- `server/src/routes/comments.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تنظيف وتعقيم نصوص التعليقات من أي أكواد خبيثة (Sanitization) هو أمر إلزامي سنطبقه عبر DOMPurify.

## معايير القبول Acceptance Criteria
- [ ] المستخدم المسجل يستطيع كتابة تعليق ورؤيته فورًا في القائمة.
- [ ] التعليقات تعرض نصوص الأكواد المنسقة بشكل دلالي سليم.
- [ ] زر الإعجاب يحدث العداد بدون وميض في الصفحة.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب تعليقًا يحتوي على كود برمجي واضغط نشر؛ تأكد من ظهوره وتنسيق الكود بسلاسة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام مناقشات وتعليقات المشاريع المجتمعية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-129-project-discussions`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement project showcase discussion thread and community comment system`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء أنظمة التعليقات والنقاشات التفاعلية وإدارة المحتوى المجتمعي في تطبيقات الويب.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-130
- TASK-131
- TASK-132
