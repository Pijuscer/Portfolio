const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')
      
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

const upScroll = () =>{
    const upScroll = document.getElementById('scroll-up')
    this.scrollY >= 350 ? upScroll.classList.add('show-scroll')
    : upScroll.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', upScroll)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

