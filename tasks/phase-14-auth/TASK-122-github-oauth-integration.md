# TASK-122 — دمج تسجيل الدخول بحساب GitHub عبر OAuth (GitHub OAuth Integration)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 14 — توثيق المستخدمين والأمان والصلاحيات (Auth & RBAC)

## مستوى الصعوبة Difficulty
متقدم — Advanced

## الحجم التقديري Estimated Size
L

## هدف التعلم Learning Goal
دمج بروتوكول GitHub OAuth 2.0 لتمكين المطورين من تسجيل الدخول بحسابات GitHub بضغطة زر واحدة ومزامنة ملفهم الشخصي.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تسهيل تسجيل الدخول لمجتمع المطورين وربط حساباتهم تلقائيًا بروابط GitHub الرسمية ومشاريعهم.

## المتطلبات السابقة Prerequisites
- TASK-119

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-123

## الهدف Objective
إنشاء `server/src/services/oauthService.ts` وإدارة دورة الـ OAuth وتبادل رمز التحقق Authorization Code.

## المتطلبات Requirements
- تسجيل تطبيق OAuth في إعدادات GitHub والحصول على `GITHUB_CLIENT_ID` و `GITHUB_CLIENT_SECRET`.
- بناء مسار إعادة التوجيه `GET /api/v1/auth/github` ومسار الاستقبال `GET /api/v1/auth/github/callback`.
- تبادل الـ Code برمز الوصول Access Token واستدعاء GitHub User API لجلب اسم المستخدم والإيميل والصورة.
- إنشاء مستخدم جديد أو تسجيل الدخول للمستخدم الحالي وتوليد جلسة HttpOnly Cookie موحدة للمنصة.

## متطلبات واجهة المستخدم UI Requirements
زر تسجيل الدخول بـ GitHub باللون الأسود وأيقونة GitHub الرسمية.

## متطلبات التجاوب Responsive Requirements
يعمل بسلاسة على المتصفحات وتطبيقات الهواتف.

## متطلبات إمكانية الوصول Accessibility Requirements
تسمية دلالية واضحة لزر تسجيل الدخول بحساب GitHub.

## الملفات ومناطق العمل Files / Areas
- `server/src/services/oauthService.ts`
- `server/src/routes/auth.ts`
- `server/src/controllers/authController.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/

## ملاحظات التنفيذ Implementation Notes
بروتوكول OAuth 2.0 هو المعيار العالمي لتسجيل الدخول الموحد (Single Sign-On SSO) عبر منصات الطرف الثالث.

## معايير القبول Acceptance Criteria
- [ ] تسجيل الدخول بـ GitHub ينقل المستخدم لصفحة التفويض ويعيده للمنصة بنجاح.
- [ ] بيانات المستخدم (الاسم، الصورة، رابط GitHub) تُحفظ وتُحدث في قاعدة البيانات تلقائيًا.
- [ ] يتم توليد جلسة كوكي آمنة مطابقة لنظام المصادقة العام.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر على زر 'تسجيل الدخول بـ GitHub' واقبل الصلاحيات وتأكد من تسجيل الدخول وفتح لوحة التحكم بنجاح.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال تكامل تسجيل الدخول بحسابات GitHub عبر OAuth 2.0.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-122-github-oauth`
- **رسالة الحفظ المقترحة (Commit)**: `feat: integrate github oauth 2.0 authentication and user profile synchronization`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان بروتوكول OAuth 2.0 وتبادل رموز المصادقة والتعامل مع واجهات برمجة الطرف الثالث Third-party APIs.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-123
- TASK-124
