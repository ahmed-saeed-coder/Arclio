# دليل CSS ومتغيرات التصميم (CSS Guide)

لغة CSS هي المسؤولة عن تنسيق، ألوان، وتخطيط صفحات الموقع. في ARCLIO، بنعتمد على قواعد كتابة منظمة وسهلة الصيانة.

---

## 🎨 استخدام متغيرات التصميم (CSS Custom Properties / Tokens)

ممنوع كتابة ألوان Hex أو مسافات عشوائية مباشرة داخل ملفات التنسيق. استخدم دائمًا المتغيرات المحددة في `tokens.css`:

```css
/* ❌ خطأ: استخدام قيم ثابتة مكررة */
.card {
  background-color: #121820;
  color: #f1f5f9;
  padding: 16px;
  border: 1px solid #242e3d;
}

/* ✅ صح: استخدام متغيرات التصميم المعتمدة */
.card {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  padding: var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}
```

---

## 📐 تخطيط الصفحات: Flexbox و Grid (Modern Layouts)

- **استخدم Flexbox**: لترتيب العناصر في اتجاه واحد (صف أو عمود)، مثل عناصر الهيدر، أو محاذاة أيقونة بجوار نص.
- **استخدم CSS Grid**: لترتيب العناصر في اتجاهين (صفوف وأعمدة معًا)، مثل شبكة بطاقات المشاريع **Project Grid**.

```css
/* مثال على شبكة متجاوبة تلقائيًا باستخدام CSS Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}
```

---

## 🚫 محاذير هامة في CSS (What to Avoid)

1. **تجنب `!important`**: لو التنسيق مش بيطبق، راجع قوة التحديد **Specificity** وبلاش تلجأ لـ `!important`.
2. **تجنب تحديد ارتفاعات ثابتة للعناصر (`height: 300px`)**: خلي المحتوى يحدد الارتفاع تلقائيًا مع استخدام `min-height` أو `padding` لمنع تداخل النصوص عند تغير حجم الشاشة أو زيادة المحتوى.
3. **التصميم للموبايل أولاً (Mobile-First Strategy)**: اكتب التنسيق الأساسي للموبايل، ثم استخدم الـ Media Queries لتعديل العرض للشاشات الأكبر.
