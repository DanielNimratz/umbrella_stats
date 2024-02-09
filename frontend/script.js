const progressBar = document.querySelector('#first');

function updateProgressBar(newValue) {
  newValue = Math.min(newValue, parseInt(progressBar.getAttribute('max')));
  progressBar.style.setProperty('--value', newValue);
}


async function UpdateNumber() {
  const res = await fetch("http:localhost:3000/json");
  const data = await res.json();
  return data.num;
}

setInterval(async () => {
  const num = await UpdateNumber();
  updateProgressBar(num);
}, 1000);