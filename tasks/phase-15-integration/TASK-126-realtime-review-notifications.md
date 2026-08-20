# TASK-126 — بناء نظام الإشعارات الفورية بملاحظات المراجعة (Realtime Review Notifications SSE)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء قناة إشعارات فورية باستخدام Server-Sent Events (SSE) لإرسال تنبيه مباشر للطالب فور مراجعة مشروعه.

## لماذا توجد هذه المهمة؟ Why This Task Exists
إعلام الطالب بالنتيجة والملاحظات لحظيًا في الوقت الفعلي دون الحاجة لإعادة تحميل الصفحة يدوياً.

## المتطلبات السابقة Prerequisites
- TASK-125

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-127, TASK-128

## الهدف Objective
إنشاء `server/src/services/sseService.ts` ومكوّن استماع الإشعارات `src/services/sseClient.ts`.

## المتطلبات Requirements
- بناء مسار `GET /api/v1/notifications/stream` الذي يحافظ على اتصال HTTP مفتوح بنمط `text/event-stream`.
- إرسال حدث فوري للطالب المستهدف عند اعتماد أو تصحيح مشروعه من قبل المشرف.
- استماع الواجهة الأمامية للحدث وعرض إشعار Toast فوري 'مبروك! تم اعتماد مشروعك وحصلت على +150 XP 🎉'.
- تحديث جرس الإشعارات في الهيدر برقم الإشعارات غير المقروءة.

## متطلبات واجهة المستخدم UI Requirements
إشعار منبثق فوري جذاب مع وميض أزرق على جرس الإشعارات في الهيدر.

## متطلبات التجاوب Responsive Requirements
يعمل بسلاسة على المتصفحات المختلفة.

## متطلبات إمكانية الوصول Accessibility Requirements
تنبيه قارئ الشاشة بالإشعار الجديد عبر `aria-live='assertive'`.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/sseService.ts`
- `server/src/routes/notifications.ts`
- `src/services/sseClient.ts`
- `src/components/NotificationBell.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
تقنية Server-Sent Events (SSE) خفيفة ومثالية للإشعارات أحادية الاتجاه (من الخادم للعميل) وأسهل بكثير في الصيانة من الـ WebSockets.

## معايير القبول Acceptance Criteria
- [ ] اتصال الـ SSE ينشأ بأمان ويتحقق من هوية المستخدم المسجل.
- [ ] اعتماد مشروع في طابور المراجعة يرسل إشعارًا فوريًا لمتصفح الطالب في نفس اللحظة.
- [ ] جرس الإشعارات يحدّث العداد بدقة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح حساب الطالب في نافذة وحساب المراجع في نافذة أخرى؛ قيم المشروع وشاهد ظهور الإشعار الفوري لدى الطالب في التو واللحظة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام الإشعارات اللحظية الحية عبر تقنية SSE.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-126-realtime-notifications`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement realtime review notifications using server-sent events stream`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان الاتصالات الفورية Realtime Web Communications والتعامل مع تقنية Server-Sent Events.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-127
- TASK-128
- TASK-129
