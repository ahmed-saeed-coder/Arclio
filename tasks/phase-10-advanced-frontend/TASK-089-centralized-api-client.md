# TASK-089 — بناء طبقة جلب البيانات المركزية عبر Fetch API (Centralized API Client Layer)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 10 — معمارية الواجهة المتقدمة والوحدات (Advanced Frontend & Modules)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء وحدة خدمات مركزية `src/services/api.js` تستخدم `fetch()` و `async/await` لجلب البيانات مع معالجة الأخطاء.

## لماذا توجد هذه المهمة؟ Why This Task Exists
محاكاة طريقة جلب البيانات في التطبيقات الاحترافية وتوفير طبقة موحدة لاستدعاء الـ APIs وعزل كود الشبكة.

## المتطلبات السابقة Prerequisites
- TASK-088

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-090, TASK-091

## الهدف Objective
إنشاء `src/services/api.js` وتوفير دوال `getProjects()`, `getProjectById(id)`, `getPaths()`.

## المتطلبات Requirements
- كتابة دالة مساعدة عامة `async function fetchJSON(endpoint)` تستخدم `fetch()` وتفحص `response.ok`.
- معالجة أخطاء الشبكة عبر `try...catch` وإرجاع كائن خطأ منظم أو رمي استثناء مفهوم.
- توفير دوال الخدمة: `getProjects()`, `getProjectById(id)`, `getPaths()`, `getPathById(id)`.
- استيراد واستخدام دوال الخدمة في صفحات الاستكشاف والمسارات بدلاً من الاستيراد المباشر.

## متطلبات واجهة المستخدم UI Requirements
إظهار مكوّن التحميل Skeleton أثناء انتظار جلب البيانات.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
تنبيه قارئ الشاشة ببدء واكتمال جلب البيانات عبر `aria-busy`.

## الملفات ومناطق العمل Files / Areas
- `src/services/api.js`
- `src/scripts/explore.js`
- `src/scripts/path-detail.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
فصل دوال استدعاء الشبكة في مجلد `services/` يجعل الانتقال للباك إند الحقيقي في المراحل القادمة أمرًا في غاية السهولة.

## معايير القبول Acceptance Criteria
- [ ] دوال الخدمة تستخدم async/await وتعيد Promises نظيفة.
- [ ] الأخطاء معالجة بأمان ولا توقف تشغيل التطبيق.
- [ ] صفحات الاستكشاف والمسارات تجلب بياناتها بنجاح عبر طبقة الـ Service.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة explore.html وتأكد في تبويب Network من إرسال طلب fetch لملف projects.json ورندرة البيانات.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد طبقة الخدمات المركزية واستخدام Fetch API في كافة الصفحات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-089-api-client-layer`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build centralized async api service client layer using fetch and async await`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان البرمجة غير المتزامنة Asynchronous JavaScript واستخدام Fetch API و async/await.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-090
- TASK-091
- TASK-092
