# TASK-120 — بناء وسيط الصلاحيات المعتمدة على الأدوار RBAC (Role-Based Access Control RBAC)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 14 — توثيق المستخدمين والأمان والصلاحيات (Auth & RBAC)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
بناء وسيط `requireRole('ADMIN' | 'REVIEWER')` لحماية المسارات الحساسة ومنع الطلاب العاديين من الوصول للوحة التحكم وتصحيح المشاريع.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تطبيق مبدأ الصلاحيات الأقل Least Privilege وضمان أن كل مستخدم يصل فقط للوظائف المخصصة لدوره في المنصة.

## المتطلبات السابقة Prerequisites
- TASK-119

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-121, TASK-122

## الهدف Objective
إنشاء `server/src/middleware/rbacMiddleware.ts` لحماية المسارات المشروطة بصلاحيات معينة.

## المتطلبات Requirements
- بناء وسيط `requireAuth` الذي يفحص وجود المستخدم المسجل ويحقن بياناته في `req.user`.
- بناء وسيط `requireRole(...roles)` الذي يفحص تطابق دور المستخدم `req.user.role` مع الأدوار المسموح بها.
- إرجاع كود الحالة `403 Forbidden` مع رسالة 'عذرًا، لا تملك الصلاحيات الكافية للوصول لهذا المورد' عند عدم التطابق.
- تطبيق الوسيط على مسارات إدارة المناهج وتصحيح المشاريع.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `server/src/middleware/rbacMiddleware.ts`
- `server/src/routes/admin.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
التفريق بين 401 Unauthorized (غير مسجل دخول) و 403 Forbidden (مسجل دخول لكن ليس لديك صلاحية) هو معيار أساسي في تصميم الـ REST APIs.

## معايير القبول Acceptance Criteria
- [ ] المستخدم غير المسجل يتم منعه بكود 401.
- [ ] المستخدم الذي لا يملك الدور المناسب يتم منعه بكود 403.
- [ ] المشرف أو المراجع المصرح له يمر بسلاسة إلى المسار المحمي.

## الاختبار والتحقق اليدوي Manual Testing
1. حاول الوصول لمسار المشرفين بحساب طالب وتأكد من استلام رد 403 Forbidden.
2. ادخل بحساب Admin وتأكد من فتح المسار بنجاح 200 OK.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال وسيط إدارة الصلاحيات RBAC وحماية المسارات الحساسة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-120-rbac-middleware`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create role-based access control rbac authorization middleware`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم الفرق بين المصادقة Authentication والتفويض Authorization وتطبيق معايير الـ RBAC.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-121
- TASK-122
- TASK-123
