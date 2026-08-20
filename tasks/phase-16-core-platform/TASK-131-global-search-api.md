# TASK-131 — بناء واجهة البحث الشامل في المنصة Global Search API (Global Search API)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 16 — المنصة المتكاملة والمجتمع والفرق (Core Platform & Community)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
بناء مسار `GET /api/v1/search?q=...` للبحث المتزامن في المشاريع والمسارات والدروس والتحديات في استعلام واحد متكامل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المستخدم من العثور على أي درس أو مشروع أو تحدي في المنصة بضغطة زر واحدة من نافذة البحث السريع.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-132, TASK-133

## الهدف Objective
إنشاء `server/src/routes/search.ts` وبناء استعلام البحث المجمع عبر جداول Prisma المتعددة.

## المتطلبات Requirements
- كتابة استعلام Prisma يبحث في جداول: `Project`, `LearningPath`, `Lesson`, `Challenge` باستخدام شروط `contains` ومطابقة النصوص.
- تجميع النتائج في كائن منظم: `{ projects: [...], paths: [...], lessons: [...], challenges: [...] }`.
- بناء نافذة البحث السريع (Command Menu `Ctrl + K`) في الواجهة الأمامية للبحث السريع والتنقل الفوري.
- تطبيق تقنية الـ Debounce في إرسال طلبات البحث.

## متطلبات واجهة المستخدم UI Requirements
نافذة بحث سريعة (Spotlight / Command Palette) تفتح باختصار لوحة المفاتيح `Ctrl + K` أو `Cmd + K`.

## متطلبات التجاوب Responsive Requirements
نافذة البحث تملأ الشاشة وتوفر كتابة سريعة على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
دعم التنقل الكامل بين نتائج البحث بمفاتيح الأسهم في الكيبورد والضغط على Enter للانتقال.

## الملفات ومناطق العمل Files / Areas
- `server/src/routes/search.ts`
- `server/src/controllers/searchController.ts`
- `src/components/CommandMenu.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
نافذة الـ Command Palette هي المعيار الذهبي لأدوات المطورين الحديثة (مثل VS Code و Linear و Raycast).

## معايير القبول Acceptance Criteria
- [ ] البحث الشامل يبحث عبر كافة كيانات المنصة ويعيد نتائج دقيقة وسريعة.
- [ ] اختصار Ctrl+K يفتح نافذة البحث السريع من أي صفحة في الموقع.
- [ ] الضغط على أي نتيجة ينقل المستخدم مباشرة لصفحتها.

## الاختبار والتحقق اليدوي Manual Testing
1. اضغط Ctrl+K واكتب 'grid'؛ تأكد من ظهور دروس ومشاريع وتحديات CSS Grid واضغط Enter للانتقال.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال واجهة ومسار البحث الشامل ونافذة الـ Command Menu.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-131-global-search`
- **رسالة الحفظ المقترحة (Commit)**: `feat: create global multi-entity search api endpoint and cmdk spotlight search palette`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
بناء محركات البحث الشاملة Multi-Entity Search وتصميم نوافذ الـ Command Palette المتقدمة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-132
- TASK-133
- TASK-134
