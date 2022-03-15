window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".gotopbtn");
    scroll.classList.toggle("visible" , window.scrollY>510)
})

window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".wrapper");
    scroll.classList.toggle("visible" , window.scrollY>500)
    scroll.classList.toggle("Nvisible" , window.scrollY>700)
})
window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".designBar");
    scroll.classList.toggle("visible" , window.scrollY>800)
    scroll.classList.toggle("Nvisible" , window.scrollY>1200)
})
window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".serviceBar");
    scroll.classList.toggle("visible" , window.scrollY>1700)
    scroll.classList.toggle("Nvisible" , window.scrollY>2100)
})
window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".workBar");
    scroll.classList.toggle("visible" , window.scrollY>2900)
    scroll.classList.toggle("Nvisible" , window.scrollY>3200)
})
window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".contactBar");
    scroll.classList.toggle("visible" , window.scrollY>3900)
    scroll.classList.toggle("Nvisible" , window.scrollY>4200)
})


// to Find Overflow mistakes  use it in console


// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
