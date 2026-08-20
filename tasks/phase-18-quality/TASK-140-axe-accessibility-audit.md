# TASK-140 — فحص وتدقيق إمكانية الوصول الشاملة بـ Axe Core (WCAG 2.1 AA Axe Audit)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 18 — هندسة الجودة والاختبارات الآلية (Quality Engineering & Testing)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
دمج مكتبة `@axe-core/playwright` لإجراء فحص آلي شامل لإمكانية الوصول والتأكد من مطابقة المنصة لمعايير WCAG 2.1 Level AA.

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان عدم وجود أي عائق يمنع المكفوفين أو مستخدمي الكيبورد من استخدام أي صفحة أو ميزة في المنصة بنسبة 100%.

## المتطلبات السابقة Prerequisites
- TASK-139

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-141, TASK-142

## الهدف Objective
إنشاء `e2e/accessibility.spec.ts` وفحص جميع صفحات المنصة تلقائيًا ضد انتهاكات الـ a11y.

## المتطلبات Requirements
- تثبيت حزمة `@axe-core/playwright`.
- كتابة اختبار يفحص الصفحات الرئيسية (Home, Explore, PathDetail, ProjectDetail, Dashboard) عبر محرك Axe.
- التأكد من انعدام أي انتهاكات للتباين اللوني، العناوين، وسوم النماذج، وسمات الـ ARIA.
- إصلاح أي مخالفة تكتشفها أداة الفحص والتأكد من نجاح الاختبار بنسبة صفر انتهاكات (Zero Violations).

## متطلبات واجهة المستخدم UI Requirements
واجهات متطابقة مع معايير إمكانية الوصول العالمية.

## متطلبات التجاوب Responsive Requirements
فحص سهولة الوصول على قياسات الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحقيق معيار WCAG 2.1 AA بالكامل في كافة صفحات التطبيق.

## الملفات ومناطق العمل Files / Areas
- `e2e/accessibility.spec.ts`
- `src/styles/tokens.css`
- `src/styles/base.css`

## ملفات ممنوع تعديلها Do Not Touch
- server/

## ملاحظات التنفيذ Implementation Notes
أداة Axe Core هي المعيار المعتمد لدى كبرى الشركات العالمية (مثل Google و Microsoft) لفحص إمكانية الوصول آليًا.

## معايير القبول Acceptance Criteria
- [ ] اختبارات Axe Core تجتاز جميع صفحات المنصة بدون أي Violation.
- [ ] التباين اللوني ونظام العناوين ومحددات الـ ARIA مطابقة للمعايير القياسية.
- [ ] تم توثيق تقرير الفحص بنجاح.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `npx playwright test e2e/accessibility.spec.ts` وتأكد من اجتياز جميع الفحوصات بعلامات خضراء.

## تعريف الانتهاء للمهمة Definition of Done
اجتياز التدقيق الآلي الشامل لإمكانية الوصول بنسبة 100%.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `test/task-140-axe-accessibility-audit`
- **رسالة الحفظ المقترحة (Commit)**: `test: conduct automated wcag 2.1 aa accessibility audit with axe-core and playwright`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان أتمتة اختبارات إمكانية الوصول Automated Accessibility Testing واستخدام أدوات Axe Core.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-141
- TASK-142
- TASK-143
