# TASK-134 — بناء نظام الإبلاغ والإشراف على ميثاق السلوك (Code of Conduct Moderation Tool)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
بناء نافذة الإبلاغ عن التعليقات أو السلوكيات المخالفة لميثاق السلوك وطابور مراجعة البلاغات للمشرفين.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الحفاظ على بيئة تعليمية آمنة، مشجعة، وخالية من التنمر أو التعليقات المسيئة لجميع المتعلمين.

## المتطلبات السابقة Prerequisites
- TASK-129

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-135

## الهدف Objective
إنشاء `src/components/community/ReportModal.tsx` ومسار `POST /api/v1/moderation/report`.

## المتطلبات Requirements
- إضافة زر 'إبلاغ ⚑' بجوار التعليقات والمشاريع يفتح نافذة منبثقة لاختيار سبب المخالفة (إساءة، تنمر، محتوى مضلل، أخرى).
- حفظ البلاغ في جدول `ModerationReport` في قاعدة البيانات وإرسال تنبيه للمشرفين.
- إخفاء التعليق المبلغ عنه تلقائيًا إذا تكررت البلاغات لحين مراجعته من الإدارة.
- إظهار رسالة شكر ودية للمستخدم على مساعدته في حماية المجتمع.

## متطلبات واجهة المستخدم UI Requirements
نافذة إبلاغ سرية وهادئة تتيح كتابة تفاصيل المخالفة بسهولة.

## متطلبات التجاوب Responsive Requirements
تتمركز المودال وتلائم شاشات الهواتف والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معايير المودال الدلالية وإمكانية الإغلاق بالكيبورد.

## الملفات ومناطق العمل Files / Areas
- `src/components/community/ReportModal.tsx`
- `server/src/controllers/moderationController.ts`
- `server/src/routes/moderation.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
الحفاظ على سلامة المجتمع هو الركيزة التي تضمن استمرار بيئة تعليمية صحية ومحفزة للجميع.

## معايير القبول Acceptance Criteria
- [ ] إرسال البلاغ يحفظ البيانات في قاعدة البيانات بأمان.
- [ ] النافذة المنبثقة سهلة الاستخدام وتغلق بسلاسة.
- [ ] المشرفون يستطيعون رؤية البلاغات في لوحة التحكم.

## الاختبار والتحقق اليدوي Manual Testing
1. أبلغ عن تعليق تجريبي وتأكد من استلام البلاغ في قاعدة البيانات وظهور رسالة الشكر التأكيدية.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام الإبلاغ والإشراف المجتمعي في المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-134-moderation-reporting`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement code of conduct moderation reporting tool and community protection workflows`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء أدوات الإشراف المجتمعي Content Moderation وحماية المنصات التعليمية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-135
- TASK-136
