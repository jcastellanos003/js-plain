(function onLoad() {
    var list = [
        {
            name: 'sweep',
            title: 'Barrer la casa'
        },
        {
            name: 'cook',
            title: 'Cocinar rico'
        },
        {
            name: 'Beer',
            title: 'Tomar cerveza'
        },
        {
            name: 'jerk',
            title: 'Halarse'
        }
    ];

    var ul = document.getElementById('tasksList');
    list.forEach(item => {
        var li = document.createElement('li');
        var label = document.createElement('label');
        var input = document.createElement('input');
        var span = document.createElement('span');

        input.type = 'checkbox';
        input.name = item.name;
        input.onclick = print;

        span.innerText = item.title;

        label.append(input, span);

        li.appendChild(label);
        ul.appendChild(li);
    });
})()

function print(e) {
    var list = document.getElementsByName(e.target.name);
    var checkbox = list[0];

    if (checkbox.checked) {
        checkbox.nextElementSibling.className = 'checked-line checked-color';
    } else {
        checkbox.nextElementSibling.className = '';
    }
}
