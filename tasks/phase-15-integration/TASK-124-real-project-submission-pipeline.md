# TASK-124 — بناء مسار تسليم المشاريع الحقيقي وحفظ الروابط (Real Project Submission Pipeline)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
ربط نموذج تسليم المشروع بنقطة `POST /api/v1/submissions` لحفظ رابط المشروع في قاعدة البيانات وتحديث حالة التذكرة إلى SUBMITTED.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين الطالب من إرسال مشروعه الفعلي للخادم وإدراجه رسميًا في طابور مراجعة الموجهين.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-125, TASK-126

## الهدف Objective
تحديث `ProjectSubmissionPage.tsx` وإرسال البيانات للـ API وإظهار تأكيد الاستلام الفوري.

## المتطلبات Requirements
- إرسال بيانات التسليم (projectId, githubUrl, liveDemoUrl, notes) إلى الخادم مع التحقق من جلسة المستخدم المسجل.
- حفظ التسليم في جدول `Submission` في قاعدة البيانات وتحديث حالة المشروع للطالب.
- عرض رسالة تأكيد النجاح 'تم إرسال مشروعك للمراجعة بنجاح وسيتم إشعارك فور اكتمال التقييم ✓'.
- تحديث حالة الشارة في صفحة تفاصيل المشروع لتصبح `قيد المراجعة Under Review`.

## متطلبات واجهة المستخدم UI Requirements
تغذية راجعة مرئية واضحة وزر تسليم يتحول لحالة التحميل 'جاري الإرسال...' أثناء الطلب.

## متطلبات التجاوب Responsive Requirements
النموذج متجاوب وسهل الاستخدام على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
تنبيه قارئ الشاشة باكتمال التسليم بنجاح.

## الملفات ومناطق العمل Files / Areas
- `src/pages/ProjectSubmissionPage.tsx`
- `server/src/controllers/submissionController.ts`
- `server/src/routes/submissions.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تعطيل زر الإرسال أثناء انتظار استجابة الخادم يمنع تكرار النقر وإرسال أكثر من تسليم بالخطأ (Double Submission Prevention).

## معايير القبول Acceptance Criteria
- [ ] التسليم يُحفظ بنجاح في قاعدة البيانات ويرتبط بحساب الطالب والمشروع.
- [ ] الواجهة تتحدث فورًا لعرض حالة التسليم الجديدة.
- [ ] يتم منع إرسال نفس المشروع إذا كان قيد المراجعة بالفعل.

## الاختبار والتحقق اليدوي Manual Testing
1. قم بتسليم مشروع من الواجهة وتأكد من حفظ السجل في جدول Submissions في قاعدة البيانات وتحديث شارة الحالة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مسار تسليم المشاريع الحقيقي وتكامله مع قاعدة البيانات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-124-real-project-submission`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement live project submission pipeline with database persistence and status updates`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مسارات تسليم البيانات المتكاملة وإدارة حالات الإرسال والوقاية من تكرار الطلبات.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-125
- TASK-126
- TASK-127
