# TASK-130 — بناء نظام مطابقة مراجعة الأقران بين الطلاب (Peer Review Matching System)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
بناء خوارزمية مطابقة آلية تقوم بتعيين كل مشروع مسلم لاثنين من الزملاء الطلاب في نفس المستوى لمراجعته وتبادل الملاحظات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ممارسة مراجعة الكود بين الزملاء (Peer Review) ترتقي بمستوى التفكير النقدي لدى الطالب وتثبت معرفته البرمجية.

## المتطلبات السابقة Prerequisites
- TASK-125

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-131, TASK-132

## الهدف Objective
إنشاء `server/src/services/peerReviewService.ts` وإدارة طابور مراجعة الأقران وتوزيع المهام تلقائيًا.

## المتطلبات Requirements
- بناء خوارزمية اختيار مراجعين عشوائيين من نفس المجموعة أو المستوى استنادا لجدول `PeerReviewAssignment`.
- عرض تذكرة 'مشروع بانتظار مراجعتك' في لوحة تحكم الطالب المعين.
- إتاحة نموذج الـ Rubric للطالب لكتابة ملاحظاته ومراجعة كود زميله.
- منح نقاط خبرة إضافية `+50 XP` للطالب عند إكماله مراجعة كود زميله بتعليقات بناءة ومفيدة.

## متطلبات واجهة المستخدم UI Requirements
واجهة مراجعة أقران مبسطة وواضحة ترشد الطالب لكيفية تقديم ملاحظات لطيفة ومفيدة.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع لوحة التحكم على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية لحقول التقييم.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/peerReviewService.ts`
- `server/src/routes/peerReviews.ts`
- `src/pages/PeerReviewPage.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
مراجعة كود الآخرين هي أسرع وسيلة لاكتشاف أساليب برمجية مختلفة وتعلم كتابة كود مقروء.

## معايير القبول Acceptance Criteria
- [ ] تسليم المشروع يولد تلقائيًا مهمتي مراجعة أقران لزميلين مؤهلين.
- [ ] إكمال مراجعة الزميل يمنح المراجع نقاط الـ XP الموعودة.
- [ ] صاحب المشروع يرى ملاحظات زملائه في صفحة مشروعه.

## الاختبار والتحقق اليدوي Manual Testing
1. سلم مشروعًا بحساب طالب 1 وتأكد من ظهور مهمة مراجعته في لوحة تحكم طالب 2 وإمكانية كتابة الملاحظات بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام مطابقة وممارسة مراجعة الأقران Peer Review.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-130-peer-review-system`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build automated peer review matching engine and collaborative feedback workflow`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
هندسة أنظمة التوزيع التلقائي للمهام Task Scheduling وإدارة سير العمل التعاوني Peer Review.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-131
- TASK-132
- TASK-133
