const submitBtn = document.querySelector('.submit-btn');
const thankYou = document.querySelector('.thankyou__state');
const rating = document.querySelector('.rating-container');
const ratingBtn = document.querySelectorAll('.rating-btn');
const selected = document.querySelector('.selected');

let voted = 0;

submitBtn.addEventListener('click', () => {
  if (thankYou.classList.contains('hidden')) {
    rating.classList.add('hidden');
    thankYou.classList.remove('hidden');
  }
});

const amountOfSelected = function (voted) {};

ratingBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'hsl(25, 97%, 53%)';

    if ((btn.style.backgroundColor = 'hsl(25, 97%, 53%)')) {
      voted++;
    }

    console.log(voted);

    selected.innerHTML = `
      You selected ${voted} out of 5!
    `;
  });
});
