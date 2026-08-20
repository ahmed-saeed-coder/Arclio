# TASK-019 — بناء القائمة المتجاوبة للموبايل (Mobile Navigation Drawer Foundation)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تجهيز زر القائمة وتخطيط القائمة المتجاوبة لشاشات الموبايل الأصغر من 640px.

## لماذا توجد هذه المهمة؟ Why This Task Exists
شاشات الهواتف لا تتسع لعرض جميع الروابط أفقيًا؛ نحتاج لتحويلها إلى قائمة منسدلة أو جانبية أنيقة.

## المتطلبات السابقة Prerequisites
- TASK-018

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-021, TASK-022

## الهدف Objective
إضافة زر القائمة (Hamburger Menu Button) وإخفاء الروابط الأفقية على شاشات الموبايل عبر Media Queries.

## المتطلبات Requirements
- إضافة زر تبديل القائمة `<button class='nav-toggle' aria-label='فتح القائمة' aria-expanded='false'>` في HTML.
- إخفاء زر التبديل على شاشات الديسكتوب (`display: none` عند min-width: 768px).
- إخفاء القائمة الأفقية على الموبايل وتهيئة كلاس `.site-nav.is-open` لعرض الروابط عموديًا.
- ضبط هوامش وأبعاد روابط الموبايل لتوفير مساحة لمس مريحة للأصابع.

## متطلبات واجهة المستخدم UI Requirements
أيقونة خطوط القائمة (SVG) واضحة وتتحول لقائمة عمودية منسدلة عند الفتح.

## متطلبات التجاوب Responsive Requirements
التحويل التلقائي بين القائمة الأفقية وقائمة الموبايل عند نقطة توقف 768px.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث سمة `aria-expanded` لتعريف قارئ الشاشة بحالة القائمة (مفتوحة/مغلقة).

## الملفات ومناطق العمل Files / Areas
- `src/index.html`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css

## ملاحظات التنفيذ Implementation Notes
في هذه المرحلة نبني الهيكل والتنسيق؛ سنفعل التفاعل التلقائي بالـ JavaScript في TASK-037.

## معايير القبول Acceptance Criteria
- [ ] زر القائمة يظهر فقط على شاشات الموبايل ويختفي على الديسكتوب.
- [ ] القائمة الأفقية تختفي على شاشات الموبايل بدون تشويه الهيدر.
- [ ] لا يوجد أي تمرير أفقي على شاشات الموبايل بعرض 375px.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح DevTools وغير العرض إلى 375px وتأكد من ظهور زر القائمة واختفاء الروابط الأفقية.
2. كبر العرض إلى 1024px وتأكد من عودة الهيدر المكتبي الكامل.

## تعريف الانتهاء للمهمة Definition of Done
جاهزية بنية قائمة الموبايل واستيفاء اختبار التجاوب.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-019-mobile-nav-foundation`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create mobile navigation drawer foundation and toggle button`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم كيفية التعامل مع استعلامات الوسائط Media Queries وتكييف القوائم لشاشات اللمس.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-024
- TASK-037
