let burgerBtn = document.getElementById('sidebar-btn');

burgerBtn.onclick = function sidebar() {
    document.getElementById('sidebar').classList.toggle('sidebar-anim');
    document.getElementById('sidebar-btn').classList.toggle('sidebar-btn-anim');
    document.querySelector('body').classList.toggle('body-fixed');
}