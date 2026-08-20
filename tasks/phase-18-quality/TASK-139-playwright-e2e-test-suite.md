# TASK-139 — إعداد وتشغيل اختبارات التكامل الشاملة Playwright (Playwright E2E Test Suite)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 18 — هندسة الجودة والاختبارات الآلية (Quality Engineering & Testing)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
تهيئة Playwright لكتابة واختبار سيناريوهات المستخدم الكاملة (End-to-End E2E) في متصفحات Chromium و Firefox و WebKit الحقيقية.

## لماذا توجد هذه المهمة؟ Why This Task Exists
التأكد من أن جميع أجزاء المنصة (الفرونت إند، الباك إند، وقاعدة البيانات) تعمل معًا في سيناريو حقيقي قبل النشر للإنتاج.

## المتطلبات السابقة Prerequisites
- TASK-123

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-140, TASK-141

## الهدف Objective
إنشاء مجلد `e2e/` وكتابة اختبارات مسار تسجيل الدخول وفلترة المشاريع وتسليم الحل.

## المتطلبات Requirements
- تثبيت وإعداد Playwright: `npm init playwright@latest` وإنشاء `playwright.config.ts`.
- كتابة اختبار `e2e/auth.spec.ts`: فتح صفحة الدخول، ملء البيانات، تسجيل الدخول، والتأكد من فتح لوحة التحكم.
- كتابة اختبار `e2e/explore.spec.ts`: البحث عن مشروع، فلترة الصعوبة، والضغط على بطاقة المشروع وفتح صفحة التفاصيل.
- كتابة اختبار `e2e/submission.spec.ts`: تسليم رابط مشروع وتأكيد ظهور رسالة النجاح وتحديث الشارة.
- إضافة أمر التشغيل 'test:e2e': 'playwright test' في package.json.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (اختبارات E2E آلية تحاكي المتصفح في الخلفية Headless).

## متطلبات التجاوب Responsive Requirements
تشغيل الاختبارات على محاكاة أبعاد شاشات الموبايل (iPhone 14) والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
الاعتماد على محددات سهولة الوصول Locator by Role و Locator by Label في الاختبارات.

## الملفات ومناطق العمل Files / Areas
- `playwright.config.ts`
- `e2e/auth.spec.ts`
- `e2e/explore.spec.ts`
- `e2e/submission.spec.ts`
- `package.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
اختبارات الـ E2E هي الضمان الأقوى لراحة بال الفريق لأنها تختبر النظام تمامًا كما يراه ويستخدمه الطالب الحقيقي.

## معايير القبول Acceptance Criteria
- [ ] أمر `npm run test:e2e` ينفذ الاختبارات في المتصفحات الثلاثة ويجتازها بنجاح 100%.
- [ ] الاختبارات تفحص السيناريوهات الأساسية للنظام من البداية للنهاية.
- [ ] توليد تقرير HTML بصري للنتائج عبر Playwright Reporter.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `npx playwright test --ui` وشاهد خطوات محاكاة نقرات المستخدم وفحص النتائج بصريًا.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال جناح اختبارات الـ E2E الآلية بنجاح.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `test/task-139-playwright-e2e`
- **رسالة الحفظ المقترحة (Commit)**: `test: setup playwright end-to-end e2e test suite for core user journeys`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
احتراف هندسة اختبارات الـ End-to-End E2E Testing وأتمتة محاكاة المتصفحات بـ Playwright.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-140
- TASK-141
- TASK-142
