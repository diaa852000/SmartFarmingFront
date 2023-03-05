// toggleBtn.addEventListener('click', ()=>{
//     navbarLinks.classList.toggle('active')
//     loginBtn.classList.toggle('active')
// });

// animation on scroll
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show')
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((ele)=> observer.observe(ele));

//minimize the menu 
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownList = document.querySelector('.dropdown-list');

toggleBtn.onclick = ()=>{
    dropDownList.classList.toggle('open')
    let isOpen = dropDownList.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}