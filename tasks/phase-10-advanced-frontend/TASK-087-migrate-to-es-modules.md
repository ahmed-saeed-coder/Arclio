# TASK-087 — إعادة هيكلة السكربتات بنظام وحدات ES Modules (Migrate to ES Modules Architecture)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تحويل السكربتات العادية إلى وحدات ES Modules قياسية باستخدام `import` و `export` و `<script type='module'>`.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تنظيم الكود في وحدات مستقلة يمنع تلوث النطاق العام Global Scope ويسهل تقسيم العمل بين أعضاء الفريق وصيانة الكود.

## المتطلبات السابقة Prerequisites
- TASK-086

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-088, TASK-089

## الهدف Objective
إعادة هيكلة مجلد `src/scripts/` وإنشاء نقطة تجميع رئيسية `src/scripts/app.js`.

## المتطلبات Requirements
- تعديل وسوم السكربت في الصفحات إلى `<script type='module' src='scripts/app.js'></script>`.
- تصدير الدوال والأدوات عبر `export function ...` في ملفاتها المستقلة (theme.js, nav.js, toast.js, modal.js).
- استيراد الدوال واستدعاؤها داخل `src/scripts/app.js` بشكل منظم.
- التأكد من عمل كافة التفاعلات السابقة بنفس الكفاءة دون أي انقطاع.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (تعديل معماري داخلي).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
الحفاظ على استمرارية كافة تفاعلات سهولة الوصول السابقة.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/app.js`
- `src/scripts/main.js`
- `src/index.html`
- `src/explore.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
وحدات ES Modules تعمل في الوضع الصارم Strict Mode تلقائيًا ولا تلوث النطاق العام window.

## معايير القبول Acceptance Criteria
- [ ] المشروع يستخدم ES Modules الأصلية بنجاح.
- [ ] تم حذف السكربتات المتفرقة وجمعها تحت app.js.
- [ ] جميع التفاعلات (الثيم، القائمة، المودال، التنبيهات) تعمل بسلاسة وبدون أخطاء كونسول.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الصفحة الرئيسية وافحص تبويب Network وتأكد من تحميل الوحدات المستوردة بنجاح.
2. اختبر زر الثيم والقائمة وتأكد من عملهما.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال الانتقال المعماري لوحدات ES Modules واعتمادها في كافة الصفحات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `refactor/task-087-es-modules`
- **رسالة الحفظ المقترحة (Commit)**: `refactor: migrate client scripts to modern es modules architecture with import export`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان مفهوم معمارية الوحدات البرمجية ES Modules وتنظيم الشيفرة البرمجية في تطبيقات الويب.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-088
- TASK-089
- TASK-090
