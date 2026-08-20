# TASK-123 — ربط واجهة React بالـ REST API الحقيقي وقاعدة البيانات (Connect React to REST API)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
استبدال ملفات الـ JSON الثابتة بربط حقيقي بين واجهة React وخادم Express و Prisma ORM عبر Axios أو Fetch الموحد.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تحويل المنصة إلى تطبيق كامل Full-Stack يعمل ببيانات حقيقية مخزنة في قاعدة البيانات المركزية.

## المتطلبات السابقة Prerequisites
- TASK-101
- TASK-120

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-124, TASK-125

## الهدف Objective
إنشاء `src/services/apiClient.ts` وتحديث خطافات البيانات للاتصال بنقاط نهاية الـ REST API الحقيقية.

## المتطلبات Requirements
- بناء عميل API موحد `apiClient.ts` مع ضبط `baseURL: 'http://localhost:5000/api/v1'` وخاصية `credentials: 'include'` لتمرير الكوكيز.
- تحديث خطاف `useProjects` لاستدعاء `/api/v1/projects` وخطاف `usePaths` لاستدعاء `/api/v1/paths`.
- بناء معالج الأخطاء المركزي في جانب العميل لتحويل أخطاء السيرفر إلى رسائل Toast مفهومة.
- التأكد من رندرة المشاريع والمسارات القادمة مباشرة من قاعدة البيانات.

## متطلبات واجهة المستخدم UI Requirements
تجربة تصفح سريعة مع ظهور مؤشرات التحميل Skeleton أثناء استدعاء الخادم.

## متطلبات التجاوب Responsive Requirements
استقرار الاتصال عبر كافة الأجهزة والشبكات.

## متطلبات إمكانية الوصول Accessibility Requirements
الحفاظ على التنبيهات الدلالية لحالات التحميل والأخطاء.

## الملفات ومناطق العمل Files / Areas
- `src/services/apiClient.ts`
- `src/hooks/useProjects.ts`
- `src/hooks/usePaths.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
خاصية `credentials: 'include'` ضرورية جدًا لتمكين المتصفح من إرسال واستقبال الكوكيز الآمنة مع كل طلب للـ API.

## معايير القبول Acceptance Criteria
- [ ] تطبيق React متصل بالكامل بخادم Express ويجلب البيانات من PostgreSQL عبر Prisma.
- [ ] الكوكيز الآمنة تُرسل تلقائيًا مع الطلبات المحمية.
- [ ] حالات التحميل والأخطاء تدار بسلاسة تامة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح صفحة المشاريع وتأكد في تبويب Network من وصول طلبات HTTP ناجحة 200 إلى السيرفر المحلي ورندرة البيانات الحية.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال الربط الشامل بين الواجهة الأمامية React وخادم الواجهة الخلفية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-123-connect-react-backend`
- **رسالة الحفظ المقترحة (Commit)**: `feat: connect react frontend client to live express and prisma rest api services`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان ربط الـ Frontend بالـ Backend وتأمين الاتصال وتبادل الجلسات عبر الكوكيز.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-124
- TASK-125
- TASK-126
