# TASK-135 — بناء لوحة تحكم الإدارة ومؤشرات أداء المنصة (Admin Metrics Dashboard)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 17 — لوحة تحكم الإدارة وتقييم المشاريع (Admin & Instructor Platform)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء صفحة `AdminDashboard.tsx` لعرض إحصائيات المنصة الحية: إجمالي الطلاب، المشاريع المسلمة، نسب الإنجاز، ونشاط المجموعات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين قادة الفريق والمشرفين من متابعة صحة المنصة ونمو الطلاب وتحديد من يحتاج لمساعدة برمجية إضافية.

## المتطلبات السابقة Prerequisites
- TASK-120
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-136, TASK-137

## الهدف Objective
إنشاء `src/admin/AdminDashboard.tsx` ومسار إحصائيات الإدارة `GET /api/v1/admin/metrics`.

## المتطلبات Requirements
- حماية المسار بالكامل عبر وسيط `requireRole('ADMIN')`.
- عرض بطاقات الإحصائيات الأربع: إجمالي الطلاب النشطين، المشاريع المسلمة، متوسط تقييمات المراجعة، ومعدل إكمال المسارات.
- رندرة رسم بياني بسيط للنشاط الأسبوعي للمنصة.
- تضمين شريط تنقل الإدارة: المناهج، طابور المراجعة، إدارة المستخدمين، وسجلات النظام.

## متطلبات واجهة المستخدم UI Requirements
لوحة تحكم إدارية احترافية ذات تقسيمات واضحة وبطاقات مؤشرات أداء KPI بارزة.

## متطلبات التجاوب Responsive Requirements
تخطيط متجاوب يتكيف بين عمودين على التابلت و4 أعمدة على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تسميات دلالية لجميع بطاقات الأرقام والمؤشرات الإحصائية.

## الملفات ومناطق العمل Files / Areas
- `src/admin/AdminDashboard.tsx`
- `server/src/controllers/adminController.ts`
- `server/src/routes/admin.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استعلامات الإحصائيات تستخدم `prisma.user.count()` و `prisma.submission.count()` مع التخزين المؤقت لتحقيق أعلى أداء.

## معايير القبول Acceptance Criteria
- [ ] لوحة تحكم الإدارة تعرض الأرقام الحقيقية القادمة من قاعدة البيانات.
- [ ] المستخدمون العاديون يُمنعون تمامًا من فتح الصفحة بكود 403.
- [ ] التصميم منظم وخالٍ من أي تعقيد بصري زائد.

## الاختبار والتحقق اليدوي Manual Testing
1. ادخل بحساب Admin وتأكد من رندرة بطاقات الإحصائيات ومطابقة الأرقام لعدد السجلات الفعلي.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد لوحة تحكم الإدارة ومؤشرات أداء المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-135-admin-metrics-dashboard`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build administrative metrics dashboard layout and analytics summary endpoints`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء لوحات المتابعة الإدارية Admin Dashboards واستخراج المؤشرات الإحصائية Aggregation Queries.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-136
- TASK-137
- TASK-138
