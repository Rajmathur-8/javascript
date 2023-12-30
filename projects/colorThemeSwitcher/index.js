const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'violet') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'indigo') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
  });
});
