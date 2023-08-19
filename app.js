let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
  let x = e.clientX;
	let y = e.clientY;

	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
	link.addEventListener('mouseover', ()=>{
		cursor.classList.add("grow");
	});
	link.addEventListener('mouseleave', ()=>{
		cursor.classList.remove("grow");
	});
});
