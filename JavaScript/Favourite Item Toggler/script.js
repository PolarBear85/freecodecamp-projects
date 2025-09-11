const favItem = document.querySelectorAll('.favorite-icon');

favItem.forEach(item => {
    item.addEventListener('click',()=> {
        changeIcon(item);
    });
});

function changeIcon(item) {
    if (item.classList.contains('filled')) {
        item.innerHTML = '&#9825;';
        item.classList.remove('filled');
    } else {
        item.innerHTML= '&#10084;';
        item.classList.add('filled');
    }
}