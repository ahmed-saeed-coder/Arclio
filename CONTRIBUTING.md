# دليل المساهمة في ARCLIO (Contributing Guide)

شكرًا لاهتمامك بالمساهمة في بناء منصة ARCLIO! المستند ده بيوضح لكل مطور في الفريق خطوات وطريقة المساهمة في الكود خطوة بخطوة.

---

## 🎯 فلسفة المساهمة (Contribution Philosophy)

مشروع ARCLIO مبني **بواسطة مطورين بيتعلموا، لمطورين بيتعلموا**. كل مساهمة بتعملها—سواء كانت كتابة مكون جديد **Component**، إصلاح مشكلة في الـ Responsive، أو تنظيم كود JavaScript—هي فرصة عملية لتطبيق المعايير البرمجية الاحترافية.

---

## 🚀 خطوات دورة العمل (Step-by-Step Workflow)

### 1. استلام المهمة (Task Assignment)
- قبل ما تبدأ، تأكد إن قائد الفريق حدد لك مهمة معينة من [جدول المهام](../tasks/README.md).
- افتح ملف المهمة واقرأ المتطلبات ومعايير القبول **Acceptance Criteria** بعناية.

### 2. تجهيز الفرع في Git (Prepare Your Branch)
1. اسحب آخر تحديثات من الفرع الرئيسي:
   ```bash
   git checkout main
   git pull origin main
   ```
2. أنشئ فرع جديد خاص بالمهمة بالصيغة المعتمدة:
   ```bash
   # Syntax: <type>/task-<number>-<short-description>
   git checkout -b feat/task-014-base-buttons
   ```

### 3. كتابة الكود (Writing Code)
- ركز فقط على المتطلبات الموجودة في ملف المهمة.
- التزم بالأدلة الإرشادية في مجلد `guides/`:
  - [دليل HTML (HTML Guide)](guides/HTML-GUIDE.md)
  - [دليل CSS (CSS Guide)](guides/CSS-GUIDE.md)
  - [دليل JavaScript (JavaScript Guide)](guides/JAVASCRIPT-GUIDE.md)
  - [دليل إمكانية الوصول (Accessibility)](guides/ACCESSIBILITY.md)
- احترم قسم **Do Not Touch** الموضح في ملف المهمة ولا تعدل ملفات غير مخصصة لك.

### 4. حفظ التغييرات (Committing Changes)
- اكتب رسائل حفظ واضحة باتباع نظام **Conventional Commits**:
  ```bash
  git commit -m "feat: add primary and secondary button components"
  ```

### 5. فتح طلب الدمج (Opening a Pull Request - PR)
1. ارفع الفرع الخاص بك على GitHub:
   ```bash
   git push -u origin feat/task-014-base-buttons
   ```
2. افتح **Pull Request** جديد باتجاه فرع `main`.
3. املأ جميع أقسام نموذج الـ PR الموجود في `.github/pull_request_template.md`.
4. اذكر رقم المهمة (مثال: `Closes TASK-014`).

### 6. المراجعة والدمج (Review & Merge)
- الكود بتاعك هيتم مراجعته من زميل في الفريق ومن قائد الفريق.
- ناقش الملاحظات واعمل التعديلات المطلوبة.
- بعد الموافقة النهائية، قائد الفريق هيعمل **Squash and Merge** للفرع داخل `main`.
