let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');


window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px";
  text.style.letterSpacing = value * 0.05 + "px";
  text.style.filter = "blur(" + value * 0.03 + "px)";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 0.5 + "px";
  hill4.style.left = value * -0.5 + "px";
  hill1.style.top = value * -0.3 + "px";
  tree.style.scale = 1 + (value * -0.0005);
});

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      window.scrollBy(0, -1);
      break;
    case 'ArrowDown':
      window.scrollBy(0, 1);
      break;
    default:
      break;
  }
});
