const formEl = document.querySelector('.form');
console.log(formEl);

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

formEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const { amount, delay, step } = event.currentTarget.elements;
  console.log(amount.value);
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  for (let i = 0; i < +amount.value; i += 1) {
    createPromise(i + 1, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
  }
}
