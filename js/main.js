let sidebarBtn = document.getElementById('sidebar-btn')
let sidebar = document.getElementById('sidebar')
let sidebarBtnIcon = document.getElementById('sidebar-btn-icon')
let backBtn = document.getElementById('back-btn')

sidebarBtn.onclick = function openSidebar() {
    sidebar.classList.toggle('sidebar-opened')
    sidebarBtn.classList.toggle('sidebar-btn-animation')
    if (sidebar.classList.contains('sidebar-opened')) {
        sidebarBtnIcon.src = 'img/icons/cancel.svg'
        document.body.style.position = 'fixed'
    } else {
        sidebarBtnIcon.src = 'img/icons/menu.svg'
        document.body.style.position = 'relative'
    }
}

backBtn.onclick = function backPage() {
    history.back()
}