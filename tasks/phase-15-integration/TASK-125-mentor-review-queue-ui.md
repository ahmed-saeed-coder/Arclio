# TASK-125 — بناء طابور مراجعة المشاريع للموجهين (Mentor Project Review Queue UI)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء واجهة خاصة بالموجهين والمشرفين `ReviewQueuePage.tsx` لاستعراض المشاريع المنتظرة للمراجعة وتصحيحها وفق معايير الـ Rubric.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير بيئة عمل مركزة للمراجعين لمشاهدة روابط الطلاب وتقييم كل محور وإرسال الملاحظات التعليمية.

## المتطلبات السابقة Prerequisites
- TASK-124

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-126, TASK-127

## الهدف Objective
إنشاء `src/pages/ReviewQueuePage.tsx` ومسارات `GET /api/v1/reviews/queue` و `POST /api/v1/reviews/:id`.

## المتطلبات Requirements
- حماية الصفحة بحيث تفتح فقط للمستخدمين ذوي الصلاحيات `role: 'REVIEWER' | 'ADMIN'` عبر وسيط الـ RBAC.
- عرض جدول المشاريع المنتظرة: اسم الطالب، اسم المشروع، تاريخ التسليم، رابط GitHub، ورابط المعاينة.
- بناء نموذج تقييم الـ Rubric متضمنًا اختيار الدرجات (1-4) لمحاور: نظافة الكود، التجاوب، إمكانية الوصول، والأداء.
- إرسال التقييم واعتماد المشروع أو طلب تعديلات إضافية مع تحديث نقاط الـ XP للطالب تلقائيًا.

## متطلبات واجهة المستخدم UI Requirements
لوحة تصحيح احترافية وسهلة وسريعة تمكن المراجع من فتح روابط الطالب وتقييمها بضغطة زر.

## متطلبات التجاوب Responsive Requirements
تتلاءم لوحة التصحيح مع شاشات اللابتوب والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسميات دلالية لجميع حقول وحالات درجات التقييم.

## الملفات ومناطق العمل Files / Areas
- `src/pages/ReviewQueuePage.tsx`
- `server/src/controllers/reviewController.ts`
- `server/src/routes/reviews.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
توفير أزرار فتح الروابط السريعة (One-Click Link Launchers) يوفر وقت المراجعين ويجعل عملية التقييم سريعة وممتعة.

## معايير القبول Acceptance Criteria
- [ ] طابور المراجعة يفتح فقط للمراجعين والمشرفين المصرح لهم.
- [ ] إرسال التقييم يسجل الدرجات والملاحظات في قاعدة البيانات بدقة.
- [ ] المشروع المعتمد يمنح الطالب نقاط الـ XP فورًا ويحدث حالته إلى APPROVED.

## الاختبار والتحقق اليدوي Manual Testing
1. ادخل بحساب مراجع وقم بتصحيح مشروع معلق؛ تأكد من حفظ التقييم وزيادة نقاط الطالب المستهدف.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال طابور مراجعة المشاريع ونموذج تصحيح الـ Rubric للموجهين.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-125-mentor-review-queue`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build mentor review queue interface and rubric grading submission endpoints`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء واجهات الإشراف والتقييم الداخلي وإدارة صلاحيات المراجعين في التطبيقات التعليمية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-126
- TASK-127
- TASK-128
