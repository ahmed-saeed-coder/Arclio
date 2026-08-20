# TASK-038 — التحكم في فتح وإغلاق النافذة المنبثقة وحصر التركيز (Accessible Modal Script)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 04 — أساسيات JavaScript والتفاعل مع الـ DOM (JS Foundations & DOM)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
فتح وإغلاق المودال عبر الكيبورد وإغلاقها بزر Escape وحصر التركيز داخلها (Focus Trap).

## لماذا توجد هذه المهمة؟ Why This Task Exists
النوافذ المنبثقة يجب ألا تسمح للمستخدم بالتبويب خارجها بالخطأ أثناء فتحها لتجنب تشتيت الكفيف.

## المتطلبات السابقة Prerequisites
- TASK-034
- TASK-035

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-039, TASK-040

## الهدف Objective
إنشاء ملف `src/scripts/modal.js` لبناء دالة إدارة المودال مع ميزة Focus Trap.

## المتطلبات Requirements
- كتابة دالة `openModal(modalElement)` باستخدام ميزة `modalElement.showModal()` الأصلية.
- كتابة دالة `closeModal(modalElement)` مع إعادة التركيز للزر الذي قام بفتح المودال.
- إغلاق المودال عند النقر على الخلفية المعتمة ::backdrop.
- حصر دورة التبويب (Tab Cycle) داخل العناصر التفاعلية في المودال فقط.

## متطلبات واجهة المستخدم UI Requirements
فتح المودال مع تأثير انتقال ناعم وإغلاق فوري عند النقر على زر الإلغاء أو الخلفية.

## متطلبات التجاوب Responsive Requirements
تتمركز المودال في وسط الشاشة ولا تخرج عن حدود العرض.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معيار الـ Focus Trap وإعادة الفوكس للزناد الأصلي عند الإغلاق.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/modal.js`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدام `dialog.showModal()` يوفر ميزة الـ Focus Trap تلقائيًا في المتصفحات الحديثة.

## معايير القبول Acceptance Criteria
- [ ] المودال تفتح وتغلق عبر دوال JavaScript مخصصة.
- [ ] الضغط على Tab داخل المودال لا يخرج إلى عناصر الصفحة الخلفية.
- [ ] الضغط على Escape يغلق المودال بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح المودال واضغط Tab عدة مرات وتأكد من دوران التركيز بين أزرار المودال فقط.
2. اضغط Escape وتأكد من انغلاقها وعودة التركيز لزر الفتح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال سكربت المودال المتاح لجميع صفحات ومكونات المنصة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-038-accessible-modal-script`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create accessible modal controller with focus management`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم إدارة التركيز Focus Management وبناء واجهات منبثقة متوافقة مع معايير الوصول.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-044
- TASK-070
