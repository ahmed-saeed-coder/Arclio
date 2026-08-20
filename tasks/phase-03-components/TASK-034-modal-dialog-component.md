# TASK-034 — بناء وتنسيق النافذة المنبثقة والخلفية المعتمة (Modal Dialog & Backdrop)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء هيكل وتنسيق نافذة منبثقة دلالية باستخدام عنصر dialog مع تنسيق الـ Backdrop في ملف مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تُستخدم النوافذ المنبثقة لعرض تفاصيل التقييم Rubric، وتأكيد الإجراءات، ونماذج التسليم السريعة.

## المتطلبات السابقة Prerequisites
- TASK-025
- TASK-027

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-035

## الهدف Objective
إنشاء ملف `src/styles/components/modal.css` وتنسيق عنصر `<dialog>` وواجهته.

## المتطلبات Requirements
- تنسيق عنصر `dialog.modal` بخلفية `--bg-surface` وحدود `--border-subtle` وظل عميق وتوسيط تلقائي.
- تنسيق الخلفية المعتمة `dialog::backdrop` بلون أسود شبه شفاف مع تأثير تمويه `backdrop-filter: blur(4px)`.
- تقسيم محتوى النافذة: `.modal-header` (العنوان وزر الإغلاق), `.modal-body` (المحتوى), `.modal-footer` (أزرار التأكيد والإلغاء).
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
نافذة منبثقة عصرية تتوسط الشاشة مع خلفية تمويه سينمائية تمنع التشتت.

## متطلبات التجاوب Responsive Requirements
أقصى عرض 600px على الديسكتوب وتمدد بنسبة 90% على الموبايل مع تمرير داخلي إذا زاد المحتوى.

## متطلبات إمكانية الوصول Accessibility Requirements
الاعتماد على عنصر `<dialog>` الأصلي في HTML5 لضمان التوافق التلقائي مع الكيبورد وقارئات الشاشة.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/modal.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
عنصر `<dialog>` الأصلي في HTML5 يغني عن مكتبات الـ JavaScript المعقدة لإدارة النوافذ المنبثقة.

## معايير القبول Acceptance Criteria
- [ ] المودال منسق بشكل احترافي مع زر إغلاق علوي وأزرار سفلية.
- [ ] الخلفية المعتمة ::backdrop تملأ الشاشة بالكامل.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر فتح النافذة المنبثقة باستخدام أمر `dialog.showModal()` في كونسول المتصفح للتأكد من مظهرها.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تصميم وتنسيق مكوّن المودال والاستعداد لبرمجته بالـ JS في المرحلة التالية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-034-modal-dialog`
- **رسالة الحفظ المقترحة (Commit)**: `feat: style semantic modal dialog component and backdrop`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
استكشاف إمكانيات عنصر dialog الحديث في HTML5 وتنسيق الـ ::backdrop الزائفة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-038
- TASK-070
