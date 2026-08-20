# TASK-016 — ضبط إطار التركيز وإمكانية الوصول لمستخدمي الكيبورد (Focus Rings & a11y Baseline)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 01 — الأساس البصري ومتغيرات التصميم (Visual Foundation & Tokens)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تطبيق :focus-visible لجميع العناصر التفاعلية ورابط التخطي للمحتوى Skip Link لضمان سهولة التنقل بالكيبورد.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مستخدمو لوحة المفاتيح وقارئات الشاشة يعتمدون كليًا على إطار التركيز البصري لمعرفة العنصر النشط حاليًا.

## المتطلبات السابقة Prerequisites
- TASK-014
- TASK-015

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-017

## الهدف Objective
تهيئة محددات `:focus-visible` وزر `.skip-link` في base.css.

## المتطلبات Requirements
- تطبيق إطار تركيز أنيق وعالي التباين: `:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 3px; }`.
- بناء زر تخطي المحتوى `.skip-link` بحيث يكون مخفيًا بصريًا ويظهر فقط عند التركيز عليه بالـ Tab.
- ربط زر التخطي بحاوية المحتوى الرئيسي `<main id='main-content'>`.

## متطلبات واجهة المستخدم UI Requirements
إطار تركيز أزرق مشع لا يظهر عند النقر بالماوس ويظهر فقط عند التنقل بمفتاح Tab.

## متطلبات التجاوب Responsive Requirements
يعمل على كافة المتصفحات الحديثة والأجهزة التي تدعم لوحات المفاتيح.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق المعيار الإلزامي WCAG 2.1 Focus Visible (Level AA).

## الملفات ومناطق العمل Files / Areas
- `src/styles/base.css`
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
خاصية `:focus-visible` هي الحل الذكي الذي يرضي المصممين (بدون خطوط مزعجة للماوس) ويدعم إمكانية الوصول.

## معايير القبول Acceptance Criteria
- [ ] زر Skip Link يظهر في أعلى الشاشة بمجرد الضغط على Tab لأول مرة.
- [ ] الضغط على Enter أثناء التركيز على Skip Link ينقل التركيز مباشرة للمحتوى الرئيسي.
- [ ] جميع الروابط والأزرار والحقول تعرض إطار تركيز واضح عند التبويب.

## الاختبار والتحقق اليدوي Manual Testing
1. أعد تحميل الصفحة واضغط على زر Tab ولاحظ ظهور زر 'الانتقال للمحتوى الرئيسي'.
2. اضغط Enter وتأكد من انتقال الفوكس لمنطقة <main>.

## تعريف الانتهاء للمهمة Definition of Done
اجتياز فحص التنقل بالكيبورد بنسبة 100% واعتماد baseline إمكانية الوصول.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-016-focus-rings-a11y`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement focus-visible rings and skip-to-content link`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم الفرق بين :focus و :focus-visible وكيفية بناء مواقع تدعم مستخدمي الكيبورد.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-017
- TASK-024
