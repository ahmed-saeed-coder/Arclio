# TASK-098 — تحويل مكتبة المكونات الأساسية إلى مكونات React (Migrate UI Components to React)

## حالة المهمة Status
BACKLOG

## المرحلة Phase
Phase 11 — الانتقال لأطر العمل الحديثة بـ React (Framework Transition)

## مستوى الصعوبة Difficulty
متوسط — Intermediate

## الحجم التقديري Estimated Size
M

## هدف التعلم Learning Goal
إعادة بناء مكونات Button, Badge, Card, Modal, EmptyState كمكونات React مكتوبة بـ TypeScript مع Interfaces واضحة للـ Props.

## لماذا توجد هذه المهمة؟ Why This Task Exists
بناء اللبنات الأساسية لواجهة المستخدم القابلة لإعادة الاستخدام مع ضمان سلامة البيانات البرمجية Type Safety.

## المتطلبات السابقة Prerequisites
- TASK-096
- TASK-097

## إمكانية العمل بالتوازي Parallel Tasks
يمكن العمل بالتوازي مع: TASK-099, TASK-100

## الهدف Objective
إنشاء مجلد `src/components/ui/` وبناء المكونات المعيارية الخمسة.

## المتطلبات Requirements
- بناء مكوّن `Button.tsx` مع دعم Props: `variant` ('primary' | 'secondary' | 'outline' | 'ghost' | 'danger') و `size` ('sm' | 'md' | 'lg') و `isLoading`.
- بناء مكوّن `Badge.tsx` مع دعم أنواع الحالات والصعوبة والـ XP.
- بناء مكوّن `Card.tsx` مع تقسيمات `CardHeader`, `CardBody`, `CardFooter`.
- بناء مكوّن `Modal.tsx` و `EmptyState.tsx` مع دعم الـ Children و TypeScript Interfaces.
- تصدير جميع المكونات من ملف برميلي موحد `src/components/ui/index.ts`.

## متطلبات واجهة المستخدم UI Requirements
مكونات مطابقة بنسبة 100% في المظهر والسلوك للمكونات السابقة.

## متطلبات التجاوب Responsive Requirements
تجاوب كامل على الموبايل والديسكتوب.

## متطلبات إمكانية الوصول Accessibility Requirements
تمرير سمات aria-label ودعم أحداث الكيبورد في جميع المكونات.

## الملفات ومناطق العمل Files / Areas
- `src/components/ui/Button.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Modal.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/components/ui/index.ts`

## ملفات ممنوع تعديلها Do Not Touch
- src/styles/tokens.css

## ملاحظات التنفيذ Implementation Notes
استخدم `React.ButtonHTMLAttributes<HTMLButtonElement>` لتمرير جميع الخصائص الأصلية (مثل onClick, disabled) تلقائيًا لمكون الزر.

## معايير القبول Acceptance Criteria
- [ ] جميع المكونات مبنية بـ TypeScript مع Props interfaces دقيقة.
- [ ] المكونات تدعم كافة المتغيرات والأحجام السابقة.
- [ ] لا توجد أخطاء في الـ Type Checking.

## الاختبار والتحقق اليدوي Manual Testing
1. رندر جميع المكونات في صفحة App.tsx واختبر نقر الأزرار وتمرير الـ Props المختلفة وتأكد من عملها.

## تعريف الانتهاء للمهمة Definition of Done
اكتمال مكتبة مكونات React الأساسية في مجلد components/ui/.

## تعليمات Git المقترحة Git Instructions
- **اسم الفرع المقترح (Branch)**: `feat/task-098-react-ui-components`
- **رسالة الحفظ المقترحة (Commit)**: `feat: convert core ui component library to typed react components`

## ماذا ستتعلم بعد إتمام المهمة؟ Expected Learning
إتقان كتابة مكونات React نظيفة باستخدام TypeScript وتطبيق نمط الـ Component Props Interfaces.

## المهام التالية المقترحة Next Recommended Tasks
- TASK-099
- TASK-100
- TASK-101
