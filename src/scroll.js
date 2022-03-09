window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector(".gotopbtn");
    scroll.classList.toggle("visible" , window.scrollY>510)
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