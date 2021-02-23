let addtodos = document.querySelector('.add-todo');
let todoslist = document.querySelector('.todos');
let clearButton = document.querySelector('button.clear');
let searchInput = document.querySelector('input.search-to-dos');
let notFound = document.querySelector('.not-found');

const todolistAppend = todo =>{
    let listTemplate = `<li class="todo-item">
    ${todo}<i class="fas fa-trash delete" aria-hidden="true"></i>
    </li>`
    todoslist.innerHTML += listTemplate;
}


const filterList = searchValue =>{
    let lists = todoslist.querySelectorAll('li');
    lists.forEach(list =>{
        let listText = list.innerText.toLowerCase();
        if (listText.indexOf(searchValue) != -1){
            list.classList.remove('filtered');
        } else {
            list.classList.add('filtered');
            let filteredList = todoslist.querySelectorAll('.filtered')
            if( lists.length === filteredList.length){
                notFound.style.display = "block";
            } else{
                notFound.style.display = "none";
            }
        }
    })
}

addtodos.addEventListener('submit', e=>{
    e.preventDefault();
    let listValue = addtodos.querySelector('input').value.trim();
    if(listValue.length){
        todolistAppend(listValue);
    }
    
    addtodos.reset();
})

todoslist.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

clearButton.addEventListener('click', ()=>{
    todoslist.innerHTML =""
})

searchInput.addEventListener('keyup', e=>{
    let searchTerm = e.target.value.trim().toLowerCase();
    filterList(searchTerm);
})