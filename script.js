// ============================================
// script.js — Shared logic for all pages
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Current chapter number from URL (bhagN.html -> N)
    function getChapterNumber() {
        const match = window.location.pathname.match(/bhag(\d+)\.html/);
        return match ? parseInt(match[1], 10) : null;
    }

    const currentChapter = getChapterNumber();
    const TOTAL = 60;

    // 2. Save reading progress in localStorage
    if (currentChapter) {
        localStorage.setItem('lastReadChapter', String(currentChapter));

        let readChapters = [];
        try {
            readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
            if (!Array.isArray(readChapters)) readChapters = [];
        } catch (e) {
            readChapters = [];
        }
        if (!readChapters.includes(currentChapter)) {
            readChapters.push(currentChapter);
            localStorage.setItem('readChapters', JSON.stringify(readChapters));
        }
    }

    // 3. Keyboard navigation: Left = previous, Right = next
    document.addEventListener('keydown', (e) => {
        if (!currentChapter || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
        const tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

        if (e.key === 'ArrowRight' && currentChapter < TOTAL) {
            window.location.href = `bhag${currentChapter + 1}.html`;
        } else if (e.key === 'ArrowLeft' && currentChapter > 1) {
            window.location.href = `bhag${currentChapter - 1}.html`;
        }
    });

    // 4. Reading progress bar (chapter progress + scroll within the chapter)
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const updateProgress = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 100;

            if (currentChapter) {
                const start = ((currentChapter - 1) / TOTAL) * 100;
                const span = 100 / TOTAL;
                progressBar.style.width = `${start + (scrollPercent / 100) * span}%`;
            } else {
                progressBar.style.width = `${scrollPercent}%`;
            }
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
        updateProgress();
    }

    // 5. Index page: highlight last read chapter, tick chapters already read
    const chapterCards = document.querySelectorAll('.chap-card');
    if (chapterCards.length > 0) {
        let readChapters = [];
        try {
            readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
            if (!Array.isArray(readChapters)) readChapters = [];
        } catch (e) {
            readChapters = [];
        }
        const lastRead = parseInt(localStorage.getItem('lastReadChapter') || '0', 10);

        chapterCards.forEach((card) => {
            const num = parseInt(card.dataset.chapter || '0', 10);
            if (readChapters.includes(num)) {
                card.classList.add('read');
                if (num !== lastRead) card.textContent += ' ✓';
            }
            if (num === lastRead) {
                card.classList.add('last-read');
                card.textContent += ' ✅';
                card.setAttribute('aria-current', 'page');
            }
        });
    }

    // 6. Light / dark theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') document.body.classList.add('dark-mode');

        const paintIcon = () => {
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        };
        paintIcon();

        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', String(isDark));
            paintIcon();
        });
    }
});
