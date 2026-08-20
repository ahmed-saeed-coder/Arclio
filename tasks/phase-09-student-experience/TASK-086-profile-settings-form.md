# TASK-086 — بناء صفحة إعدادات الملف الشخصي وتخصيص الحساب (User Profile Settings Form)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 09 — لوحة تحكم الطالب ومعرض الأعمال (Student Dashboard & Profile)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إنشاء صفحة settings.html بنماذج تعديل الاسم، النبذة الشخصية، روابط التواصل الاجتماعي، وتفضيلات الإشعارات.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المستخدم من تحديث بياناته الشخصية وروابطه المهنية وتخصيص إعدادات حسابه في المنصة.

## المتطلبات السابقة Prerequisites
- TASK-043
- TASK-084

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-087

## الهدف Objective
إنشاء ملف `src/settings.html` وبناء نماذج تعديل البيانات وحفظها في LocalStorage.

## المتطلبات Requirements
- إنشاء صفحة `src/settings.html` متضمنة أقسام الإعدادات (الملف الشخصي، الحساب، الإشعارات، الأمان).
- بناء نموذج تعديل البيانات: الاسم الكامل، المسمى الوظيفي، النبذة المختصرة Bio، وحسابات GitHub و Twitter و LinkedIn.
- استخدام أدوات التحقق `validation.js` للتأكد من صحة الروابط المدخلة.
- حفظ البيانات في `localStorage.setItem('arclio_user_profile', ...)` وعرض إشعار Toast عند الحفظ.

## متطلبات واجهة المستخدم UI Requirements
واجهة إعدادات منظمة ومقسمة لبطاقات واضحة ذات حقول إدخال أنيقة وأزرار حفظ بارزة.

## متطلبات التجاوب Responsive Requirements
تتلاءم النماذج مع شاشات الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
ربط دلالي كامل بين وسوم label وحقول الإدخال ورسائل الخطأ.

## الملفات ومناطق العمل Files / Areas
- `src/settings.html`
- `src/styles/components/form.css`
- `src/styles/layout.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/dashboard.html

## ملاحظات التنفيذ Implementation Notes
تنظيم الإعدادات في بطاقات مستقلة (Profile Info Card, Social Links Card) يجعل تجربة التعديل مريحة وسهلة.

## معايير القبول Acceptance Criteria
- [ ] صفحة settings.html منشأة وتعمل بنجاح.
- [ ] تعديل البيانات وحفظها يحدث بنجاح في LocalStorage.
- [ ] ظهور إشعار Toast تأكيدي عند الحفظ واسترجاع البيانات المحفوظة عند إعادة التحميل.

## الاختبار والتحقق اليدوي Manual Testing
1. عدل اسمك ورابط GitHub واضغط حفظ؛ أعد تحميل الصفحة وتأكد من بقاء البيانات الجديدة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال صفحة إعدادات الملف الشخصي ونماذج تخصيص الحساب.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-086-profile-settings`
- **رسالة الحفظ المقترحة (Commit)**: `feat: build user profile settings form with local storage persistence and toasts`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء وتنسيق صفحات الإعدادات المعقدة وإدارة نماذج التعديل المتعددة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-087
