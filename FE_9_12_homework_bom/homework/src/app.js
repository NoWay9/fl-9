const rootNode = document.getElementById('root');
let todoItems = [];
let id = 1;
const headerMain = document.createElement('h1');
const divwrapper = document.createElement('div');
const btn = document.createElement('button');
const itemsList = document.createElement('ul');
const mainPage = document.createElement('div')
headerMain.textContent = 'TODO Application';
headerMain.className = 'main-title';
divwrapper.className = 'btn-addn-new';
btn.textContent = 'Add new task';
itemsList.className = 'list-styl';
const addNewItemPage = document.createElement('div');
const header = document.createElement('h1');
const input = document.createElement('input');
const btnWrapper = document.createElement('div');
const cancelBtn = document.createElement('button');
const saveBtn = document.createElement('button');
input.setAttribute('type', 'text');
header.textContent = 'Add task';
cancelBtn.textContent = 'Cancel';
cancelBtn.className = 'cancel-btn';
saveBtn.textContent = 'Save changes';
addNewItemPage.className = 'add-item-page';
btnWrapper.className = 'btn-wrap';
const modifyItemPage = document.createElement('div');
const headerModify = document.createElement('h1');
const inputModify = document.createElement('input');
const btnWrapperModify = document.createElement('div');
const cancelBtnModify = document.createElement('button');
const saveBtnModify = document.createElement('button');
inputModify.setAttribute('type', 'text');
headerModify.textContent = 'Modify item';
cancelBtnModify.textContent = 'Cancel';
cancelBtnModify.className = 'cancel-btn';
saveBtnModify.textContent = 'Save changes';
modifyItemPage.className = 'add-item-page';
modifyItemPage.className = 'btn-wrap';
addNewItemPage.appendChild(header);
addNewItemPage.appendChild(input);
btnWrapper.appendChild(cancelBtn);
btnWrapper.appendChild(saveBtn);
addNewItemPage.appendChild(btnWrapper);
modifyItemPage.appendChild(headerModify);
modifyItemPage.appendChild(inputModify);
btnWrapperModify.appendChild(cancelBtnModify);
btnWrapperModify.appendChild(saveBtnModify);
modifyItemPage.appendChild(btnWrapperModify);
mainPage.appendChild(headerMain);
divwrapper.appendChild(btn);
mainPage.appendChild(divwrapper);
mainPage.appendChild(itemsList);
rootNode.appendChild(mainPage);
btn.onclick = function () {
    location.hash = '#/add suffix';
}
function showMainPage() {
    let todoItemsIner = JSON.parse(localStorage.getItem('items'));
    if (localStorage.getItem('items')) {
        todoItemsIner = JSON.parse(localStorage.getItem('items'));
        if (todoItemsIner.length >= 1) {
            todoItemsIner.forEach((item) => {
                let itemElem = document.createElement('li');
                itemElem.className = 'item-styl';
                const checkboxEmpty = document.createElement('img');
                const checkedCheckBox = document.createElement('img');
                const deleteItem = document.createElement('img');
                const textListItem = document.createElement('p');
                checkboxEmpty.setAttribute('src', './assets/img/todo-s.png');
                checkedCheckBox.setAttribute('src', './assets/img/done-s.png');
                deleteItem.setAttribute('src', './assets/img/remove-s.jpg');
                textListItem.textContent = item.description;
                if (item.isDone === false) {
                    itemElem.appendChild(checkboxEmpty);
                } else if (item.isDone === true) {
                    itemElem.appendChild(checkedCheckBox);
                }

                itemElem.appendChild(textListItem);
                itemElem.appendChild(deleteItem);
                itemsList.appendChild(itemElem);
                checkboxEmpty.addEventListener('click', function () {
                    item.isDone = true;
                    itemElem.removeChild(checkboxEmpty);
                    const helperElem = document.createElement('div');
                    const helperCount = 0;
                    itemElem.insertBefore(checkedCheckBox, itemElem.children[helperCount]);
                    helperElem.appendChild(itemElem);
                    mainPage.appendChild(helperElem);
                });
                deleteItem.addEventListener('click', function () {
                    itemsList.removeChild(itemElem);
                });

                textListItem.addEventListener('click', function () {
                    location.hash = '#/modify/:' + item.id;
                });
            })
        }
    }
}
showMainPage();
window.addEventListener('hashchange', function (e) {
    const hasTextLen = 8;
    if (location.hash === '#/add suffix' || location.hash === '#/add%20suffix') {
        rootNode.removeChild(mainPage);
        rootNode.appendChild(addNewItemPage);
    } else if (location.hash.slice(1, hasTextLen) === '/modify') {
        rootNode.removeChild(mainPage);
        rootNode.appendChild(modifyItemPage);
    } else if (location.hash === '') {
        rootNode.removeChild(addNewItemPage);
        rootNode.appendChild(mainPage);
    }
});
saveBtn.onclick = function () {
    if (input.value !== '') {
        todoItems.push({ isDone: false, id: id++, description: input.value });
        localStorage.setItem('items', JSON.stringify(todoItems));
        location.hash = '';
        showMainPage();
    }
};
saveBtnModify.onclick = function () {
    if (inputModify.value !== '') {
        todoItems.push({ isDone: false, id: id++, description: input.value });
        localStorage.setItem('items', JSON.stringify(todoItems));
        location.hash = '';
        showMainPage();
    }
};
cancelBtn.onclick = function () {
    location.hash = '';
};


