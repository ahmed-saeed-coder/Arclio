# TASK-042 — بناء نظام التنبيهات العائمة المؤقتة (Toast Notifications System)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إنشاء رسائل تنبيه عائمة تظهر وتختفي تلقائيًا بعد 3 ثوانٍ باستخدام setTimeout و DOM Creation.

## لماذا توجد هذه المهمة؟ Why This Task Exists
إشعار المستخدم بالعمليات السريعة (مثل: 'تم نسخ الرابط'، أو 'تمت إضافة المشروع للمفضلة') دون مقاطعة تصفحه.

## المتطلبات السابقة Prerequisites
- TASK-033
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-041, TASK-043

## الهدف Objective
إنشاء `src/scripts/toast.js` و `src/styles/components/toast.css` لبناء دالة `showToast(message, type)`.

## المتطلبات Requirements
- إنشاء حاوية عائمة مثبتة في زاوية الشاشة `<div class='toast-container' aria-live='polite'>`.
- كتابة دالة `showToast(message, type, duration = 3000)` لإنشاء عنصر Toast وحقنه في الحاوية.
- إضافة تأثير انزلاق ودخول بالـ CSS وتأثير خروج ناعم قبل الحذف من الـ DOM عبر `toast.remove()`.
- استيراد التنسيقات في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
تنبيه عائم أنيق يظهر في أسفل يمين/يسار الشاشة مع شريط تقدم زمني طفيف.

## متطلبات التجاوب Responsive Requirements
تتمركز التنبيهات في أسفل الشاشة بعرض مناسب على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
استخدام السمة `aria-live='polite'` لإعلام قارئ الشاشة بالرسالة بهدوء.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/toast.js`
- `src/styles/components/toast.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `aria-live='polite'` لانتظار انتهاء المستخدم من قراءته الحالية قبل نطق التنبيه.

## معايير القبول Acceptance Criteria
- [ ] دالة showToast تقبل نصوصًا ورسائل مختلفة وتدعم أنواع النجاح والخطأ.
- [ ] التنبيه يختفي ويُحذف تمامًا من الـ DOM بعد انتهاء المدة الزمنية.
- [ ] يمكن استدعاء التنبيه من أي مكان في التطبيق بسهولة.

## الاختبار والتحقق اليدوي Manual Testing
1. استدعِ `showToast('تمت العملية بنجاح!', 'success')` من الكونسول وشاهد ظهور واختفاء التنبيه.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام الـ Toast واستعداده للاستخدام في تفاعلات الحفظ والتسليم.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-042-toast-system`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create toast notification manager with auto-dismiss and aria-live`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان إنشاء عناصر DOM ديناميكيًا باستخدام document.createElement وإدارة التوقيت بـ setTimeout.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-044
- TASK-052
