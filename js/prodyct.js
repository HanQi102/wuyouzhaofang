var list = document.querySelector('.list1').children;

var active1 = document.querySelectorAll('.active1')

var nav = document.querySelector('nav');
var list1 = document.querySelector('.list1');

for (let i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i);

    list[i].onclick = function () {
        var index = this.getAttribute('index');
        for (let j = 0; j < list.length; j++) {

            list[j].classList.remove('active')
            list[index].classList.add('active')
        }
        for (let k = 0; k < active1.length; k++) {
            active1[k].classList.add('active1')
            active1[index].classList.remove('active1')
        }
        nav.classList.remove('location')
        nav.classList.add('location')

    }
} 