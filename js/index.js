const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownList = document.querySelector('.dropdown-list');

toggleBtn.onclick = ()=>{
    dropDownList.classList.toggle('open')
    let isOpen = dropDownList.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}