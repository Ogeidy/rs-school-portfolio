let items = document.querySelectorAll('.item');
let currentItem = 0;

document.querySelector('.control.left').addEventListener('click', function() {
    console.log('Left');
    items[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + items.length) % items.length;
    console.log(currentItem);
    items[currentItem].classList.add('active');
});

document.querySelector('.control.right').addEventListener('click', function() {
    console.log('Right');
    items[currentItem].classList.remove('active');
    currentItem = (currentItem + 1 + items.length) % items.length;
    console.log(currentItem);
    items[currentItem].classList.add('active');
});