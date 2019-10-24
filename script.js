let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnable = true;

function cnangeCurrentItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
}

function hideItem(direction) {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove(direction);
        this.classList.remove('active');
        isEnable = true;
    });
}

document.querySelector('.control.left').addEventListener('click', function() {
    if (isEnable) {
        hideItem('to_left');
        cnangeCurrentItem();
        items[currentItem].classList.add('active');
    }
});

document.querySelector('.control.right').addEventListener('click', function() {
    if (isEnable) {
        hideItem('to_right');
        cnangeCurrentItem();
        items[currentItem].classList.add('active');
    }
});