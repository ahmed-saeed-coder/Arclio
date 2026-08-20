# TASK-018 — تنسيق هيدر الموقع للشاشات العريضة (Desktop Header Layout & Spacing)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 02 — تحسين الصفحة الرئيسية وتجاوبها (Initial Home Improvement)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
ترتيب روابط التنقل وشعار المنصة بـ Flexbox مع مسافات متناسقة وتأثير زجاجي علوي Sticky Backdrop.

## لماذا توجد هذه المهمة؟ Why This Task Exists
الهيدر الثابت الأنيق يوفر وصولاً سريعًا لروابط المنصة مع إعطاء طابع بصري حديث.

## المتطلبات السابقة Prerequisites
- TASK-017

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-020, TASK-023

## الهدف Objective
كتابة تنسيقات `.site-header`, `.header-inner`, و `.nav-link` في layout.css للشاشات الكبيرة.

## المتطلبات Requirements
- تطبيق `position: sticky; top: 0; z-index: 100;` على الهيدر مع خلفية شبه شفافة وتأثير `backdrop-filter: blur(8px)`.
- تنسيق `.header-inner` بـ `display: flex; align-items: center; justify-content: space-between; height: 64px;`.
- تنسيق روابط التنقل `.nav-link` بخط متوسط وتأثير انتقال لوني ناعم عند التحويم :hover.

## متطلبات واجهة المستخدم UI Requirements
شعار المنصة على اليمين (في نمط RTL) وروابط التنقل على اليسار مع زر المستودع الثانوي.

## متطلبات التجاوب Responsive Requirements
ظهور كامل للروابط على شاشات الديسكتوب واللابتوب (أكبر من 768px).

## متطلبات إمكانية الوصول Accessibility Requirements
نسبة تباين الروابط لا تقل عن 4.5:1 مع خلفية الهيدر الزجاجية.

## الملفات ومناطق العمل Files / Areas
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/reset.css
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `backdrop-filter: blur()` لجعل المحتوى الذي يمر أسفل الهيدر أثناء التمرير مموهًا وجميلاً.

## معايير القبول Acceptance Criteria
- [ ] الهيدر يظل مثبتًا في أعلى الصفحة أثناء التمرير لأسفل.
- [ ] التأثير الزجاجي الشفاف يعمل بسلاسة دون تشويش على النصوص.
- [ ] الروابط تتغير ألوانها عند مرور الماوس وتستجيب للفوكس بالكيبورد.

## الاختبار والتحقق اليدوي Manual Testing
1. مرر الصفحة لأسفل وتأكد من بقاء الهيدر في قمة النافذة مع تمويه المحتوى خلفه.
2. مرر الماوس على الروابط ولاحظ الانتقال اللوني الناعم.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد تنسيق الهيدر المكتبي وتأكيد مظهره الاحترافي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-018-desktop-header`
- **رسالة الحفظ المقترحة (Commit)**: `feat: style desktop sticky header and navigation layout`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام Flexbox والتثبيت بـ position: sticky والتأثيرات الزجاجية في CSS.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-019
