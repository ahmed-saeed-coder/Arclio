# TASK-147 — بناء خط أتمتة الاختبارات CI عبر GitHub Actions (GitHub Actions CI Pipeline)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 20 — عمليات النشر والإنتاج السحابي (Production DevOps & Deployment)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء ملف سير العمل `.github/workflows/ci.yml` لتشغيل الفحص التلقائي (Linting, TypeScript Check, Unit Tests, Build) مع كل Pull Request جديد.

## لماذا توجد هذه المهمة؟ Why This Task Exists
منع دمج أي كود تالف أو يحتوي على أخطاء برمجية أو اختبارات فاشلة في فرع `main` بشكل آلي تمامًا.

## المتطلبات السابقة Prerequisites
- TASK-139
- TASK-143

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-148

## الهدف Objective
إنشاء `.github/workflows/ci.yml` وضبط مراحل الفحص والتحقق الأوتوماتيكي للواجهة والخادم.

## المتطلبات Requirements
- ضبط تشغيل سير العمل مع كل `push` أو `pull_request` باتجاه فرع `main`.
- إعداد خطوات الواجهة الأمامية: تثبيت الحزم، فحص الـ TypeScript `npm run typecheck`، تشغيل اختبارات Vitest، وبناء الإنتاج `npm run build`.
- إعداد خطوات الخادم: تثبيت الحزم، فحص Prisma Schema، تشغيل اختبارات التكامل Supertest، وبناء كود الـ TypeScript.
- منع دمج الـ PR تلقائيًا في حال فشل أي خطوة في خط الأتمتة (Branch Protection Rules).

## متطلبات واجهة المستخدم UI Requirements
علامة صح خضراء تظهر على الـ Pull Request في GitHub عند نجاح كافة الاختبارات.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `.github/workflows/ci.yml`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
أتمتة التكامل المستمر (Continuous Integration - CI) توفر مئات الساعات على المراجعين وتضمن استقرار النظام الدائم.

## معايير القبول Acceptance Criteria
- [ ] ملف ci.yml مهيأ بدقة وخالٍ من أخطاء الـ YAML النحوية.
- [ ] خط الأتمتة ينفذ فحص الـ Type Check والاختبارات وبناء المشروع بنجاح.
- [ ] فشل أي اختبار يوقف سير العمل ويبلغ المطور فورًا بالخطأ.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح PR تجريبي وشاهد تشغيل GitHub Actions في تبويب Actions وظهور العلامة الخضراء عند النجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تفعيل خط الأتمتة المستمرة CI عبر GitHub Actions.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `ci/task-147-github-actions-pipeline`
- **رسالة الحفظ المقترحة (Commit)**: `ci: create automated github actions ci pipeline for linting testing and building`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة التكامل المستمر Continuous Integration (CI) وأتمتة المهام بـ GitHub Actions.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-148
- TASK-149
