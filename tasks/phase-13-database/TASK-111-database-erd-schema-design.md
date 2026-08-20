# TASK-111 — تصميم مخطط الكيانات والعلاقات ERD لقاعدة البيانات (Database ERD & Schema Design)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 13 — قواعد البيانات العلائقية و Prisma ORM (Database & Prisma)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تصميم مخطط قاعدة البيانات العلائقية (Users, LearningPaths, Modules, Lessons, Projects, Submissions, Reviews) وتوثيقه في docs/database/DATABASE-SCHEMA.md.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التصميم السليم للعلاقات بين الجداول والمفاتيح الأجنبية Foreign Keys يمنع تكرار البيانات ويضمن سلامتها وتناسقها.

## المتطلبات السابقة Prerequisites
- TASK-110

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-112

## الهدف Objective
إنشاء `docs/database/DATABASE-SCHEMA.md` وتوثيق الكيانات والحقول والعلاقات والمؤشرات Indexes.

## المتطلبات Requirements
- تصميم جداول المستخدمين والصلاحيات: `User` (id, email, passwordHash, name, role, xp, streak).
- تصميم جداول المناهج: `LearningPath`, `Module`, `Lesson` مع علاقات One-to-Many.
- تصميم جداول المشاريع والتسليمات: `Project`, `Submission`, `ReviewFeedback` مع علاقات الربط بالمستخدم.
- توثيق المفاتيح الأساسية Primary Keys، المفاتيح الأجنبية Foreign Keys، والقيود الفريدة Unique Constraints.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (توثيق معماري ومخططات).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `docs/database/DATABASE-SCHEMA.md`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
استخدام مخططات الـ Mermaid داخل ملف الماركداون يتيح رسم مخطط الـ ERD بصريًا وجميلاً.

## معايير القبول Acceptance Criteria
- [ ] مخطط قاعدة البيانات شامل لجميع متطلبات المنصة وموثق برسم ERD واضح.
- [ ] العلاقات بين الجداول محددة بدقة مع خيارات الحذف المتسلسل Cascade Delete المناسبة.
- [ ] تمت مراجعة التصميم واعتماده من قائد الفريق.

## الاختبار والتحقق اليدوي Manual Testing
1. راجع مخطط العلاقات وتأكد من سلامة الربط بين المستخدمين والمشاريع والمسارات والتقييمات.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد المخطط المعماري لقاعدة بيانات المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `docs/task-111-database-schema-design`
- **رسالة الحفظ المقترحة (Commit)**: `docs: design and document relational database entity relationship diagram and schema`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان نمذجة قواعد البيانات العلائقية Relational Database Modeling وتصميم مخططات الـ ERD.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-112
- TASK-113
