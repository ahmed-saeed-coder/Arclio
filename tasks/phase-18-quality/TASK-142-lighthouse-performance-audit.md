# TASK-142 — فحص الأداء ومؤشرات Core Web Vitals عبر Lighthouse (Lighthouse Performance Audit)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 18 — هندسة الجودة والاختبارات الآلية (Quality Engineering & Testing)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
S

## هدف التعلم Learning Goal
إجراء فحص أداء شامل عبر Google Lighthouse وتحقيق درجات 95+ في الأداء وإمكانية الوصول وأفضل الممارسات والسيو (All Green 95+).

## لماذا توجد هذه المهمة؟ Why This Task Exists
ضمان سرعة تحميل فائقة وخفة في استهلاك الموارد وتصدر الموقع لمحركات البحث وتوفير أفضل تجربة تصفح.

## المتطلبات السابقة Prerequisites
- TASK-139

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-143

## الهدف Objective
إنشاء `docs/qa/LIGHTHOUSE-REPORT.md` وتطبيق تحسينات حزم الأكواد وتقليل حجم الملفات المنقولة.

## المتطلبات Requirements
- تشغيل فحص Lighthouse على صفحات: الرئيسية، الاستكشاف، تفاصيل المشروع، ولوحة التحكم.
- تحسين مؤشر LCP (Largest Contentful Paint) ليكون أقل من 1.5 ثانية.
- تحسين مؤشر CLS (Cumulative Layout Shift) ليكون 0 تمامًا عبر تثبيت أبعاد الصور والمساحات.
- ضغط حزم الـ JavaScript وتفعيل تقسيم الكود Code Splitting في Vite.
- توثيق الدرجات المحققة ولقطات الشاشة في التقرير.

## متطلبات واجهة المستخدم UI Requirements
سرعة استجابة خاطفة للموقع عند الفتح والتنقل.

## متطلبات التجاوب Responsive Requirements
تحقيق درجات أداء ممتازة في فحص الموبايل وفحص الديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تحقيق 100/100 في معيار إمكانية الوصول في Lighthouse.

## الملفات ومناطق العمل Files / Areas
- `docs/qa/LIGHTHOUSE-REPORT.md`
- `vite.config.ts`

## ملفات ممنوع تعديلها Do Not Touch
- server/

## ملاحظات التنفيذ Implementation Notes
تحقيق درجات 95+ في فئات Lighthouse الأربعة (Performance, Accessibility, Best Practices, SEO) هو وسام تميز هندسي عالمي.

## معايير القبول Acceptance Criteria
- [ ] درجات فحص Lighthouse تتجاوز 95+ في كافة الفئات.
- [ ] مؤشرات Core Web Vitals في النطاق الأخضر (Good).
- [ ] تقرير الأداء موثق في مجلد docs/qa/.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل فحص Lighthouse في DevTools على صفحة explore وتأكد من ظهور الدوائر الخضراء لكافة المؤشرات.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد تقرير فحص الأداء ومؤشرات الـ Web Vitals في وثائق الجودة.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `test/task-142-lighthouse-audit`
- **رسالة الحفظ المقترحة (Commit)**: `test: conduct lighthouse performance audit and optimize bundle sizes for green vitals`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة تحسين الأداء Web Performance Optimization واستخدام أدوات Lighthouse و Web Vitals.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-143
- TASK-144
