# TASK-138 — بناء سجل إدارة المستخدمين والإشراف (User Management & Action Logs)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 17 — لوحة تحكم الإدارة وتقييم المشاريع (Admin & Instructor Platform)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
بناء جدول إدارة المستخدمين في لوحة الإدارة (البحث بالاسم، تغيير الدور الوظيفي، وتجميد الحسابات المخالفة).

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين الإدارة من إدارة صلاحيات الفريق (ترقية مطور إلى مراجع أو قائد مجموعة) وتطبيق قرارات ميثاق السلوك.

## المتطلبات السابقة Prerequisites
- TASK-135

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-139

## الهدف Objective
إنشاء `src/admin/UserManagement.tsx` ومسارات `GET /api/v1/admin/users` و `PATCH /api/v1/admin/users/:id/role`.

## المتطلبات Requirements
- عرض جدول المستخدمين: الاسم، الإيميل، الدور الحالي (STUDENT / REVIEWER / ADMIN)، تاريخ الانضمام، ونقاط الـ XP.
- إمكانية ترقية دور المستخدم عبر قائمة منسدلة فورية مع تأكيد الأكشن.
- إمكانية تجميد الحسابات المخالفة لميثاق السلوك وحظر تسجيل الدخول.
- تسجيل جميع إجراءات المشرفين في جدول سجلات النظام `AdminAuditLog` لمراجعتها لاحقًا.

## متطلبات واجهة المستخدم UI Requirements
جدول مستخدمين منظم يدعم البحث والترتيب وتغيير الصلاحيات بسرعة.

## متطلبات التجاوب Responsive Requirements
الجدول يدعم التمرير الأفقي الناعم على الشاشات المتوسطة.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين وسوم الجداول الدلالية وعناوين الأعمدة th.

## الملفات ومناطق العمل Files / Areas
- `src/admin/UserManagement.tsx`
- `server/src/controllers/adminController.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تسجيل كل تغيير صلاحية في سجل الـ Audit Log يحمي المنصة ويوثق من قام بكل إجراء وتوقيته.

## معايير القبول Acceptance Criteria
- [ ] تغيير دور المستخدم يحدث في قاعدة البيانات فورًا.
- [ ] الحسابات المجمدة تمنع من تسجيل الدخول وتستلم كود 403 مع رسالة توضيحية.
- [ ] سجل الإجراءات Audit Log يسجل كل حركة بدقة.

## الاختبار والتحقق اليدوي Manual Testing
1. قم بترقية حساب طالب إلى REVIEWER وتأكد من قدرته الفورية على فتح طابور المراجعة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال صفحة إدارة المستخدمين وسجلات المشرفين في لوحة الإدارة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-138-user-management`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create admin user management table with role assignment and audit logging`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء أنظمة إدارة المستخدمين وصلاحيات الحسابات وتوثيق سجلات الأمان Audit Trails.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-139
- TASK-140
