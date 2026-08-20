# TASK-077 — بناء نظام الفحص والتحقق الآلي من الحلول (Client-side Challenge Validator)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
فحص كود الطالب عبر اختبارات DOM و Regular Expressions والتأكد من استيفاء شروط المسألة بنجاح.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تقديم تقييم فوري وتصحيح آلي لنتيجة التحدي وإخبار الطالب بالنقاط التي نجح فيها وتلك التي تحتاج لتعديل.

## المتطلبات السابقة Prerequisites
- TASK-076

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-078

## الهدف Objective
إنشاء `src/scripts/playground-validator.js` لبناء محرك فحص الشروط وعرض نتائج الاختبارات.

## المتطلبات Requirements
- كتابة دالة `runTests(userCode, challengeRules)` التي تفحص عناصر الـ DOM داخل الـ iframe أو تطابق النصوص بـ Regex.
- عرض لوحة نتائج الاختبارات Test Results متضمنة علامة صح خضراء للمطابق وعلامة X حمراء لغير المطابق.
- عرض رسالة شرح توضيحية بجوار كل اختبار فاشل لمساعدة الطالب على التصحيح.
- تفعيل زر الإرسال النهائي فقط في حال اجتياز جميع الاختبارات (All Tests Passed).

## متطلبات واجهة المستخدم UI Requirements
لوحة نتائج اختبارات واضحة تبرز الاختبارات الناجحة والفاشلة مع وميض أخضر عند النجاح التام.

## متطلبات التجاوب Responsive Requirements
تتلاءم لوحة النتائج مع الجزء السفلي من لوحة التعليمات أو المعاينة.

## متطلبات إمكانية الوصول Accessibility Requirements
إعلام قارئ الشاشة بعدد الاختبارات الناجحة والفاشلة عبر `aria-live='assertive'`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/playground-validator.js`
- `src/styles/components/playground.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
فحص الـ DOM مباشرة (مثال: `iframeDoc.querySelector('button') !== null`) أفضل وأدق من مجرد البحث عن النصوص بالـ Regex.

## معايير القبول Acceptance Criteria
- [ ] التحقق يفحص شروط التحدي بدقة ويعرض حالة كل اختبار.
- [ ] الرسائل التوجيهية تساعد المطور في معرفة سبب فشل أي اختبار.
- [ ] اجتياز جميع الاختبارات يفعل حالة النجاح التام.

## الاختبار والتحقق اليدوي Manual Testing
1. اكتب حلاً خاطئًا واضغط 'اختبار'؛ تأكد من ظهور علامات الخطأ والرسائل التوجيهية.
2. اكتب الحل الصحيح وتأكد من تحول جميع الاختبارات للون الأخضر.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال محرك الفحص والتقييم الآلي للتحديات البرمجية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-077-challenge-validator`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build automated test runner and dom assertions challenge validator`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء محركات الاختبارات الآلية Test Runners وتطبيق مفاهيم الـ DOM Assertions.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-078
- TASK-079
