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
    let items = formAdd.querySelectorAll('span.item');
    if (toFind !== ""){
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(toFind)) {
                item.parentElement.classList.add('hidden');
            }
        })
    }
})

filterList.addEventListener('submit', (e) => {
    e.preventDefault();
    filterList.value = "";
})

checkBox.addEventListener('change', (e) => {
    if (e.target.checked) {
        ul.classList.add('hidden');
    } else {
        ul.classList.remove('hidden');
    }
})