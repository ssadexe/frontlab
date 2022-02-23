let sidebarBtn = document.getElementById('sidebar-btn')
let sidebar = document.getElementById('sidebar')
let sidebarBtnIcon = document.getElementById('sidebar-btn-icon')

sidebarBtn.onclick = function openSidebar() {
    sidebar.classList.toggle('sidebar-opened')
    sidebarBtn.classList.toggle('sidebar-btn-animation')
    if (sidebar.classList.contains('sidebar-opened')) {
        sidebarBtnIcon.classList.toggle('sidebar-icon-transition')
        sidebarBtnIcon.src = 'img/icons/cancel.svg'
    } else {
        sidebarBtnIcon.src = 'img/icons/menu.svg'
    }
}