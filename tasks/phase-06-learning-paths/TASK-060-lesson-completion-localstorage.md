# TASK-060 — حفظ حالة إتمام الدروس في التخزين المحلي (Lesson Completion Checkbox State)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 06 — نظام المسارات والمناهج التعليمية (Learning Paths System)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إضافة مربع اختيار Checkbox بجوار كل درس وحفظ حالة الإتمام (مكتمل / غير مكتمل) في LocalStorage.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين الطالب من متابعة الدروس التي أنهاها والعودة لاستكمال المنهج في أي وقت دون فقدان تقدمه.

## المتطلبات السابقة Prerequisites
- TASK-059

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-061, TASK-062

## الهدف Objective
كتابة منطق حفظ واسترجاع حالة إتمام الدروس وإظهار خط شطب نصي على الدرس المكتمل.

## المتطلبات Requirements
- إضافة `<input type='checkbox' class='lesson-checkbox' data-lesson-id='...'>` بجوار كل درس.
- الاستماع لحدث `change` وحفظ مصفوفة المعرفات المكتملة في `localStorage.setItem('arclio_completed_lessons', ...)`.
- قراءة الحالات المحفوظة عند تحميل الصفحة وتحديد مربعات الاختيار المناسبة `checkbox.checked = true`.
- إضافة كلاس `.is-completed` لتطبيق خط شطب وتخفيف لون نص الدرس المكتمل وعرض Toast تأكيدي.

## متطلبات واجهة المستخدم UI Requirements
مربع اختيار مخصص أنيق مع تأثير شطب ناعم على عنوان الدرس عند إكماله.

## متطلبات التجاوب Responsive Requirements
مساحة لمس مريحة لمربع الاختيار على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
توفير تسمية دلالية لكل مربع اختيار تشمل اسم الدرس المقابل له.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/path-detail.js`
- `src/styles/components/path-card.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/data/paths.js

## ملاحظات التنفيذ Implementation Notes
استخدم مصفوفة تحتوي على معرفات الدروس المكتملة مثل `['html-intro', 'html-semantic']` لتسهيل البحث والإضافة والحذف.

## معايير القبول Acceptance Criteria
- [ ] تحديد مربع الدرس يحفظ حالته في LocalStorage فورًا.
- [ ] إعادة تحميل الصفحة تحافظ على الدروس المكتملة محددة ومميزة بصريًا.
- [ ] إلغاء التحديد يحذف الدرس من قائمة الإتمام بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. علّم على درسين كمكتملين وأعد تحميل الصفحة وتأكد من بقاء حالتهما كمكتملين.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تتبع وحفظ إتمام الدروس محليًا بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-060-lesson-completion`
- **رسالة الحفظ المقترحة (Commit)**: `feat: track lesson completion with interactive checkboxes and localstorage`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إدارة وتخزين حالات العناصر الفردية والتزامن اللحظي مع واجهة المستخدم.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-061
- TASK-062
