const colors = ["grey", "blue", "yellow", "purple", "red", "green", "pink"];
const container = document.querySelector('.canvas');
const text = document.querySelector("#color-name")

colors.forEach(color => {
  const span = document.createElement('span');
  span.classList.add('button');
  span.style.backgroundColor = color;
  span.setAttribute('data-color', color);
  container.append(span);
});

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const colorNameText = document.getElementById('color-name')

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('button')){
    body.style.backgroundColor = e.target.getAttribute('data-color');
    text.textContent = `Current Color : ${e.target.getAttribute('data-color')}`
  }
});

document.getElementById('randomColor').addEventListener('click', () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
});

const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});