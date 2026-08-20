# دليل JavaScript وكتابة كود نظيف (JavaScript Guide)

لغة JavaScript هي المسؤولة عن التفاعل، إدارة البيانات، ومعالجة الأحداث داخل المتصفح. في ARCLIO، بنركز على كتابة كود واضح، مقروء، وخالي من التعقيد.

---

## 🎯 المبادئ الأساسية لكتابة JavaScript

1. **استخدم `const` و `let` دائمًا (ممنوع `var`)**:
   - استخدم `const` كخيار افتراضي لأي متغير لا تتغير قيمته.
   - استخدم `let` فقط إذا كنت ستقوم بإعادة تعيين القيمة لاحقًا (مثل عداد في حلقة تكرار).
2. **الوضع الصارم (Strict Mode)**:
   - احرص على وضع `'use strict';` في بداية ملفات الـ Script لمنع الأخطاء الشائعة وتسريب المتغيرات العامة.
3. **تسمية المتغيرات والدوال بوضوح (Meaningful Naming)**:
   - استخدم نمط **camelCase**.
   - اجعل الاسم يشرح وظيفته: `filterProjectsByDifficulty()` أفضل بكثير من `filter()` أو `handle()`.

---

## 📦 التعامل مع الـ DOM والأحداث (DOM & Event Handling)

```javascript
'use strict';

// 1. اختيار العناصر بأمان
const filterSelect = document.querySelector('#difficulty-filter');
const projectContainer = document.querySelector('.projects-grid');

// 2. دالة صغيرة ونقية لتنفيذ منطق الفلترة
function filterProjects(projectsList, selectedDifficulty) {
  if (!selectedDifficulty || selectedDifficulty === 'all') {
    return projectsList;
  }
  return projectsList.filter(project => project.difficulty === selectedDifficulty);
}

// 3. إضافة مستمع للحدث (Event Listener)
if (filterSelect && projectContainer) {
  filterSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const filtered = filterProjects(allProjects, selectedValue);
    renderProjects(filtered, projectContainer);
  });
}
```

---

## 🛡️ معالجة الأخطاء والتخزين المحلي (Error Handling & LocalStorage)

دائمًا استخدم `try...catch` عند التعامل مع التخزين المحلي `localStorage` أو استدعاءات الـ API لأنها قد تفشل إذا كان التخزين ممتلئًا أو المتصفح في وضع الخصوصية:

```javascript
function savePreference(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('تعذر حفظ البيانات في التخزين المحلي:', error);
  }
}
```
