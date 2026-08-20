# TASK-093 — معالجة أخطاء الشبكة وعرض بانر انقطاع الاتصال (Async Error Handling & Offline Banner)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
الاستماع لحدثي `online` و `offline` في المتصفح وعرض بانر تنبيهي عائم عند انقطاع الإنترنت ومعالجة فشل الـ Fetch.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير تجربة مستخدم مرنة وواضحة ترشد المتعلم عند انقطاع الاتصال بدلاً من ترك الشاشة بيضاء أو صامتة.

## المتطلبات السابقة Prerequisites
- TASK-089

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-094

## الهدف Objective
إنشاء `src/scripts/network-status.js` للاستماع لحالة الشبكة وعرض تنبيهات انقطاع وعودة الاتصال.

## المتطلبات Requirements
- الاستماع لحدثي `window.addEventListener('offline', ...)` و `window.addEventListener('online', ...)`.
- إظهار بانر تحذيري علوي `.offline-banner` بلون برتقالي: '⚠️ يبدو أنك غير متصل بالإنترنت حاليًا'.
- إظهار إشعار أخضر 'تمت استعادة الاتصال بالإنترنت بنجاح ✓' يختفي بعد 3 ثوانٍ عند عودة الشبكة.
- تحديث دوال الـ Fetch لتعرض بطاقة خطأ ودية مع زر 'إعادة المحاولة' عند فشل جلب البيانات.

## متطلبات واجهة المستخدم UI Requirements
بانر علوي مميز يظهر بانزلاق ناعم في أعلى الشاشة دون إخفاء روابط الهيدر الأساسية.

## متطلبات التجاوب Responsive Requirements
يتلاءم مع عرض الشاشة على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تنبيه قارئ الشاشة بحالة الشبكة عبر السمة `role='status'` و `aria-live='assertive'`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/network-status.js`
- `src/styles/components/alert.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
فحص `navigator.onLine` عند بدء التشغيل يحدد حالة الاتصال الأولية بدقة.

## معايير القبول Acceptance Criteria
- [ ] فصل الإنترنت يظهر بانر التنبيه فورًا.
- [ ] إعادة الاتصال تظهر رسالة التأكيد وتخفي البانر.
- [ ] دوال الـ Fetch تعرض رسائل خطأ ودية وزر إعادة المحاولة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح تبويب Network في DevTools واختر وضع 'Offline' وتأكد من ظهور البانر البرتقالي.
2. أعد تفعيل الشبكة وشاهد ظهور رسالة النجاح الخضراء.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام معالجة أخطاء الشبكة ومراقبة حالة الاتصال.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-093-offline-handler`
- **رسالة الحفظ المقترحة (Commit)**: `feat: handle network failures with offline connection banner and retry actions`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إدارة الأحداث الشبكية Network Events وبناء تطبيقات ويب مرنة ومقاومة للأخطاء (Resilient UI).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-094
- TASK-095
