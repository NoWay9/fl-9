const wrapper = document.createElement('div');
const viewMore = document.createElement('span');
let objData = [];

viewMore.classList.add('view-more-btn');
viewMore.textContent = 'view more';
wrapper.classList.add('main-wrapper');
$('#container').append(wrapper);
for (let i = 0; i <= 11; i++) {
    const div = document.createElement('div');
    div.classList.add('list-item');
    const img = document.createElement('img');
    img.setAttribute('src', 'picture/' + i + '.jpg');
    img.setAttribute('id', i);
    img.setAttribute('alt', 'item');
    img.classList.add('img-item');
    div.appendChild(img);
    $('.main-wrapper').append(div);
}
$('body').append(viewMore);
let i = 12;
$('.view-more-btn').click(function () {
    let nextIter = i + 5;
    if (nextIter > 21) {
        nextIter = 21;
    }
    for (i; i <= nextIter; i++) {

        const div = document.createElement('div');
        div.classList.add('list-item');

        const img = document.createElement('img');
        img.setAttribute('id', i);
        img.setAttribute('src', 'picture/' + i + '.jpg');
        img.setAttribute('alt', 'item');
        img.classList.add('img-item');
        div.appendChild(img);
        $('.main-wrapper').append(div);
    }
})

$('.list-item').click((function (e) {
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.classList.add('modal-window');
    modal.appendChild(modalContent);
    $('body').append(modal);
    let localData = objData.media[e.target.id];
    const imageSection = document.createElement('div');
    const textSection = document.createElement('div');
    const imgInSection = document.createElement('img');
    const commentInput = document.createElement('input');
    const logo = document.createElement('img');
    const userName = document.createElement('span');
    const followLink = document.createElement('a');
    const location = document.createElement('p');
    const comment = document.createElement('div');
    const likesCount = document.createElement('p');
    likesCount.innerHTML = localData.edge_liked_by.count + ' likes';
    imageSection.classList.add('image-section');
    likesCount.classList.add('likes-count');
    textSection.classList.add('text-section');
    commentInput.classList.add('comment-input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment...');
    location.textContent = localData.location
    location.classList.add('location');
    imgInSection.classList.add('image-in-section');
    imgInSection.setAttribute('src', localData.display_url);
    logo.setAttribute('src', objData.profile_pic_url);
    logo.classList.add('logo');
    comment.classList.add('comment-cl');
    userName.classList.add('info');
    followLink.classList.add('follow-link')
    userName.textContent = objData.username;
    followLink.innerHTML = ' &#9679; Follow';
    comment.innerHTML = objData.username + ':' + localData.edge_media_to_caption;
    imageSection.appendChild(imgInSection);
    textSection.appendChild(logo);
    userName.appendChild(followLink);
    textSection.appendChild(userName);
    textSection.appendChild(location);
    textSection.appendChild(comment);
    textSection.appendChild(likesCount);
    textSection.appendChild(commentInput);
    modalContent.appendChild(imageSection);
    modalContent.appendChild(textSection);
}));

$('.list-item').hover(function () {
    $(this).addClass('hover');
})

window.onclick = function (event) {
    var $modal = document.getElementsByClassName('modal-window')[0];
    if (event.target == $modal) {
        $('.modal-window').remove();
    }
}
$(document).keyup(function (e) {
    if (e.key === "Escape") {
        $('.modal-window').remove();
    }
});
$.getJSON("./data/media.json", function (res) {
    objData = res;
});