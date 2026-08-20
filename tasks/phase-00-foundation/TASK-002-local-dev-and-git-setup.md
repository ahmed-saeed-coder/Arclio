# TASK-002 — إعداد البيئة المحلية وفحص Git (Local Dev Environment & Git Setup)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 00 — التأسيس وإعداد الفريق (Project & Team Foundation)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
تأكيد تثبيت Git، محرر VS Code، وتوليد مفاتيح SSH وتهيئة الاسم والإيميل بشكل صحيح.

## لماذا توجد هذه المهمة؟ Why This Task Exists
البيئة المحلية المضبوطة تمنع مشاكل الصلاحيات وضياع المساهمات في سجل Git.

## المتطلبات السابقة Prerequisites
- TASK-001

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-004, TASK-005, TASK-008

## الهدف Objective
تهيئة بيئة التطوير على جهاز المطور وتشغيل الصفحة التجريبية محليًا.

## المتطلبات Requirements
- التأكد من تثبيت Git عبر كتابة `git --version`.
- ضبط اسم المطور وإيميله: `git config --global user.name` و `git config --global user.email`.
- فتح مجلد المشروع في VS Code وتثبيت إضافة Live Server.
- فتح ملف src/index.html في المتصفح والتأكد من ظهوره.

## متطلبات واجهة المستخدم UI Requirements
عرض الصفحة التجريبية بنجاح على المتصفح المحلي.

## متطلبات التجاوب Responsive Requirements
فتح أدوات المطور DevTools والتأكد من تحميل الصفحة بدون أخطاء في الـ Console.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- تعديل أي محتوى في src/index.html في هذه المهمة.

## ملاحظات التنفيذ Implementation Notes
راجع دليل Git في guides/GIT-GUIDE.md إذا واجهت أي مشكلة في إعداد الأوامر.

## معايير القبول Acceptance Criteria
- [ ] أمر git --version يعمل بنجاح في الطرفية Terminal.
- [ ] تم ضبط هوية المطور في Git.
- [ ] تم تشغيل صفحة المشروع محليًا عبر المتصفح بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. التقط لقطة شاشة للطرفية وهي تعرض إصدار Git وإعدادات الاسم والإيميل.
2. تأكد من عمل إضافة Live Server وظهور الصفحة على localhost.

## تعريف الانتهاء للمهمة Definition of Done
جاهزية بيئة التطوير للبدء في المهام البرمجية واستيفاء الفحص المحلي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `docs/task-002-dev-environment-setup`
- **رسالة الحفظ المقترحة (Commit)**: `docs: verify local development environment and git config`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان إعداد أدوات التطوير المحلية وضبط هوية المساهم في Git.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-003
