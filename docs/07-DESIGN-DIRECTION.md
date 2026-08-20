# 07 — التوجه البصري ونظام التصميم (Design Direction)

الهوية البصرية لمنصة ARCLIO مصممة خصيصًا لتناسب مجتمع المطورين: هوية حديثة، هندسية، تقنية، وخالية من أي تشتيت.

---

## 🎨 شخصية وطابع الهوية البصرية (Brand Aesthetic & Personality)

تتجنب ARCLIO الأشكال التقليدية المعتادة في المواقع التعليمية العادية (قبعات التخرج الكرتونية، الكتب المبعثرة، التدرجات اللونية الزائدة). بدلاً من ذلك، تعتمد على طابع أدوات المطورين الاحترافية (مثل Linear, GitHub, Stripe, Vercel):

- **عصري وتقني (Modern & Technical)**: زوايا هندسية أنيقة، حدود واضحة، تباين لوني ممتاز للنصوص، واستغلال ذكي للمساحات البيضاء **Whitespace**.
- **بسيط ومتقن (Minimal & Confident)**: لا توجد عناصر زخرفية غير ضرورية؛ كل عنصر في الواجهة له وظيفة واضحة ومباشرة.
- **موجّه للمطورين (Developer-Centric)**: خطوط Monospace للأكواد والرموز التقنية، شارات حالة واضحة **Badges**، ودرجات ألوان عالية التباين ومريحة للعين.

---

## 🌈 نظام الألوان ومتغيرات التصميم (Design Tokens)

نستخدم متغيرات CSS الرسمية **CSS Custom Properties** لتسهيل إدارة الألوان ودعم الثيم الداكن والفاتح:

### الثيم الداكن الأساسي (Dark Theme — Default Persona)
```css
:root {
  /* درجات الرمادي والأسطح (Neutral Slate Scale) */
  --bg-primary: #0a0d12;
  --bg-surface: #121820;
  --bg-surface-hover: #1b222d;
  --border-subtle: #242e3d;
  --border-strong: #38465c;

  /* نصوص الصفحة (Typography) */
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  /* ألوان الهوية والعلامة التجارية (Brand Accents) */
  --brand-primary: #3b82f6;       /* أزرق تقني Radiant Blue */
  --brand-primary-hover: #2563eb;
  --brand-accent: #06b6d4;        /* سماوي تركواز Cyan */

  /* ألوان التنبيهات وحالات النظام (Semantic Feedback) */
  --success: #10b981;             /* أخضر نجاح Emerald */
  --warning: #f59e0b;             /* برتقالي تحذير Amber */
  --danger: #ef4444;              /* أحمر خطأ Rose */
}
```

---

## 🔤 الخطوط وتنسيق النصوص (Typography)

- **خط الواجهة الأساسي (Primary UI Font)**: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif.
- **خط الأكواد والبيانات التقنية (Code Font)**: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace.

### مقياس أحجام النصوص (Modular Scale)
- `text-xs`: 0.75rem (12px) — الشارات وتفاصيل التواريخ
- `text-sm`: 0.875rem (14px) — النصوص المساعدة والروابط الثانوية
- `text-base`: 1rem (16px) — حجم النص الأساسي للفقرات
- `text-lg`: 1.125rem (18px) — العناوين الفرعية الصغيرة
- `text-xl`: 1.25rem (20px) — عناوين البطاقات
- `text-2xl`: 1.5rem (24px) — عناوين الأقسام الرئيسية
- `text-3xl`: 2rem (32px) — عناوين الصفحات
- `text-4xl`: 2.5rem (40px) — عنوان قسم البداية Hero

---

## 📐 نظام المسافات والتخطيط (Spacing & Layout Grid)

نعتمد على مقياس أساسي بقاعدة **8px Grid**:
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)

### نقاط توقف التجاوب (Responsive Breakpoints)
- **الموبايل (Mobile)**: أقل من `640px` (تخطيط عمودي مرن بعمود واحد)
- **التابلت (Tablet)**: من `640px` إلى `1024px` (شبكة من عمودين مع قائمة جانبية قابلة للطي)
- **الديسكتوب (Desktop)**: أكبر من `1024px` (شبكة متعددة الأعمدة مع حاوية مركزية بأقصى عرض `1200px`)
