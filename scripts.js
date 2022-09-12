// alert('linked')

/* Creating the 'X' close symbol in each of the LI TAGS  */

var myNodeItem = document.getElementsByTagName('li');

var i;
for (i = 0; i < myNodeItem.length; i++) {

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);

    myNodeItem[i].appendChild(span);

}

/* Making the 'X' close symbol to be able to delete the LI TAGS Lists */

var close = document.getElementsByClassName('close');

var i;
for (i = 0; i < close.length; i++) {

    close[i].onclick = function () {

        var div = this.parentElement;
        div.style.display = 'none';

    }

}

/* Adding a check mark and a strike through each of the 'LI' Tags*/

var list = document.querySelector('ul');

list.addEventListener('click',

    function (e) {
        if (e.target.tagName == 'LI') {
            e.target.classList.toggle('checked');
        }
    },

    false)

/* Getting the input tag to display a message if we type a blank message */

function newElement() {

    var li = document.createElement('li');

    var inputValue = document.getElementById('myinput').value;

    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
        alert('Please write something about your task here...')
    } else {
        document.getElementById('muUL').appendChild(li);
    }
    document.getElementById('myinput').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);

    li.appendChild(span);

    for (i = 0; i < close.length; i++) {

        close[i].onclick = function () {

            var div = this.parentElement;
            div.style.display = 'none';

        }

    }

}