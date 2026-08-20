# دليل التصميم المتجاوب مع الشاشات (Responsive Design Guide)

التصميم المتجاوب **Responsive Design** يعني أن موقعك يعيد ترتيب وتنسيق عناصره تلقائيًا ليعمل بسلاسة وجمال على كل أحجام الشاشات (من أصغر شاشة موبايل وحتى شاشات الديسكتوب العريضة).

---

## 📱 استراتيجية الموبايل أولاً (Mobile-First Approach)

في ARCLIO، نكتب تنسيق CSS الأساسي لشاشات الموبايل أولاً، ثم نستخدم استعلامات الوسائط **Media Queries** باستخدام `min-width` لتوسيع التخطيط للشاشات الأكبر:

```css
/* 1. التنسيق الأساسي للموبايل (Mobile Default) */
.hero-container {
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
  gap: var(--space-4);
}

/* 2. تعديل التخطيط للشاشات المتوسطة والكبيرة (Tablet & Desktop) */
@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    align-items: center;
    padding: var(--space-8);
    gap: var(--space-8);
  }
}
```

---

## 📐 نقاط التوقف القياسية (Breakpoints)

- **الموبايل الصغير والمتوسط (Mobile)**: `320px` إلى `639px` (عمود واحد، مساحات ضيقة، أزرار واضحة وسهلة اللمس).
- **التابلت (Tablet)**: `640px` إلى `1023px` (شبكة من عمودين، عناصر قائمة قابلة للتمدد).
- **الديسكتوب (Desktop)**: `1024px` فما فوق (حاوية رئيسية بأقصى عرض `1200px` وتمركز في المنتصف `margin-inline: auto`).

---

## ⚠️ تجنب التمرير الأفقي (Preventing Horizontal Overflow)

واحدة من أكبر المشاكل في المواقع هي ظهور شريط تمرير أفقي **Horizontal Scrollbar** غير مرغوب فيه على الموبايل.
- **تأكد دائمًا من خاصية `box-sizing: border-box`** (موجودة في `reset.css`).
- **لا تستخدم أبدًا عرضًا ثابتًا بالبكسل** مثل `width: 600px`؛ استخدم بدلاً منها `max-width: 600px` مع `width: 100%`.
- **اجعل الصور مرنة دائمًا**:
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```
