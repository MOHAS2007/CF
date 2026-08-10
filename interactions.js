const triggers = document.querySelectorAll('.nav-button');
triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
        const hiddenItem = this.querySelector('.tip');
        hiddenItem.classList.add('show-element');
    });
    trigger.addEventListener('mouseleave', function() {
        const hiddenItem = this.querySelector('.tip');
        hiddenItem.classList.remove('show-element');
    });
    
});
