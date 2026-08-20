/**
 * ARCLIO Platform Core Client Script
 * إدارة تفاعلات الواجهة: تبديل الثيم، القائمة الجانبية، والتهيئة
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 ARCLIO Platform initialized — Learn. Build. Become.');

  // 1. إدارة تبديل الثيم الداكن والفاتح (Dark / Light Mode Toggle)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // استرجاع الثيم المحفوظ أو تطبيق الوضع الداكن الافتراضي
  const savedTheme = localStorage.getItem('arclio_theme') || 'dark';
  if (savedTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      if (newTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
      } else {
        htmlElement.removeAttribute('data-theme');
      }

      localStorage.setItem('arclio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'light' 
      ? '<span aria-hidden="true">🌙</span>' 
      : '<span aria-hidden="true">☀️</span>';
    themeToggleBtn.setAttribute('aria-label', theme === 'light' ? 'التبديل إلى الوضع الداكن' : 'التبديل إلى الوضع الفاتح');
  }

  // 2. قائمة الموبايل التفاعلية (Mobile Navigation Toggle)
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  if (mobileNavToggle && mobileNavDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('is-active');
      const isOpened = mobileNavDrawer.classList.contains('is-active');
      mobileNavToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
    });

    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('is-active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      });
    }

    // إغلاق القائمة بمفتاح Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavDrawer.classList.contains('is-active')) {
        mobileNavDrawer.classList.remove('is-active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.focus();
      }
    });
  }

  // 3. تحديث سنة الفوتر تلقائيًا
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
