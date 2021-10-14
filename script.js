const btn = document.getElementById('btn-carrousel');
const image = document.querySelector('.img');

let counter = 1;

btn.addEventListener('click', function(){
  counter === 5 ? counter = 1 : counter++;
  image.style.backgroundImage = `url('images/${counter}.jpeg')`;
});
