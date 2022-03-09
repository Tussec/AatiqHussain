window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".gotopbtn");
    scroll.classList.toggle("visible" , window.scrollY>510)
})