# TASK-128 — عرض الملف الشخصي العام من بيانات الخادم الحية (Dynamic Public Portfolio from DB)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 15 — التكامل الشامل والربط الفوري (Full-Stack Integration)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
ربط صفحة الملف الشخصي العام `/profile/:username` بمسار `GET /api/v1/users/:username/portfolio` لعرض المشاريع المعتمدة الحقيقية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير رابط سيرة ذاتية حي يمكن لأي شخص في العالم ومسؤولي التوظيف فتحه ورؤية أعمال الطالب المعتمدة من الخادم.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-129

## الهدف Objective
تحديث `UserProfilePage.tsx` لاستخراج اسم المستخدم من المسار وجلب بيانات ملفه الشخصي الحية.

## المتطلبات Requirements
- بناء مسار عام `GET /api/v1/users/:username/portfolio` لا يتطلب تسجيل دخول لعرض السيرة الذاتية العامة.
- جلب وعرض اسم المطور وصورته وشارات مهاراته والمشاريع المعتمدة وخريطة نشاطه السنوية.
- عرض زر 'مشاركة الرابط' الذي ينسخ الرابط المباشر للملف الشخصي مع إشعار Toast.
- عرض صفحة 'مستخدم غير موجود' في حال كان المعرف غير صالح.

## متطلبات واجهة المستخدم UI Requirements
ملف شخصي عام عالي الفخامة والاحترافية يعرض المشاريع المعتمدة ورابط GitHub.

## متطلبات التجاوب Responsive Requirements
تجاوب كامل وأنيق على كافة الهواتف والشاشات.

## متطلبات إمكانية الوصول Accessibility Requirements
تضمين وسوم الميتا الدلالية ومشاركات وسائل التواصل Open Graph Meta Tags.

## الملفات ومناطق العمل Files / Areas
- `src/pages/UserProfilePage.tsx`
- `server/src/controllers/userController.ts`
- `server/src/routes/users.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
الملفات الشخصية العامة في ARCLIO هي شهادة كفاءة برمجية حقيقية Proof of Work تفتح للمطور أبواب التوظيف العالمي.

## معايير القبول Acceptance Criteria
- [ ] الملف الشخصي العام يعرض البيانات الحية والمشاريع المعتمدة بدقة.
- [ ] الرابط العام يعمل بدون الحاجة لتسجيل الدخول.
- [ ] زر مشاركة الرابط ينسخ الرابط المباشر بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح مسار `/profile/johndoe` في نافذة تصفح متخفي وتأكد من عرض السيرة الذاتية والمشاريع المعتمدة بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال معرض أعمال المطور العام المربوط بقاعدة البيانات الحية.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-128-dynamic-public-portfolio`
- **رسالة الحفظ المقترحة (Commit)**: `feat: render dynamic public developer portfolio from live database records`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء الصفحات العامة المفتوحة Public Endpoints وتوليد السير الذاتية الهندسية الديناميكية.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-129
- TASK-130
