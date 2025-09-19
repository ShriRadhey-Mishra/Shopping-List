let ul = document.querySelector('#list ul');
let formAdd = document.getElementById('add-item');
let filterList = document.getElementById('search-item');
let checkBox = document.getElementById('check').lastElementChild;

ul.addEventListener('click', (e) => {
    let target = e.target;
    if (target.className === 'delete') {
        target.parentElement.remove();
    }
})

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = formAdd.querySelector('input[type="text"]').value;

    let newLi = document.createElement('li');
    let item = document.createElement('span');
    item.className = 'item'
    item.innerText = text;

    let remove = document.createElement('span')
    remove.className = 'delete';
    remove.textContent = "remove";
    newLi.appendChild(item);
    newLi.appendChild(remove);
    ul.appendChild(newLi);
    formAdd.querySelector('input[type="text"]').value = "";
})

filterList.addEventListener('keyup', (e) => {
    let toFind = e.target.value.toLowerCase();
    let items = ul.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        let value = item.firstElementChild.textContent.toLowerCase();
        if (value.indexOf(toFind) === -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
})

filterList.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.firstElementChild.value = '';
})

checkBox.addEventListener('change', (e) => {
    if (e.target.checked) {
        ul.classList.add('hidden');
    } else {
        ul.classList.remove('hidden');
    }
})