const div = document.querySelector('div');
    const heading = document.querySelector('h1');
    const time = document.createElement('p');
    time.setAttribute('style','font-size:1.5rem;margin-top:2rem;')
      div.appendChild(time);
    setInterval(()=>{
     heading.style.color !== 'transparent'?transparent():revert();
        let currentTime = new Date();
        time.textContent = currentTime.toLocaleTimeString();
    },1000);
function transparent(){
  heading.style.color = 'transparent'
  heading.style.webkitTextStroke = "1px white";
}
function revert(){
  heading.style.color = 'white'
  heading.style.webkitTextStroke = "1px white";
}