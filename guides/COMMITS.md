# معايير كتابة رسائل الحفظ (Conventional Commits)

كتابة رسائل حفظ واضحة ومنظمة بتخلي سجل التغييرات **Git Log** مفهوم ومقروء لأي شخص بيراجع الكود، وبتسهل معرفة سبب كل تعديل.

---

## 📝 هيكل رسالة الحفظ (Commit Structure)

بنتبع نظام **Conventional Commits** القياسي:

```text
<type>: <وصف مختصر بالإنجليزية في صيغة الأمر وبحروف صغيرة>

[جسم اختياري لشرح سبب التعديل لو كان معقدًا]
```

---

## 🏷️ أنواع رسائل الحفظ (Commit Types)

- `feat:` إضافة ميزة جديدة أو مكوّن واجهة UI.
  - *مثال*: `feat: add search filter input to explore page`
- `fix:` إصلاح خطأ برمجي أو مشكلة في التصميم.
  - *مثال*: `fix: resolve horizontal overflow in hero section on mobile`
- `docs:` تعديلات خاصة بملفات التوثيق والأدلة فقط.
  - *مثال*: `docs: clarify prerequisites in TASK-044`
- `style:` تعديلات شكلية لا تؤثر على عمل الكود (تنسيق المسافات، الفواصل المنقوطة).
  - *مثال*: `style: format css custom property indentations`
- `refactor:` إعادة كتابة أو تنظيم كود بدون إضافة ميزة جديدة أو إصلاح باج.
  - *مثال*: `refactor: extract card markup into reusable template function`
- `test:` إضافة أو تعديل اختبارات برمجية.
  - *مثال*: `test: add unit test for difficulty filter utility`

---

## ✅ أفضل الممارسات (Best Practices)

1. **استخدم صيغة الأمر (Imperative Mood)**: اكتب `add feature` وليس `added feature` أو `adding feature`.
2. **اجعل السطر الأول أقل من 72 حرفًا**.
3. **احفظ التغييرات في وحدات صغيرة ومنطقية (Commit Small and Often)**: بلاش تجمع شغل 3 أيام في commit واحد؛ احفظ كل خطوة منطقية تخلصها.
