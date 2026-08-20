# TASK-091 — بناء موجه الصفحات في جانب العميل SPA Router (Client-side SPA Router)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
بناء موجه صفحات مخصص (Hash Router أو History API) للتنقل بين العروض دون إعادة تحميل الصفحة بالكامل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تحويل الموقع إلى تطبيق ويب أحادي الصفحة (Single Page Application - SPA) لسرعة وانسيابية فائقة في التنقل.

## المتطلبات السابقة Prerequisites
- TASK-090

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-092, TASK-093

## الهدف Objective
إنشاء `src/router/router.js` وإدارة استماع حدث `hashchange` أو `popstate` ورندرة العرض المطلوب.

## المتطلبات Requirements
- تعريف جدول المسارات: `'/'` -> الرئيسية، `'/explore'` -> المشاريع، `'/paths'` -> المسارات، `'/dashboard'` -> لوحة التحكم.
- اعتراض نقرات الروابط الداخلية عبر تفويض الأحداث `event.preventDefault()` وتغيير مسار الـ URL.
- رندرة القالب المقابل للمسار داخل حاوية التطبيق المركزية `<div id='app-root'>`.
- تحديث عنوان الصفحة `document.title` والرابط النشط في الهيدر تلقائيًا.

## متطلبات واجهة المستخدم UI Requirements
انتقال فوري وخاطف بين الصفحات بدون وميض أبيض أو إعادة تحميل لملفات التنسيق والسكربتات.

## متطلبات التجاوب Responsive Requirements
يعمل بسلاسة تامة على متصفحات الهواتف والديسكتوب مع دعم زري الرجوع والتقدم في المتصفح.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث التركيز Focus إلى قمة الصفحة الجديدة وتنبيه قارئ الشاشة بتغير الصفحة عبر Live Region.

## الملفات ومناطق العمل Files / Areas
- `src/router/router.js`
- `src/scripts/app.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
فهم كيفية عمل الـ Client-Side Routing من الصفر يجعلك تفهم تمامًا كيف يعمل React Router و Next.js داخليًا.

## معايير القبول Acceptance Criteria
- [ ] التنقل بين الصفحات يتم بدون أي Reload للمتصفح.
- [ ] زرا الرجوع والتقدم في المتصفح يعملان بدقة تامة.
- [ ] عنوان الصفحة يتحدث مع كل مسار جديد.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر بين 'الرئيسية' و 'المشاريع' و 'لوحة التحكم'؛ تأكد من التبديل اللحظي بدون وميض.
2. اضغط على زر الرجوع في المتصفح وتأكد من العودة للصفحة السابقة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال موجه الـ SPA البسيط في جانب العميل واعتماده.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-091-spa-router`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement lightweight client-side spa router with history management`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة التطبيقات أحادية الصفحة SPA وفهم الـ History API وحدث popstate.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-092
- TASK-093
- TASK-095
