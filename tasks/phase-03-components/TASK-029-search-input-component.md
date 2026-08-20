# TASK-029 — بناء مكوّن حقل البحث مع أيقونة وزر المسح (Search Input with Clear Button)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء حقل بحث تفاعلي المظهر مع أيقونة بحث مدمجة وزر مسح النص ووسم label دلالي.

## لماذا توجد هذه المهمة؟ Why This Task Exists
البحث هو الميزة الأكثر استخدامًا في صفحة استكشاف المشاريع والتحديات.

## المتطلبات السابقة Prerequisites
- TASK-015

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-028, TASK-030

## الهدف Objective
إنشاء ملف `src/styles/components/search-input.css` وتنسيق حاوية البحث المدمجة.

## المتطلبات Requirements
- بناء حاوية `.search-input-wrapper` تحتوي على الحقل وأيقونة SVG وزر المسح.
- تثبيت أيقونة البحث داخل الحقل باستخدام `position: absolute` مع ترك مسافة داخلية مناسبة للنص.
- تنسيق زر المسح `.search-clear-btn` ليظهر داخل الحقل ويستجيب للفوكس.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
حقل بحث احترافي يشبه محركات البحث في منصات المطورين الكبرى.

## متطلبات التجاوب Responsive Requirements
عرض كامل 100% على الموبايل مع إمكانية تحديد max-width على الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
ربط حقل البحث بوسم `<label class='sr-only'>` للقارئات الشاشة وتوفير `aria-label` لزر المسح.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/search-input.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم كلاس `.sr-only` لإخفاء الـ label بصريًا مع إبقائه مقروءًا لأجهزة قارئات الشاشة.

## معايير القبول Acceptance Criteria
- [ ] الأيقونة متموضعة بدقة داخل الحقل دون أن تتداخل مع النص المكتوب.
- [ ] حالة التركيز :focus تبرز الحقل بالكامل بشكل متناسق.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب نصًا طويلاً داخل حقل البحث وتأكد من عدم تداخله مع الأيقونة الجانبية.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن حقل البحث المدمج للاستخدام في صفحات الاستكشاف.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-029-search-input`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create search input component with embedded icons`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان التموضع النسبي والمطلق Position Relative & Absolute في بناء حقول الإدخال المركبة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-050
