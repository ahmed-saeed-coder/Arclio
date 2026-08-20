# TASK-047 — بناء دالة عرض شبكة المشاريع في الـ DOM (Dynamic Project Grid Rendering)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
كتابة دالة تقبل مصفوفة وتولد عناصر الـ DOM وتدرجها في شبكة المشاريع ديناميكيًا.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الانتقال من كتابة الـ HTML الثابت يدويًا إلى التوليد التلقائي للواجهة من مصفوفات البيانات.

## المتطلبات السابقة Prerequisites
- TASK-045
- TASK-046

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-048, TASK-049

## الهدف Objective
إنشاء ملف `src/scripts/explore.js` وبناء دالة `renderProjects(projects, container)`.

## المتطلبات Requirements
- كتابة دالة `createProjectCard(project)` التي تبني عناصر HTML لبطاقة المشروع وتعيد العنصر.
- كتابة دالة `renderProjects(items, container)` التي تمسح المحتوى القديم وتحقن البطاقات الجديدة.
- استخدام شبكة CSS Grid: `display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-6);`.
- استدعاء الدالة عند تحميل الصفحة لعرض جميع المشاريع الأولية.

## متطلبات واجهة المستخدم UI Requirements
شبكة مشاريع متناسقة تتوزع تلقائيًا في 1 إلى 3 أعمدة حسب حجم الشاشة.

## متطلبات التجاوب Responsive Requirements
عمود واحد على الموبايل، عمودان على التابلت، وثلاثة أعمدة على الديسكتوب العريض.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث منطقة الشبكة بسلاسة ودعم قراءة البطاقات المولدة لقارئات الشاشة.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `document.createElement` أو قوالب النصوص Template Literals مع توخي الحذر من ثغرات الأمان.

## معايير القبول Acceptance Criteria
- [ ] المشاريع تظهر في الصفحة بشكل ديناميكي من مصفوفة البيانات.
- [ ] الشبكة متجاوبة بالكامل عبر خاصية repeat(auto-fill, minmax()).
- [ ] لا توجد أخطاء في الـ Console أثناء الرندرة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة explore.html وتأكد من ظهور جميع المشاريع الـ 8 في الشبكة.
2. غير حجم نافذة المتصفح وشاهد إعادة توزيع الأعمدة تلقائيًا.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال دالة عرض المشاريع الديناميكية في صفحة الاستكشاف.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-047-render-project-grid`
- **رسالة الحفظ المقترحة (Commit)**: `feat: render dynamic project grid from data array into dom`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان توليد عناصر الـ DOM ديناميكيًا وبناء الشبكات المتجاوبة بـ CSS Grid.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-048
- TASK-049
- TASK-050
