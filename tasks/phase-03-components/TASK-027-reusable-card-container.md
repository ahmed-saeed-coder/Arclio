# TASK-027 — بناء هيكل وتنسيق البطاقة القابلة لإعادة الاستخدام (Reusable Card Container)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 03 — مكتبة المكونات الأساسية (Core UI Component Library)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء مكوّن .card مع Card Header و Card Body و Card Footer في ملف مكون مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
البطاقات هي وعاء العرض الرئيسي للمشاريع، المسارات، الدروس، والإحصائيات في كل صفحات ARCLIO.

## المتطلبات السابقة Prerequisites
- TASK-024

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-025, TASK-026

## الهدف Objective
إنشاء ملف `src/styles/components/card.css` وتنسيق بنية البطاقة المعيارية.

## المتطلبات Requirements
- بناء كلاس `.card` بخلفية `--bg-surface` وحدود `--border-subtle` وانحناء `--radius-lg` وانتقال ناعم.
- تطبيق تأثير التحويم `.card:hover` بحدود `--border-strong` ورفع طفيف بالظل.
- تقسيم البطاقة دلاليًا: `.card-header` (العنوان والشارة), `.card-body` (الوصف والمحتوى), `.card-footer` (الأزرار والروابط).
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة نظيفة ذات حدود واضحة ومسافات داخلية متناسقة تفصل الأقسام بانتظام.

## متطلبات التجاوب Responsive Requirements
البطاقة مرنة وتتمدد لتملأ عرض العمود المخصص لها داخل الشبكة Grid.

## متطلبات إمكانية الوصول Accessibility Requirements
دعم تباين الحدود والخلفيات ومراعاة القراءة المنطقية للعناصر.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/card.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
اجعل الـ Card Container خاليًا من أي هوامش خارجية margin ثابتة ليكون قابلاً لإعادة الاستخدام في أي مكان.

## معايير القبول Acceptance Criteria
- [ ] مكوّن البطاقة مقسم بوضوح إلى header و body و footer.
- [ ] تأثير الـ hover سلس وواضح ويعطي شعورًا بالتفاعلية.
- [ ] تم استيراد الملف في main.css بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. أنشئ بطاقة تجريبية متكاملة وتأكد من محاذاة عناصرها وتناسق مسافاتها الداخلية.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن البطاقة كقالب موحد لبناء بطاقات المشاريع والمسارات.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-027-reusable-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create reusable card container component`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء مكونات الحاويات المعيارية المركبة في CSS.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-028
- TASK-031
- TASK-032
- TASK-045
