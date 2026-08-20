# TASK-127 — مزامنة عداد الاستمرارية والتقدم مع الخادم (Sync Streak & Progress with Backend)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
حساب أيام الاستمرارية Streak وخريطة النشاط والدروس المكتملة على الخادم ومزامنتها لحظيًا في لوحة التحكم.

## لماذا توجد هذه المهمة؟ Why This Task Exists
حماية سجل النشاط من التلاعب المحلي وضمان احتساب الاستمرارية الحقيقية للمطور بناءً على توقيت الخادم الموثق.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-128

## الهدف Objective
إنشاء `server/src/services/streakService.ts` وتحديث خطاف `useUserProgress.ts` لجلب إحصائيات النشاط الحية.

## المتطلبات Requirements
- كتابة دالة خادم تفحص تاريخ آخر نشاط للمستخدم؛ إذا كان بالأمس تزيد الـ Streak بـ 1، وإذا فات يوم تعيد العداد للصفر.
- بناء مسار `GET /api/v1/users/me/activity` لإرجاع مصفوفة النشاط اليومي لآخر 365 يومًا لرندرة خريطة الـ Heatmap.
- تحديث مكوّن `StreakHeatmap.tsx` في لوحة التحكم لعرض النشاط الموثق القادم من السيرفر.
- عرض شارة '🔥 استمرارية نشطة' في الهيدر والملف الشخصي.

## متطلبات واجهة المستخدم UI Requirements
خريطة نشاط دقيقة تعكس السجلات الفعلية المخزنة في قاعدة البيانات.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع عرض لوحة التحكم على كافة الأجهزة.

## متطلبات إمكانية الوصول Accessibility Requirements
تسميات دلالية لعدد أيام الاستمرارية.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/streakService.ts`
- `server/src/routes/users.ts`
- `src/hooks/useUserProgress.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
حساب الـ Streak في الخادم يعتمد على مقارنة فارق الأيام بتوقيت الـ UTC لتجنب مشاكل فروق التوقيت بين الدول.

## معايير القبول Acceptance Criteria
- [ ] عداد الاستمرارية وخريطة النشاط يستمدان بياناتهما الحقيقية من الخادم.
- [ ] حساب الـ Streak دقيق ومحمي من أي تلاعب يدوي في المتصفح.
- [ ] لوحة التحكم تعرض الإحصائيات الحية بدقة تامة.

## الاختبار والتحقق اليدوي Manual Testing
1. أكمل درسًا جديدًا وتأكد من تسجيل النشاط وتحديث الـ Heatmap فورًا من بيانات الخادم.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مزامنة الاستمرارية والتقدم مع الخادم المركزي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-127-sync-streak-backend`
- **رسالة الحفظ المقترحة (Commit)**: `feat: synchronize learning streak and activity heatmap with server-side database truth`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء منطق الأعمال الزمني وتتبع النشاط اليومي وحساب الاستمرارية في الواجهات الخلفية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-128
- TASK-129
