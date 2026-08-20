# TASK-101 — إعداد نظام التوجيه والتنقل بـ React Router (Setup React Router Navigation)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تثبيت وتهيئة React Router v6/v7 لربط جميع صفحات المنصة (Home, Explore, Paths, PathDetail, ProjectDetail, Dashboard, Profile).

## لماذا توجد هذه المهمة؟ Why This Task Exists
توفير نظام توجيه معتمد عالميًا يدعم المسارات الديناميكية (مثل: `/projects/:slug`) والتنقل السلس وحماية الصفحات.

## المتطلبات السابقة Prerequisites
- TASK-099

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-102

## الهدف Objective
إنشاء `src/routes.tsx` وتهيئة شجرة التوجيه ومكون التخطيط العام `Layout.tsx`.

## المتطلبات Requirements
- تثبيت حزمة `react-router-dom` وتهيئة `createBrowserRouter` أو `<BrowserRouter>`.
- بناء مكوّن التخطيط العام `Layout.tsx` متضمنًا الهيدر الدلالي ومكان رندرة الصفحات `<Outlet />` والفوتر.
- تعريف المسارات الثابتة والديناميكية: `/`, `/explore`, `/projects/:id`, `/paths`, `/paths/:id`, `/dashboard`, `/profile/:username`.
- بناء صفحة الخطأ 404 `NotFoundPage.tsx` لعرض رسالة ودودة عند كتابة مسار غير موجود.

## متطلبات واجهة المستخدم UI Requirements
تنقل فوري وسلس بين كافة صفحات المنصة مع الحفاظ على ثبات الهيدر والفوتر.

## متطلبات التجاوب Responsive Requirements
دعم كامل لمتصفحات الموبايل والتنقل عبر زري التاريخ في المتصفح.

## متطلبات إمكانية الوصول Accessibility Requirements
تمرير التركيز لأعلى الصفحة عند الانتقال واستخدام عناصر `<NavLink>` التي تدعم `aria-current='page'`.

## الملفات ومناطق العمل Files / Areas
- `src/routes.tsx`
- `src/components/Layout.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/NotFoundPage.tsx`
- `src/App.tsx`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `<Outlet />` داخل مكوّن التخطيط المشترك لضمان عدم إعادة رندرة الهيدر والفوتر عند التنقل بين الصفحات.

## معايير القبول Acceptance Criteria
- [ ] التنقل بين جميع صفحات المنصة يعمل بكفاءة عبر React Router.
- [ ] المسارات الديناميكية تقرأ المعرفات useParams بنجاح.
- [ ] صفحة 404 تظهر عند إدخال مسار عشوائي خاطئ.

## الاختبار والتحقق اليدوي Manual Testing
1. انتقل بين صفحات الموقع المختلفة واختبر فتح مسار ديناميكي مثل `/projects/1` وتأكد من قراءة المعرف.
2. اكتب مسارًا خاطئًا `/random-page` وتأكد من ظهور صفحة 404.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال نظام التوجيه والتنقل لجميع صفحات المنصة بـ React Router.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-101-react-router-setup`
- **رسالة الحفظ المقترحة (Commit)**: `feat: setup react router navigation with dynamic routes and layout outlet`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان استخدام مكتبة React Router وبناء التطبيقات متعددة المسارات والمخططات المشتركة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-102
- TASK-103
