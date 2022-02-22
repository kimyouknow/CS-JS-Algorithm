const topDiv = document.querySelector('.top');
const middleDiv = document.querySelector('.middle');
const bottonDiv = document.querySelector('.botton');
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
// bottonDiv.addEventListener('click', stopBubbling);
bottonDiv.addEventListener('click', handler);

document.addEventListener('click', function (event) {
  if (event.target.dataset.counter !== undefined) {
    log.value += 1;
    // console.log(log.value);
  }
});
