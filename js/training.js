document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// training card

document.addEventListener('DOMContentLoaded', function() {
    const dayButtons = document.querySelectorAll('.day-btn');
    const dayCards = document.querySelectorAll('.day-cards');

    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            dayButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const day = button.getAttribute('data-day');

            // Avvalgi kartalarni tranzitsiya bilan kichraytirib va pastga tushirish
            dayCards.forEach(cards => {
                if (cards.classList.contains('active')) {
                    const activeCards = cards.querySelectorAll('.card');
                    activeCards.forEach(card => {
                        card.classList.remove('show');
                        card.classList.add('hide');
                    });
                    setTimeout(() => {
                        cards.classList.remove('active');
                        cards.style.display = 'none';
                    }, 500); // Kartalarni yashirish uchun biroz kechikish
                }
            });

            // Yangi kartalarni tranzitsiya bilan kattalashtirish va ko'rsatish
            setTimeout(() => {
                const selectedDayCards = document.querySelector(`.day-cards[data-day="${day}"]`);
                selectedDayCards.classList.add('active');
                selectedDayCards.style.display = 'flex';

                const newCards = selectedDayCards.querySelectorAll('.card');
                newCards.forEach(card => {
                    card.classList.remove('hide');
                    card.classList.add('show');
                });
            }, 500); // Yangi kartalarni ko'rsatish uchun biroz kechikish
        });
    });

    // Sahifa yuklanganida birinchi kunga tegishli kartalarni ko'rsatish
    const defaultDayCards = document.querySelector('.day-cards[data-day="monday"]');
    defaultDayCards.classList.add('active');
    defaultDayCards.style.display = 'flex';

    const initialCards = defaultDayCards.querySelectorAll('.card');
    initialCards.forEach(card => {
        card.classList.add('show');
    });
});
