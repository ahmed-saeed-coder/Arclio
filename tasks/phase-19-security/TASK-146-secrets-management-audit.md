# TASK-146 — تدقيق أمان المفاتيح السرية والمتغيرات البيئية (Secrets Management Audit)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 19 — تعزيز الأمان وحماية البيانات (Application Security Hardening)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
XS

## هدف التعلم Learning Goal
فحص مستودع Git والتأكد من انعدام أي مفاتيح سرية (JWT Secrets, DB Passwords, API Keys) مسربة وإعداد أداة Git Secret Scanning.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تسريب المفاتيح السرية في مستودعات Git العامة هو أحد أشهر أسباب الاختراق عالميًا؛ الفحص يضمن سرية المفاتيح تمامًا.

## المتطلبات السابقة Prerequisites
- TASK-143

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-147

## الهدف Objective
إنشاء `docs/security/SECRETS-GUIDE.md` وفحص ملفات المشروع والتأكد من تحديث `.gitignore`.

## المتطلبات Requirements
- التأكد من وجود ملفات `.env`, `.env.local`, `*.key`, `dist/`, `node_modules/` داخل `.gitignore`.
- فحص سجل التاريخ `git log` والتأكد من عدم وجود أي مفتاح سري حقيقي تم رفعه بالخطأ سابقًا.
- توثيق كيفية توليد مفاتيح JWT قوية مشفرة بـ 64 بايت في بيئة الإنتاج: `openssl rand -hex 64`.
- توثيق أفضل ممارسات إدارة المتغيرات البيئية في منصات السحابة (Vercel, AWS, Fly.io).

## متطلبات واجهة المستخدم UI Requirements
غير منطبق.

## متطلبات التجاوب Responsive Requirements
غير منطبق.

## متطلبات إمكانية الوصول Accessibility Requirements
غير منطبق.

## الملفات ومناطق العمل Files / Areas
- `docs/security/SECRETS-GUIDE.md`
- `.gitignore`
- `server/.gitignore`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
إذا تسرب أي مفتاح سري بالخطأ على GitHub، يجب تغييره (Rotate Key) فورًا وعدم الاكتفاء بحذفه من الكود لأن تاريخ Git يحتفظ به.

## معايير القبول Acceptance Criteria
- [ ] ملفات .gitignore مضبوطة وتحجب جميع الملفات الحساسة.
- [ ] لا توجد أي مفاتيح سرية حقيقية في الكود المصدري.
- [ ] دليل إدارة المفاتيح السرية موثق بوضوح في مجلد docs/security/.

## الاختبار والتحقق اليدوي Manual Testing
1. افحص ملف .gitignore وتأكد من حجب ملفات .env وملفات المفاتيح بأمان.

## تعريف الانتهاء للمهمة Definition of Done
اعتماد دليل إدارة المفاتيح السرية واجتياز الفحص الأمني للمستودع.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `docs/task-146-secrets-management-audit`
- **رسالة الحفظ المقترحة (Commit)**: `docs: verify secrets management hygiene and configure secure environment ignore rules`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
فهم إدارة المفاتيح السرية وحماية بيئات التطوير والإنتاج من التسريب الأمني.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-147
- TASK-148
