const allBtns = document.querySelectorAll('.button');
const body = document.querySelector('body');

allBtns.forEach(function (btn) {
    btn.addEventListener('click', function (eventObj) {
        console.log(eventObj)
        if (eventObj.target.id == 'grey') {
            body.style.backgroundColor = 'grey'
        } else if (eventObj.target.id == 'white') {
            body.style.backgroundColor = eventObj.target.id
        } else if (eventObj.target.id == 'yellow') {
            body.style.backgroundColor = eventObj.target.id
        } else if (eventObj.target.id == 'blue') {
            body.style.backgroundColor = eventObj.target.id
        }
    })
})