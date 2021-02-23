const tabHeader = document.querySelector('.tab-header');
const tabHeads = document.querySelectorAll('.tabHeads');

const tabBody = document.querySelector('.tab-body');
const tabBodyContent = document.querySelectorAll('.tab-body-content');


// console.log(tabHeader);
// console.log(tabHeads);
// console.log(tabBody);
// console.log(tabBodyContent);

for(let i = 0; i<tabHeads.length; i++){
    tabHeads[i].addEventListener('click', ()=>{
        tabHeader.querySelector('.active').classList.remove('active');
        tabHeads[i].classList.add('active');

        tabBody.querySelector('.active').classList.remove('active');
        tabBodyContent[i].classList.add('active');
    })
}