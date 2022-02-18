let burgerBtn = document.getElementById('burger-btn');

burgerBtn.onclick = function burgerMenu() {
    document.getElementById('burger-menu').classList.toggle('burger-menu-anim');
    document.getElementById('burger-btn').classList.toggle('burger-btn-anim');
}