# TASK-092 — مزامنة معاملات الـ URL مع الفلاتر والبحث (URL Query Params State Sync)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تحديث رابط المتصفح بمعاملات البحث (مثال: `?q=card&difficulty=beginner`) عبر URLSearchParams وقراءتها عند الفتح.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المستخدم من مشاركة رابط البحث والفلترة المخصصة مع زملائه أو حفظها في المفضلة واسترجاع نفس النتائج فورًا.

## المتطلبات السابقة Prerequisites
- TASK-091

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-093, TASK-094

## الهدف Objective
إنشاء `src/scripts/url-state.js` لمزامنة مدخلات البحث والفلاتر مع رابط الـ URL.

## المتطلبات Requirements
- كتابة دالة `syncFiltersToURL(filters)` التي تستخدم `new URLSearchParams()` وتحديث الرابط عبر `history.replaceState()`.
- كتابة دالة `readFiltersFromURL()` لقراءة المعاملات عند تحميل صفحة الاستكشاف وضبط حقول الإدخال تلقائيًا.
- تطبيق الفلاتر المستخرجة من الرابط فور فتح الصفحة لتوليد نفس النتائج للمستخدم.

## متطلبات واجهة المستخدم UI Requirements
رابط متصفح تفاعلي يتغير لحظيًا أثناء البحث والفلترة دون إعادة تحميل الصفحة.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/url-state.js`
- `src/scripts/explore.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `history.replaceState()` بدلاً من `pushState()` أثناء كتابة البحث لمنع امتلاء سجل المتصفح بحروف فردية.

## معايير القبول Acceptance Criteria
- [ ] تغيير الفلاتر يكتب المعاملات في الـ URL فورًا.
- [ ] نسخ الرابط وفتحه في نافذة جديدة يفتح نفس نتائج البحث المصفاة بدقة.
- [ ] مسح الفلاتر ينظف الـ URL ويعيده للمسار الأساسي.

## الاختبار والتحقق اليدوي Manual Testing
1. اختر صعوبة 'Beginner' وانسخ الرابط وافتحه في تبويب جديد؛ تأكد من ضبط القائمة وفلترة المشاريع تلقائيًا.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مزامنة الفلاتر مع معاملات الـ URL بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-092-url-state-sync`
- **رسالة الحفظ المقترحة (Commit)**: `feat: synchronize search query and filter parameters with browser url state`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع كائن URLSearchParams وإدارة حالة الـ URL كمصدر وحيد للحقيقة (URL as State).

## المهام التالية المقترحة Next Recommended Tasks
- TASK-093
- TASK-094
