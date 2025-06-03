const h1 = document.querySelector('h1')

const textTitle = "L'ANIMATION"

let i = 0;
const interval = setInterval(() => {
	h1.innerHTML += textTitle[i]
	i++
    if(i>= textTitle.length) {
		clearInterval(interval)
	}
}, 150)
function toggle_text() {
  var span = document.getElementById('span_txt2');
  if(span.style.display == "none") {
    span.style.display = "inline";
  } 
  else {
    span.style.display = "none";
  }
 
}
  
const darkmode = document.querySelector('.dark-mode');

darkmode.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        darkmode.innerHTML = "Mode jour"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        darkmode.innerHTML = "Mode nuit"

    }

})

AOS.init();

