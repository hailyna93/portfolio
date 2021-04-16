const changeBorderImg = document.getElementById('lovelace');
changeBorderImg.addEventListener('click', function() {
    changeBorderImg.style.borderRadius = '0px';
});
const changeColorli = document.getElementsByTagName('h1');
changeColorli.addEventListener('click', function() {
    changeColorli[0].style.color = 'red';
});