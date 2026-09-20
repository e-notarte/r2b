document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'active' class on both the button and the menu
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Dropdown toggle on click
    const dropdownToggles = document.querySelectorAll('.nav-item-dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const menu = toggle.nextElementSibling;
            if (menu && menu.classList.contains('dropdown-menu')) {
                menu.classList.toggle('show');
            }
        });
    });

    // Optional: Close the mobile menu and dropdowns when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks ? navLinks.contains(event.target) : false;
        const isClickOnToggle = navToggle ? navToggle.contains(event.target) : false;

        if (navLinks && navToggle && !isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }

        // Close dropdowns
        dropdownToggles.forEach(toggle => {
            const menu = toggle.nextElementSibling;
            if (menu && menu.classList.contains('show') && !toggle.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    });
});

// Page Loader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300); // 300ms delay for premium feel
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});