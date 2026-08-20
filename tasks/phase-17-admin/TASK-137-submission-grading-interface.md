# TASK-137 — بناء واجهة تصحيح وتقييم المشاريع للمشرفين (Submission Grading Interface)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 17 — لوحة تحكم الإدارة وتقييم المشاريع (Admin & Instructor Platform)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء شاشة التقييم النهائي للمشرفين لاعتماد تقييمات مراجعة الأقران وتحديد الدرجات النهائية وحل أي خلافات تقييمية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان العدالة في التقييم والتدخل لحل أي مراجعة أقران غير دقيقة واعتماد منح الشهادات الرسمية.

## المتطلبات السابقة Prerequisites
- TASK-135

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-138

## الهدف Objective
إنشاء `src/admin/GradingQueue.tsx` وربطها بمسار اعتماد التقييمات النهائي.

## المتطلبات Requirements
- عرض قائمة المشاريع المكتملة المراجعة من قبل الزملاء مع استعراض درجات الـ Rubric وملاحظاتهم.
- إمكانية تعديل الدرجات النهائية من قبل المشرف وكتابة تعليق توجيهي رسمي للطالب.
- زر الاعتماد النهائي 'Approve & Issue XP' الذي يحدث حالة التسليم ويمنح الأوسمة.
- زر 'طلب إعادة تسليم Request Changes' مع توضيح النقاط المطلوب تعديلها.

## متطلبات واجهة المستخدم UI Requirements
شاشة تصحيح مريحة تعرض كود وملاحظات الطالب والمراجعين في واجهة موحدة.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع شاشات الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسميات دلالية لجميع خيارات الاعتماد وتعديل الدرجات.

## الملفات ومناطق العمل Files / Areas
- `src/admin/GradingQueue.tsx`
- `server/src/controllers/adminController.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
وجود طبقة إشراف نهائي من المشرف يضمن الحفاظ على معايير الجودة الأكاديمية للمنصة.

## معايير القبول Acceptance Criteria
- [ ] شاشة التقييم تمكن المشرف من اعتماد الدرجات بنقرة واحدة.
- [ ] اعتماد المشروع يرسل إشعارًا فوريًا للطالب بتفاصيل الاعتماد.
- [ ] طلب التعديل يعيد المشروع لحالة المسودة مع إرفاق الملاحظات.

## الاختبار والتحقق اليدوي Manual Testing
1. اعتمد مشروعًا من شاشة التقييم وتأكد من استلام الطالب لشهادة الاعتماد ونقاط الـ XP.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال واجهة تصحيح وتقييم المشاريع للمشرفين.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-137-submission-grading-ui`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build instructor project submission grading and moderation approval queue interface`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم واجهات المراجعة والاعتماد النهائية Approval Workflows في المنصات التعليمية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-138
- TASK-139
