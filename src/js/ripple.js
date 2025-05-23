function appendRipples() {
    document.querySelectorAll('.card3').forEach(card => {
        card.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            this.appendChild(ripple);
    
            // Remove the ripple after animation
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
}

appendRipples();