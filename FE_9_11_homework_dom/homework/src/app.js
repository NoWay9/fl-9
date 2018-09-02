var rootNode = document.getElementById('root');
var div = document.createElement('div');
var header = document.createElement('h1');
var div1 = document.createElement('div');
var input = document.createElement('input');
var btn = document.createElement('button');
header.textContent = 'TODO Cat List';
header.className = 'main-header';
input.setAttribute('type','text');
input.setAttribute('placeholder','Add New Action');
input.className = 'add-action';
div1.className = 'new-action';
btn.className = 'add-icon';
btn.innerHTML = '<i class="material-icons">add_box</i>';
var wrapperForActions = document.createElement('div');
var img = document.createElement('img');
img.className = 'img-footer';
img.setAttribute('src', './assets/img/cat.png')
div1.appendChild(input);
div1.appendChild(btn);
div.appendChild(header);
div.appendChild(div1);
div.appendChild(wrapperForActions);
div.appendChild(img);
rootNode.appendChild(div);
var actionsArr = [];
var maxNumberItems = 10;
var zeroChildren = 0;
var isDisabled = false;
if(input.value === ''){
btn.setAttribute('disabled', true);
}
input.addEventListener('input', function() {
    if(input.value === ''){
        btn.disabled = true;
        } else if(input.value !== ''){
            btn.disabled = false;
        } 
})
btn.addEventListener('click', function(){
    if(actionsArr.length >= maxNumberItems){
        btn.disabled = true;
        input.disabled = true;
        var notifHeader = document.createElement('h3');
        notifHeader.className = 'notif-header';
        notifHeader.textContent = 'Maximum item per list are created’ is displayed';
        div.insertBefore(notifHeader, div1);
     } else if(actionsArr.length < maxNumberItems) {
    actionsArr.push(input.value);
    var div2 = document.createElement('div2');
    div2.className = 'list-item';
    div2.setAttribute('draggable', true)
    var checkboxIcon = document.createElement('span');
    var actionText = document.createElement('p');
    var btn2 = document.createElement('button');
    btn2.innerHTML = '<i class="material-icons">delete</i>';
    checkboxIcon.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    checkboxIcon.className = 'unchecked-icon';
    actionText.textContent = input.value;
    actionText.className = 'action-text';
    btn2.className = 'remove-action';
    div2.appendChild(checkboxIcon);
    div2.appendChild(actionText);
    div2.appendChild(btn2);
    wrapperForActions.appendChild(div2);
    checkboxIcon.addEventListener('click', function() {
        var checkedIcon = document.createElement('span');
        checkedIcon.innerHTML = '<i class="material-icons">check_box</i>';
        div2.removeChild(checkboxIcon);
        div2.insertBefore(checkedIcon, div2.children[zeroChildren])
   })
   btn2.addEventListener('click', function(e) {
    wrapperForActions.removeChild(div2);
   })
   var dragelement;
var allActions = document.querySelectorAll('.list-item');
   for(var empty of allActions){
       empty.addEventListener('dragover', function(e){
        e.preventDefault();
       });
       empty.addEventListener('drop', function(e) {
        e.preventDefault();
        if(e.target.nodeName === 'DIV2' && dragelement !== undefined){
          if(dragelement.nextSibling !== e.target || dragelement.nextSibling === null){  
              wrapperForActions.insertBefore(dragelement, e.target);
          } else if(dragelement.nextSibling === e.target){
          wrapperForActions.insertBefore(dragelement, e.target.nextSibling);
                }
        }
       });
   }
   div2.addEventListener('dragstart', function(e) {
        dragelement = e.target
        if(dragelement){
            return;
        }
   })
}
})



     


