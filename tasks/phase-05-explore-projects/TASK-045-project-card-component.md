# TASK-045 — بناء مكوّن بطاقة المشروع HTML و CSS (Project Card Component)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تصميم بطاقة المشروع متضمنة العنوان، الوصف، شارة الصعوبة، وسوم التقنيات، وروابط الأكشن في ملف مستقل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
بطاقة المشروع هي العنصر المرئي الأساسي الذي يعرض معلومات كل مشروع تدريبي في منصة ARCLIO.

## المتطلبات السابقة Prerequisites
- TASK-027
- TASK-044

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-046, TASK-047

## الهدف Objective
إنشاء `src/styles/components/project-card.css` وتنسيق بنية بطاقة المشروع.

## المتطلبات Requirements
- بناء كلاس `.project-card` بالاعتماد على مكوّن `.card` الأساسي.
- تنسيق شارة الصعوبة العلوية وزر القلب للمفضلة في ترويسة البطاقة.
- تنسيق وسوم التقنيات `.tech-tag` في مصفوفة مرنة أسفل الوصف.
- تنسيق زر 'عرض تفاصيل المشروع' في أسفل البطاقة واستيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة مشروع جذابة وواضحة المعالم مع تأثير hover يرفع البطاقة طفيفًا للأعلى.

## متطلبات التجاوب Responsive Requirements
البطاقة تأخذ عرض 100% داخل خلايا الـ CSS Grid على جميع الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير نصوص واضحة لأزرار البطاقة وروابطها.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/project-card.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `display: flex; flex-direction: column; justify-content: space-between;` لضمان محاذاة أزرار الفوتر في جميع البطاقات بنفس المستوى.

## معايير القبول Acceptance Criteria
- [ ] تنسيق بطاقة المشروع مكتمل في ملف مستقل ومستورد في main.css.
- [ ] البطاقة تتكيف مع النصوص الطويلة بدون انكسار في التصميم.
- [ ] أزرار الفوتر متراصفة بانتظام في أسفل جميع البطاقات.

## الاختبار والتحقق اليدوي Manual Testing
1. أنشئ نموذج بطاقة مشروع تجريبية وتأكد من محاذاة عناصرها وشاراتها بدقة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن بطاقة المشروع لجعلها جاهزة للرندرة الديناميكية عبر JavaScript.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-045-project-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: design and style project card component for explore catalog`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان بناء بطاقات المنتجات المركبة باستخدام Flexbox المتوازن.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-047
