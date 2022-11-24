var headerDown=document.querySelector('#headerDown');
var btnScroll=document.querySelector('#btn-scroll');
var btnBack=document.querySelector('#btn-back');

btnScroll.addEventListener('click',scroll);

function scroll()
{
    headerDown.style.transform='translateX(-500px)'
    headerDown.style.overflow='visible';
    btnScroll.style.display='none';
}

btnBack.addEventListener('click',back);

function back()
{
    headerDown.style.transform='translateX(0)';
    btnScroll.style.display='block';
}