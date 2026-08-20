# TASK-148 — حزم التطبيق في حاويات Docker للإنتاج (Docker Multi-stage Containerization)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 20 — عمليات النشر والإنتاج السحابي (Production DevOps & Deployment)

## مستوى الصعوبة Difficulty
متوسط+ — Intermediate+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
كتابة ملفات `Dockerfile` متعددة المراحل Multi-stage للواجهة الأمامية والخادم وملف `docker-compose.yml` لتشغيل النظام وقاعدة البيانات بضغطة زر واحدة.

## لماذا توجد هذه المهمة؟ Why This Task Exists
توحيد بيئة التشغيل بين أجهزة المطورين وخوادم الإنتاج السحابية والتخلص نهائيًا من مشكلة 'الكود شغال على جهازي ومش شغال على السيرفر'.

## المتطلبات السابقة Prerequisites
- TASK-147

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-149

## الهدف Objective
إنشاء `Dockerfile` و `server/Dockerfile` و `docker-compose.yml` و `.dockerignore`.

## المتطلبات Requirements
- بناء `server/Dockerfile` متعدد المراحل (Build Stage -> Production Runner Stage) بحجم خفيف مبني على صور Alpine.
- بناء `Dockerfile` للواجهة الأمامية يعتمد على خادم Nginx لخدمة الملفات الثابتة بأعلى سرعة وتفعيل ضغط Gzip.
- إنشاء `docker-compose.yml` يربط 3 خدمات معًا: قاعدة بيانات PostgreSQL، خادم Express Backend، وخادم Frontend Nginx.
- إضافة ملفات `.dockerignore` لاستبعاد مجلدات `node_modules` والملفات غير الضرورية لتقليص حجم الصورة.

## متطلبات واجهة المستخدم UI Requirements
غير منطبق (حاويات تشغيل إنتاجية).

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `Dockerfile`
- `server/Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `server/.dockerignore`
- `nginx.conf`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
البناء متعدد المراحل Multi-stage Builds يقلص حجم صورة Docker من 1GB إلى أقل من 80MB عبر استبعاد أدوات البناء من الصورة النهائية.

## معايير القبول Acceptance Criteria
- [ ] أمر `docker-compose up --build` يشغل المنصة بالكامل وقاعدة البيانات بنجاح.
- [ ] حجم صور Docker خفيف ومحسن لبيئة الإنتاج.
- [ ] الاتصال بين حاوية الواجهة والخادم وقاعدة البيانات يعمل بسلاسة.

## الاختبار والتحقق اليدوي Manual Testing
1. شغل أمر `docker compose up -d` وافتح `http://localhost:80` وتأكد من فتح المنصة وعملها بالكامل داخل الحاويات.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال حزم وتوحيد بيئة تشغيل المنصة عبر حاويات Docker.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `devops/task-148-docker-containerization`
- **رسالة الحفظ المقترحة (Commit)**: `devops: implement multi-stage docker containerization and docker-compose orchestration`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
احتراف تقنية الحاويات Docker وفهم البناء متعدد المراحل Multi-stage Build و Docker Compose.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-149
- TASK-150
