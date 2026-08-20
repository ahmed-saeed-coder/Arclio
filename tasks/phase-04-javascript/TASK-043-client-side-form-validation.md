# TASK-043 — بناء أدوات التحقق من النماذج في جانب العميل (Client-side Form Validation)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
فحص صحة البريد الإلكتروني والحقول الإلزامية وعرض رسائل خطأ واضحة قبل إرسال النموذج.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مساعدة المستخدم في تصحيح أخطاء الإدخال فورًا وتوفير وقت الانتظار وتخفيف الضغط على السيرفر.

## المتطلبات السابقة Prerequisites
- TASK-015
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-041, TASK-042

## الهدف Objective
إنشاء `src/scripts/validation.js` لتوفير دوال تحقق قابلة لإعادة الاستخدام في النماذج.

## المتطلبات Requirements
- كتابة دالة `validateRequired(value)` ودالة `validateEmail(email)` ودالة `validateUrl(url)`.
- الاستماع لحدث `input` أو `blur` للتحقق المباشر أثناء كتابة المستخدم.
- إضافة كلاس `.has-error` وحقن رسالة الخطأ في عنصر `<span class='form-error' aria-live='assertive'>`.
- منع إرسال النموذج `event.preventDefault()` إذا كانت هناك حقول غير صالحة.

## متطلبات واجهة المستخدم UI Requirements
حدود حمراء ناعمة ورسالة خطأ دقيقة تظهر أسفل الحقل غير الصالح مباشرة.

## متطلبات التجاوب Responsive Requirements
رسائل الخطأ تتناسب مع عرض الحقل على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
ربط حقل الإدخال برسالة الخطأ باستخدام سمة `aria-describedby` و `aria-invalid='true'`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/validation.js`
- `src/styles/components/form.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم التعابير النمطية Regular Expressions البسيطة لفحص الإيميل وروابط GitHub.

## معايير القبول Acceptance Criteria
- [ ] التحقق يمنع إرسال البيانات غير الصحيحة.
- [ ] رسائل الخطأ واضحة ومحددة وتشرح المطلوب بدقة.
- [ ] سمات aria-invalid تتحدث لحظيًا مع حالة الحقل.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب إيميل غير صالح وتأكد من ظهور رسالة التنبيه باللون الأحمر.
2. صحح الإيميل وتأكد من اختفاء رسالة الخطأ فورًا.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد وحدة التحقق من النماذج للاستخدام في نماذج التسليم والملف الشخصي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-043-form-validation`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build accessible client-side form validation utilities`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان التحقق من مدخلات المستخدمين واستخدام Regular Expressions وإدارة رسائل الخطأ الدلالية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-044
- TASK-067
