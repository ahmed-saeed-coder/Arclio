# TASK-052 — إضافة وحفظ المشاريع المفضلة في LocalStorage (Bookmark Favorite Projects)

## حالة المهمة Status
READY

## المرحلة Phase
Phase 05 — صفحة استكشاف المشاريع والبيانات (Explore & Projects Page)

## مستوى الصعوبة Difficulty
مبتدئ+ — Beginner+

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
تفعيل زر القلب لحفظ المشاريع المفضلة في مصفوفة بالـ LocalStorage واسترجاعها وتلوين الزر عند إعادة التحميل.

## لماذا توجد هذه المهمة؟ Why This Task Exists
تمكين المتعلم من حفظ المشاريع التي يخطط للعمل عليها لاحقًا كإشارات مرجعية شخصية Bookmarks.

## المتطلبات السابقة Prerequisites
- TASK-042
- TASK-047

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-050, TASK-051

## الهدف Objective
كتابة منطق إدارة المفضلة وتلوين أيقونة القلب وعرض إشعار Toast عند الإضافة أو الحذف.

## المتطلبات Requirements
- قراءة معرفات المشاريع المفضلة المحفوظة من `localStorage.getItem('arclio_favorites')`.
- الاستماع للنقر على زر المفضلة `.bookmark-btn` داخل بطاقة المشروع.
- إضافة معرف المشروع أو حذفه من مصفوفة المفضلة وحفظها مجددًا في LocalStorage.
- تحديث حالة أيقونة الزر بصريًا (تعبئة القلب باللون الأحمر) وعرض إشعار Toast تأكيدي.

## متطلبات واجهة المستخدم UI Requirements
أيقونة قلب تتغير من خط مفرغ إلى قلب ممتلئ بلون أحمر مع تأثير نبضة خفيفة.

## متطلبات التجاوب Responsive Requirements
مساحة نقر مريحة لزر المفضلة على الموبايل.

## متطلبات إمكانية الوصول Accessibility Requirements
تحديث السمة `aria-pressed='true'` و `aria-label='إزالة من المفضلة'`.

## الملفات ومناطق العمل Files / Areas
- `src/scripts/explore.js`
- `src/styles/components/project-card.css`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `JSON.stringify()` عند الحفظ في LocalStorage و `JSON.parse()` عند القراءة لتحويل المصفوفة لنص وبالعكس.

## معايير القبول Acceptance Criteria
- [ ] الضغط على القلب يحفظ المشروع في المفضلة فورًا.
- [ ] إعادة تحميل الصفحة تحافظ على حالة القلوب الممتلئة للمشاريع المحفوظة.
- [ ] ظهور إشعار Toast تأكيدي عند الإضافة أو الحذف.

## الاختبار والتحقق اليدوي Manual Testing
1. انقر على قلب أحد المشاريع وتأكد من امتلائه وظهور التنبيه.
2. أعد تحميل الصفحة وتأكد من بقاء المشروع في حالة المفضلة.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال ميزة الإشارات المرجعية والمفضلة وحفظها محليًا.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-052-bookmark-projects`
- **رسالة الحفظ المقترحة (Commit)**: `feat: enable bookmarking favorite projects with localstorage sync and toasts`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
التعامل مع المصفوفات في التخزين المحلي وتحديث حالات الـ UI التفاعلية المتزامنة.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-053
- TASK-054
