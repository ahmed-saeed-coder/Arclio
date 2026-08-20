# TASK-066 — بناء بطاقة معاينة تصاميم Figma ومصادر المشروع (Project Design Reference Embed)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 07 — تعميق نظام المشاريع ومواصفات التذاكر (Project System Deepening)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
عرض بطاقة مراجع التصميم مع روابط ملفات Figma وصور المعاينة وأصول المشروع Assets القابلة للتحميل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير مراجع بصرية دقيقة تساعد المطور على مطابقة كود الـ CSS مع التصميم الحقيقي (Pixel Perfect UI).

## المتطلبات السابقة Prerequisites
- TASK-063

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-064, TASK-065

## الهدف Objective
إنشاء بطاقة مراجع التصميم في صفحة المشروع وتنسيق روابط فتح Figma وتحميل الصور والأيقونات.

## المتطلبات Requirements
- بناء بطاقة `.design-reference-card` متضمنة صورة مصغرة للتصميم النهائي (Desktop & Mobile Preview).
- إضافة زر مباشر 'فتح ملف التصميم في Figma ↗' ورابط تحميل حزمة الأصول (Starter Assets ZIP/Folder).
- عرض جدول قيم الألوان والخطوط المستخدمة في المشروع كمرجع سريع.
- تضمين التنسيقات في `src/styles/components/project-detail.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة جذابة ذات معاينة بصرية واضحة وأزرار إجراء بارزة.

## متطلبات التجاوب Responsive Requirements
الصور مرنة وتتلاءم مع عرض الحاوية على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين نص بديل واضح alt لصورة معاينة التصميم وروابط خارجية آمنة rel='noopener noreferrer'.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/project-detail.css`
- `src/project-detail.html`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم دائمًا `rel='noopener noreferrer'` عند فتح الروابط الخارجية في تبويب جديد `target='_blank'` لحماية أمان المتصفح.

## معايير القبول Acceptance Criteria
- [ ] بطاقة مراجع التصميم تحتوي على صور المعاينة وروابط المصادر.
- [ ] الروابط الخارجية آمنة وتفتح في تبويب جديد.
- [ ] جدول الألوان والخطوط واضح وسهل القراءة.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر على رابط Figma وتأكد من فتحه في تبويب خارجي مع التأكد من سمات الأمان.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد بطاقة مراجع وأصول التصميم في صفحة المشروع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-066-design-reference-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: add project design reference embed card and downloadable starter assets`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع ملفات Figma كمطور واجهات والالتزام بمتطلبات الأمان في الروابط الخارجية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-067
