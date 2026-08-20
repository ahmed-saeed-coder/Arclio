# TASK-078 — بناء نافذة الاحتفال بحل التحدي ومنح النقاط (Challenge Solved Celebration Modal)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
عرض نافذة منبثقة احتفالية بنجاح حل التحدي وإضافة نقاط الخبرة XP لملف الطالب مع زر للتحدي التالي.

## لماذا توجد هذه المهمة؟ Why This Task Exists
مكافأة المتعلم على إنجازه وتعزيز مشاعر الفخر والإنجاز البرمجي وتحفيزه على الاستمرار.

## المتطلبات السابقة Prerequisites
- TASK-077

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-079

## الهدف Objective
إنشاء `src/scripts/celebration-modal.js` وتفعيل نافذة الاحتفال وإضافة نقاط الخبرة في LocalStorage.

## المتطلبات Requirements
- بناء نافذة الاحتفال `<dialog id='celebration-modal'>` مع أيقونة كأس ذهبية ورسوم احتفالية CSS Confetti.
- عرض رسالة تهنئة 'رائع! لقد أتممت التحدي بنجاح' مع عدد نقاط الخبرة المكتسبة (مثال: `+50 XP`).
- إضافة النقاط إلى رصيد المستخدم الإجمالي في `localStorage.setItem('arclio_total_xp', ...)`.
- إضافة زر 'التحدي التالي ➔' وزر 'العودة لكتالوج التحديات'.

## متطلبات واجهة المستخدم UI Requirements
نافذة منبثقة براقة ذات طابع احتفالي ناعم وجذاب.

## متطلبات التجاوب Responsive Requirements
تتمركز في منتصف الشاشة وتلائم كافة الأجهزة.

## متطلبات إمكانية الوصول Accessibility Requirements
تطبيق معايير المودال الدلالية وإمكانية الإغلاق بزر Escape.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/celebration-modal.js`
- `src/styles/components/modal.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
يمكن بناء تأثير تساقط القصاصات الملونة Confetti بتنسيقات CSS خفيفة دون الحاجة لمكتبات ثقيلة.

## معايير القبول Acceptance Criteria
- [ ] النافذة تفتح تلقائيًا فور اجتياز جميع اختبارات التحدي.
- [ ] نقاط الـ XP تُحفظ وتُجمع بنجاح في LocalStorage.
- [ ] زر التحدي التالي ينقل المستخدم للتحدي الجديد بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. اجتز التحدي بنجاح وتأكد من ظهور نافذة الاحتفال وازدياد رصيد الـ XP في الكونسول.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام الاحتفال وإضافة نقاط الخبرة بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-078-celebration-modal`
- **رسالة الحفظ المقترحة (Commit)**: `feat: implement challenge solved celebration modal with xp rewards and confetti`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم واجهات المكافآت التفاعلية وإدارة أرصدة المستخدمين في التخزين المحلي.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-079
- TASK-080
