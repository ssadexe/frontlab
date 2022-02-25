let sidebarBtn = document.getElementById('sidebar-btn');
let sidebar = document.getElementById('sidebar');
let sidebarBtnIcon = document.getElementById('sidebar-btn-icon');
let backBtn = document.getElementById('back-btn');
let sidebarLink = document.getElementById('list-el')

sidebarBtn.onclick = function openSidebar() {
    sidebar.classList.toggle('sidebar-opened');
    sidebarBtn.classList.toggle('sidebar-btn-animation');

    if (sidebar.classList.contains('sidebar-opened')) {
        sidebarBtnIcon.src = 'img/icons/UI/cancel.svg';
        document.body.style.position = 'fixed';
    } else {
        sidebarBtnIcon.src = 'img/icons/UI/menu.svg';
        document.body.style.position = 'relative';
    }
}

sidebarLink.onclick = function closeSidebar() {
    sidebar.classList.remove('sidebar-animation');
}

backBtn.onclick = function backPage() {
    sidebar.classList.remove('sidebar-opened')
    history.back();
    sidebar.classList.remove('sidebar-opened')
}