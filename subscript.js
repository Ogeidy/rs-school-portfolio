function onLoad() {
    let state = 'Desktop';
    let value = window.location.href.split('?')[1];
    document.querySelector('.subindex').setAttribute('src', value + '/index.html');

    document.querySelector('.switches--state').addEventListener('click',function() {
        console.log(this);
        this.innerHTML = state;
        if (state === 'Desktop') {
            document.querySelector('.subindex').classList.remove('desktop');
            document.querySelector('.subindex').classList.add('mobile');
            state = 'Mobile';
        } else {
            document.querySelector('.subindex').classList.remove('mobile');
            document.querySelector('.subindex').classList.add('desktop');
            state = 'Desktop';
        }
    });
}
