# TASK-144 — تنظيف وتعقيم مدخلات المستخدمين ضد هجمات XSS (DOMPurify Sanitization)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 19 — تعزيز الأمان وحماية البيانات (Application Security Hardening)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
دمج مكتبة DOMPurify لتعقيم جميع نصوص الـ HTML والـ Markdown القادمة من المستخدمين والتعليقات لمنع هجمات Cross-Site Scripting (XSS).

## لماذا توجد هذه المهمة؟ Why This Task Exists
منع المخترقين من حقن سكربتات خبيثة داخل التعليقات أو الملاحظات التي قد تسرق حسابات المستخدمين الآخرين.

## المتطلبات السابقة Prerequisites
- TASK-143

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-145, TASK-146

## الهدف Objective
إنشاء `src/utils/sanitize.ts` وتطبيق التعقيم على كافة النصوص التي تُرندر في الـ DOM.

## المتطلبات Requirements
- تثبيت حزمتي `dompurify` و `@types/dompurify`.
- كتابة دالة `sanitizeHTML(rawHtml)` التي تعقم النصوص وتسمح فقط بالوسوم الآمنة (p, h1-h6, code, pre, ul, li, strong, em).
- حذف أي وسوم سكربت `<script>` أو معالجات أحداث مدمجة مثل `onload` أو `onerror` تلقائيًا.
- تطبيق دالة التعقيم على رندرة تعليقات المشاريع وشروحات المناهج.

## متطلبات واجهة المستخدم UI Requirements
رندرة آمنة للنصوص المنسقة دون التأثير على جمال الخطوط والتنسيقات.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
الحفاظ على سلامة الوسوم الدلالية بعد التعقيم.

## الملفات ومناطق العمل Files / Areas
- `src/utils/sanitize.ts`
- `src/components/community/DiscussionThread.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
لا تثق أبدًا بأي نص قادم من المستخدم (Never Trust User Input)؛ عقم كل نص قبل رندرته في الـ DOM.

## معايير القبول Acceptance Criteria
- [ ] دالة sanitizeHTML تنظف الأكواد الخبيثة بفعالية تامة.
- [ ] محاولات حقن سكربتات `<script>alert(1)</script>` أو `onerror` يتم إبطالها بنجاح.
- [ ] النصوص البرمجية الآمنة تظهر منسقة وسليمة.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب تعليقًا يحتوي على `<img src='x' onerror='alert(1)'>` وتأكد من حذف خاصية onerror ورندرة النص بأمان دون تنفيذ السكربت.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تطبيق التعقيم الآمن للمدخلات بـ DOMPurify في الواجهة الأمامية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-144-xss-sanitization`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement xss protection and html sanitization utilities using dompurify`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان الوقاية من هجمات الـ Cross-Site Scripting (XSS) واستخدام أدوات التعقيم DOMPurify.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-145
- TASK-146
- TASK-147
