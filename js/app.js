function add_Food(event) {
    event.preventDefault();
    // 1- Get the book name from the input field
    const getFood=document.querySelector('.search');
     
    // 2- Create a new spam bookName for the book name, class name = name
    const new_Name=document.createElement('span');
    new_Name.className ='name';
    new_Name.textContent =getFood.value;
  
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    const new_Delete=document.createElement('span');
    new_Delete.className ='delete';
    new_Delete.textContent ='x';
  
    // 4- Create a new li
    const div=document.createElement('div');
    div.classList.add('list');

    div.appendChild(new_Name);
    div.appendChild(new_Delete);
  
    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
   const output=document.querySelector('.add-newFood')
   output.appendChild(div);
    //  clear value from input 
    getFood.value ='';
  }

// How to remove element
function removeFood(event){
    if (event.target.className==='delete'){
        let li =event.target.parentElement;
        li.remove();
      }
}
// click on buttun Restaurant or Shop
function clickBtn(event){
    const getBtn =document.querySelectorAll('button');
    for (btn of getBtn){
        if (btn.textContent==="Restaurants"){
            btn.style.color ="red"
            btn.style.textDecoration ="underline";
        }else{
            btn.style.color ="teal"
            btn.style.textDecoration ="underline";
        }

    }
    
    
}

const addFood =document.querySelector("#add_food");
addFood.addEventListener("submit", add_Food);

const delete_Food =document.querySelector('.add-newFood');
delete_Food.addEventListener('click', removeFood);

const choosBtn =document.querySelector('.restaurant-shop');
choosBtn.addEventListener('click', clickBtn);
  
