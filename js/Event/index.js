const topDiv = document.querySelector('.top');
const middleDiv = document.querySelector('.middle');
const bottomDiv = document.querySelector('.bottom');
const log = document.querySelector('.log');

function handler(e) {
  console.log('click', e.target, e.currentTarget);
}

function stopBubbling(e) {
  e.stopPropagation();
  console.log('stop', e.target, e.currentTarget);
}

// topDiv.addEventListener('click', handler);
// topDiv.addEventListener('click', stopBubbling);
// middleDiv.addEventListener('click', handler);
// bottomDiv.addEventListener('click', stopBubbling);
bottomDiv.addEventListener('click', handler);

document.addEventListener('click', function (event) {
  if (event.target.dataset.counter !== undefined) {
    log.value += 1;
    // console.log(log.value);
  }
});
