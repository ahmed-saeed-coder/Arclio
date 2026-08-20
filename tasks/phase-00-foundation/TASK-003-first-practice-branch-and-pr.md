# TASK-003 — أول فرع تجريبي وتطبيق دورة طلب الدمج (First Practice Branch & PR Workflow)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 00 — التأسيس وإعداد الفريق (Project & Team Foundation)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
ممارسة دورة عمل الفروع كاملة (Checkout, Branch, Commit, Push, Open PR).

## لماذا توجد هذه المهمة؟ Why This Task Exists
كسر حاجز الخوف من أوامر Git والتأكد من إتقان فتح طلبات الدمج بشكل احترافي.

## المتطلبات السابقة Prerequisites
- TASK-002

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-004, TASK-005, TASK-008

## الهدف Objective
إنشاء فرع جديد وتعديل بسيط على التوثيق لفتح أول Pull Request حقيقي.

## المتطلبات Requirements
- سحب آخر نسخة من main: `git pull origin main`.
- إنشاء فرع باسم `docs/task-003-practice-pr`.
- إضافة اسمك إلى قائمة المتعلمين في ملف learning/README.md.
- حفظ التغيير برسالة `docs: add my name to contributors list`.
- رفع الفرع وفتح Pull Request باستخدام النموذج المعتمد.

## متطلبات واجهة المستخدم UI Requirements
لا توجد متطلبات UI.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `learning/README.md`

## ملفات ممنوع تعديلها Do Not Touch
- أي ملفات أخرى داخل المشروع.

## ملاحظات التنفيذ Implementation Notes
املأ جميع حقول الـ PR Template بعناية لتتعود على التوثيق الهندسي.

## معايير القبول Acceptance Criteria
- [ ] تم إنشاء الفرع بالتسمية الصحيحة.
- [ ] رسالة الـ Commit تتبع أسلوب Conventional Commits.
- [ ] تم فتح الـ PR واستيفاء خانات النموذج وطلب المراجعة من قائد الفريق.

## الاختبار والتحقق اليدوي Manual Testing
1. التأكد من ظهور الـ PR على واجهة GitHub مع وجود علامة خضراء للدمج.
2. التأكد من عدم وجود Merge Conflicts مع فرع main.

## تعريف الانتهاء للمهمة Definition of Done
دمج الـ PR التجريبي في main وحذف الفرع بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `docs/task-003-practice-pr`
- **رسالة الحفظ المقترحة (Commit)**: `docs: practice first branch and pull request lifecycle`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان دورة عمل Git وفروع الميزات وفتح طلبات الدمج ومراجعتها.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-004
- TASK-005
- TASK-006
