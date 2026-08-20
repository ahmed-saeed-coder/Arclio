# TASK-075 — بناء محرر الأكواد متعدد التبويبات HTML/CSS/JS (Multi-tab Code Editor UI)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء محرر كتابة الأكواد مع تبويبات HTML و CSS و JavaScript ودعم الترقيم السطري والمسافات البادئة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير مساحة كتابة كود مريحة للطالب تحاكي بيئة المحررات الحقيقية مع تمييز لغات الويب الثلاث.

## المتطلبات السابقة Prerequisites
- TASK-073

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-076, TASK-077

## الهدف Objective
إنشاء `src/scripts/playground-editor.js` وبناء واجهة محرر الأكواد والتبديل بين التبويبات.

## المتطلبات Requirements
- بناء شريط تبويبات المحرر: تبويب HTML، تبويب CSS، تبويب JS مع أيقونات ملونة لكل لغة.
- استخدام حقول `<textarea class='code-textarea' spellcheck='false'>` مخصصة لكتابة الأكواد بخط Monospace.
- دعم زر Tab داخل المحرر لإدراج مسافتين بدلاً من الانتقال للعنصر التالي `event.preventDefault()`.
- حفظ الكود المكتوب في مسودة مؤقتة في LocalStorage لمنع ضياع الكود عند التحديث.

## متطلبات واجهة المستخدم UI Requirements
محرر كود داكن أنيق بخط 'JetBrains Mono' مع أرقام أسطر وتظليل ناعم للسطر النشط.

## متطلبات التجاوب Responsive Requirements
يتكيف المحرر مع العرض المتاح ويوفر مساحة كتابة مريحة.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير وسيلة بديلة للخروج من المحرر بمفتاح Escape لمستخدمي الكيبورد (Keyboard Trap Escape).

## الملفات ومناطق العمل Files / Areas
- `src/scripts/playground-editor.js`
- `src/styles/components/playground.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
اعتراض زر Tab لطباعة مسافات برمجية هو الميزة الأكثر طلبًا من المطورين في محررات المتصفح.

## معايير القبول Acceptance Criteria
- [ ] المحرر يسمح بكتابة وتعديل كود HTML و CSS و JS في تبويبات منفصلة.
- [ ] الضغط على Tab يدرج مسافتين بنجاح.
- [ ] الكود يظل محفوظًا في LocalStorage عند تحديث الصفحة.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب كودًا في تبويب HTML واضغط Tab وتأكد من إدراج المسافة.
2. أعد تحميل الصفحة وتأكد من بقاء الكود المكتوب.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال واجهة محرر الأكواد متعدد التبويبات وتفاعليته.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-075-code-editor-ui`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create multi-tab in-browser code editor with tab key indentation support`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء واجهات محررات الأكواد المخصصة والتحكم في أحداث لوحة المفاتيح المتقدمة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-076
- TASK-077
