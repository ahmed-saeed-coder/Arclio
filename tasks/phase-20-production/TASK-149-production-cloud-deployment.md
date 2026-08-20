# TASK-149 — نشر المنصة على البيئة السحابية والـ CDN (Production Cloud Hosting & CDN)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 20 — عمليات النشر والإنتاج السحابي (Production DevOps & Deployment)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
نشر الواجهة الأمامية على شبكة توزيع المحتوى العالمية CDN (Vercel / Cloudflare) ونشر الخادم وقاعدة البيانات على خوادم سحابية (Fly.io / AWS / Render) مع شهادات SSL.

## لماذا توجد هذه المهمة؟ Why This Task Exists
إطلاق المنصة رسميًا على الإنترنت لتمكين الطلاب والمطورين والشركات حول العالم من استخدام الموقع الحقيقي دومين رسمي.

## المتطلبات السابقة Prerequisites
- TASK-148

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-150

## الهدف Objective
إنشاء `docs/devops/DEPLOYMENT-RUNBOOK.md` وإعداد خطة وإجراءات النشر السحابي المستمر.

## المتطلبات Requirements
- إعداد نشر الواجهة الأمامية على Vercel أو Cloudflare Pages مع ضبط التوجيه للصفحات أحادية المسار SPA Redirects.
- إعداد نشر الخادم على Fly.io أو Render أو AWS مع ضبط المتغيرات البيئية الإنتاجية الآمنة.
- ربط قاعدة بيانات PostgreSQL سحابية مدارة (Managed Database with Supabase / Neon / AWS RDS).
- تفعيل شهادات التشفير والأمان HTTPS / SSL وضبط رؤوس التخزين المؤقت Cache-Control على الـ CDN.
- توثيق دليل النشر واستعادة الكوارث Disaster Recovery في ملف التوثيق.

## متطلبات واجهة المستخدم UI Requirements
منصة حية تعمل على دومين عالمي رسمي بسرعة فائقة وأمان كامل.

## متطلبات التجاوب Responsive Requirements
استجابة سريعة للمستخدمين حول العالم عبر شبكة الـ CDN الموزعة.

## متطلبات إمكانية الوصول Accessibility Requirements
تطابق بيئة الإنتاج مع كافة معايير سهولة الوصول والأداء.

## الملفات ومناطق العمل Files / Areas
- `docs/devops/DEPLOYMENT-RUNBOOK.md`
- `vercel.json`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
توزيع الملفات الثابتة عبر الـ CDN يضمن أن المستخدم في مصر أو المغرب أو أمريكا يحمل الموقع من أقرب سيرفر جغرافي له في أجزاء من الثانية.

## معايير القبول Acceptance Criteria
- [ ] دليل النشر والتشغيل Runbook مفصل وشامل لجميع خطوات الإطلاق والصيانة.
- [ ] شهادات الـ SSL و HTTPS مفعلة وإلزامية لجميع الاتصالات.
- [ ] خادم الإنتاج وقاعدة البيانات السحابية جاهزان لاستقبال المستخدمين.

## الاختبار والتحقق اليدوي Manual Testing
1. افتح الرابط المنشور الحي وتأكد من عمل كافة ميزات الاستكشاف والتسجيل والتسليم بسلاسة وبسرعة فائقة.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد دليل النشر السحابي وجاهزية المنصة للتشغيل الإنتاجي الحي.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `devops/task-149-production-deployment`
- **رسالة الحفظ المقترحة (Commit)**: `devops: document production cloud deployment runbook ssl and global cdn caching`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان هندسة النشر السحابي Cloud Architecture وإدارة شبكات الـ CDN وشهادات التشفير SSL.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-150
