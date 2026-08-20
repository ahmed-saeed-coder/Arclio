# TASK-050 — البحث المباشر في المشاريع مع تقنية Debounce (Realtime Debounced Search)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تطبيق البحث بالاسم والوصف مع تأخير الاستدعاء 300ms (Debounce) لتحسين الأداء وتجنب الرندرة المفرطة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
البحث الفوري مع كل حرف يكتبه المستخدم قد يسبب بطء في الواجهة؛ تقنية Debounce تؤجل البحث حتى يتوقف المستخدم عن الكتابة.

## المتطلبات السابقة Prerequisites
- TASK-029
- TASK-047

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-051, TASK-052

## الهدف Objective
بناء دالة `debounce(fn, delay)` وتطبيقها على حدث `input` في حقل البحث.

## المتطلبات Requirements
- كتابة دالة مساعدة عامة `debounce(callback, delay = 300)` باستخدام `setTimeout` و `clearTimeout`.
- الاستماع لحدث `input` على حقل البحث `#project-search` وتمريره عبر دالة الـ debounce.
- البحث بمطابقة النصوص غير الحساسة لحالة الأحرف `toLowerCase()` والمسافات الزائدة `trim()` في العنوان والوصف.
- إعادة رندرة شبكة المشاريع بالنتائج المطابقة.

## متطلبات واجهة المستخدم UI Requirements
نتائج البحث تتحدث بسلاسة فور توقف المطور عن الكتابة بنصف ثانية تقريبًا.

## متطلبات التجاوب Responsive Requirements
حقل البحث يعمل بسرعة على كافة الأجهزة.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث السمة `aria-busy` أثناء معالجة البحث وتحديث منطقة النتائج `aria-live='polite'`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تقنية Debounce هي مفهوم كلاسيكي في أسئلة المقابلات الهندسية وممارسة أساسية في تطبيقات الويب الاحترافية.

## معايير القبول Acceptance Criteria
- [ ] البحث يبحث في عنوان المشروع ووصفه بدقة.
- [ ] دالة الـ debounce تؤجل تنفيذ البحث حتى توقف الكتابة لـ 300ms.
- [ ] مسح حقل البحث يعيد عرض جميع المشاريع على الفور.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب كلمة 'card' بسرعة وتأكد من أن البحث ينفذ مرة واحدة فقط بعد انتهاء الكتابة.
2. امسح النص وتأكد من استعادة القائمة الكاملة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال ميزة البحث المباشر المدعومة بتقنية الـ Debounce.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-050-debounced-search`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement realtime debounced project search with input matching`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم الـ Closures و Timers وكيفية بناء واستخدام دوال الـ Debounce في تحسين أداء الواجهات.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-053
- TASK-054
