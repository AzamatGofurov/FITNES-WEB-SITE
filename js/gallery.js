document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryGrids = document.querySelectorAll('.gallery-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            const activeGrid = document.querySelector('.gallery-grid.show');

            // Eski rasmlarni animatsiya bilan yo'q qilish
            const itemsToHide = activeGrid.querySelectorAll('.gallery-item.show');
            itemsToHide.forEach(item => {
                item.classList.remove('animate__bounceInUp');
                item.classList.add('animate__backOutDown');

                // Rasmlarni yashirish
                item.addEventListener('animationend', () => {
                    item.classList.remove('show');
                    item.classList.remove('animate__backOutDown');
                }, { once: true });
            });

            // Yangi rasmlarni ko'rsatish
            activeGrid.addEventListener('animationend', () => {
                galleryGrids.forEach(grid => grid.classList.remove('show'));

                const newGrid = document.querySelector(`.${filter}-gallery`);
                const itemsToShow = newGrid.querySelectorAll('.gallery-item');

                newGrid.classList.add('show');

                itemsToShow.forEach(item => {
                    item.classList.add('show');
                    item.classList.add('animate__backInLeft');
                });
            }, { once: true });
        });
    });

    // Boshlang'ich holat: "All" galereyani ko'rsatish
    document.querySelector('.all-gallery').classList.add('show');
    const initialItems = document.querySelectorAll('.all-gallery .gallery-item');
    initialItems.forEach(item => item.classList.add('animate__backInLeft'));
});
