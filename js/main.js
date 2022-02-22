let sidebarBtn = document.getElementById('sidebar-btn')
let sidebar = document.getElementById('sidebar')

sidebarBtn.onclick = function openSidebar() {
    sidebar.classList.toggle('sidebar-opened')
    sidebarBtn.classList.toggle('sidebar-btn-animation')
}