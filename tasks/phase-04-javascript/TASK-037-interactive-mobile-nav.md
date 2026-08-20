# TASK-037 — تفعيل القائمة الجانبية للموبايل بـ JavaScript (Interactive Mobile Navigation)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إضافة فتح وإغلاق القائمة الجانبية للموبايل وضبط سمة aria-expanded ودعم زر الإغلاق Escape.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين مستخدمي الهواتف الذكية من تصفح روابط المنصة بسهولة وسلاسة تامة.

## المتطلبات السابقة Prerequisites
- TASK-019
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-036, TASK-038

## الهدف Objective
إنشاء ملف `src/scripts/nav.js` وإضافة مستمعات الأحداث لزر القائمة.

## المتطلبات Requirements
- اختيار زر القائمة `.nav-toggle` وحاوية القائمة `.site-nav` بأمان.
- إضافة كلاس `.is-open` عند الضغط على الزر لفتح القائمة وتحديث `aria-expanded='true'`.
- إغلاق القائمة عند النقر على أي رابط بداخلها أو النقر خارج القائمة (Click Outside).
- إغلاق القائمة عند الضغط على زر `Escape` في لوحة المفاتيح.

## متطلبات واجهة المستخدم UI Requirements
ظهور القائمة بانزلاق ناعم عند النقر على أيقونة الـ Hamburger.

## متطلبات التجاوب Responsive Requirements
القائمة تفتح بكامل العرض أو كقائمة منسدلة أنيقة على شاشات أقل من 768px.

## متطلبات إمكانية الوصول Accessibility Requirements
إمكانية إغلاق القائمة بزر Escape وإرجاع التركيز إلى زر الفتح.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/nav.js`
- `src/index.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تأكد من إزالة كلاس `.is-open` إذا قام المستخدم بتكبير شاشة المتصفح لأكثر من 768px.

## معايير القبول Acceptance Criteria
- [ ] القائمة تفتح وتغلق بنقرة واحدة على الزر.
- [ ] تحديث سمة aria-expanded تلقائيًا عند الفتح والإغلاق.
- [ ] زر Escape يغلق القائمة على الفور.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح وضع الموبايل في DevTools واضغط على زر القائمة ولاحظ الفتح والإغلاق.
2. اضغط على زر Escape وتأكد من انغلاق القائمة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تفاعلية قائمة الموبايل بنسبة 100% بدون أي أخطاء.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-037-interactive-mobile-nav`
- **رسالة الحفظ المقترحة (Commit)**: `feat: enable interactive mobile navigation toggle and keyboard escape`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع أحداث النقر Click Events وتحديث سمات الـ ARIA ديناميكيًا.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-039
- TASK-040
