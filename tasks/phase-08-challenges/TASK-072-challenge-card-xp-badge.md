# TASK-072 — بناء بطاقة التحدي البرمجي مع نقاط الخبرة XP (Challenge Card with XP Badge)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 08 — نظام التحديات ومحرر الأكواد (Interactive Challenges)

## مستوى الصعوبة Difficulty
مبتدئ — Beginner

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
تصميم بطاقة التحدي متضمنة عنوان التحدي، الوقت المحدد (مثال: 10 دقائق)، نقاط الخبرة +50 XP، وزر 'ابدأ التحدي'.

## لماذا توجد هذه المهمة؟ Why This Task Exists
البطاقات التحفيزية تشجع المطور على حل التحديات السريعة وتكافئه بنقاط خبرة XP فورية.

## المتطلبات السابقة Prerequisites
- TASK-071

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-073, TASK-074

## الهدف Objective
إنشاء `src/styles/components/challenge-card.css` وتنسيق بطاقات التحديات.

## المتطلبات Requirements
- بناء كلاس `.challenge-card` بحدود أرجوانية/زرقاء مميزة وتأثير رفع هوفر ناعم.
- تنسيق شارة نقاط الخبرة الذهبية `.badge-xp` (مثال: `⚡ +50 XP`).
- عرض الوقت التقديري ونوع التحدي وزر الانتقال الفوري لبيئة الـ Playground.
- استيراد الملف في `src/styles/main.css`.

## متطلبات واجهة المستخدم UI Requirements
بطاقة مدمجة وجذابة تعطي شعورًا بالألعاب التعليمية Gamification.

## متطلبات التجاوب Responsive Requirements
تتلاءم مع أعمدة شبكة التحديات على كافة الشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير نص دلالي يصف نقاط التحدي وزر البداية.

## الملفات ومناطق العمل Files / Areas
- `src/styles/components/challenge-card.css`
- `src/styles/main.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
شارة XP البراقة تزيد من حماس المتعلم لخوض التحديات اليومية.

## معايير القبول Acceptance Criteria
- [ ] بطاقة التحدي منسقة بملف مستقل ومستوردة في main.css.
- [ ] شارة نقاط الخبرة بارزة وجميلة.
- [ ] الأزرار والنصوص متناسقة وواضحة.

## الاختبار والتحقق اليدوي Manual Testing
1. اختبر مظهر بطاقة التحدي وتأكد من محاذاة شارة الـ XP وتأثير الـ hover.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد مكوّن بطاقة التحدي البرمجي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-072-challenge-card`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create challenge card component with xp points and time limit badges`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
تصميم واجهات التحفيز الرقمي Gamified Components وعناصر المكافآت.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-073
- TASK-074
