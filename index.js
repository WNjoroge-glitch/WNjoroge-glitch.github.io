const task_btn = document.querySelector("#task-add-button")
const ul = document.querySelector("#form-list")
const form_input = document.querySelector(".input-form")
const clear_btn = document.querySelector("#task-clear-button")
const input_text = document.querySelector(".input-text")
const span = document.querySelector("#task-number")
const activeB = document.querySelector("#active-button")
const completeBtn = document.querySelector("#completed")
const allTasks = document.querySelector("#all")
const filter = document.querySelector(".filter-section")

    




addElements=() =>{
    const list =document.createElement("list")
    const form = document.createElement("form")
    const image = document.createElement("img")
    const checkbox_input = document.createElement("input")
    const text_input = document.createElement("input")
    const button = document.createElement("button")

    text_input.classList.add("added-input")
    checkbox_input.classList.add("checkbox")
    button.classList.add('style-button')
    form.classList.add('form')
    
    checkbox_input.setAttribute('type','checkbox')
    
    text_input.setAttribute('type','text')
    image.setAttribute('src','images/icon-cross.svg')

    button.appendChild(image)
    list.appendChild(form)
    form.appendChild(checkbox_input)
    form.appendChild(text_input)
    text_input.value=input_text.value
    form.appendChild(button)
    ul.appendChild(form)
    
    input_text.value=""

    button.addEventListener("click", function(){
        form.remove()

})
clear_btn.addEventListener("click", function(){
    if (checkbox_input.checked){
        form.remove()
        span.textContent = ul.children.length
    } else {
        return false
    }

})
}

task_btn.addEventListener("click", function(){
    addElements()
    span.textContent = ul.children.length
    
})




/*checking checked elements and striking them through*/

ul.addEventListener('click', function(event){
    
    target = event.target;
    target.checked ? target.nextSibling.style.textDecoration = "line-through" : target.nextSibling.style.textDecoration="none";
})
//filter tasks according to completed




function filterTasks(){
    const todo =  ul.children
    for (let i=0; i<todo.length;i++){
  var checkbox =todo[i].firstChild
  var form = todo[i]
  
  if (checkbox.checked){
      form.style.display="none";
      
  }else {
    form.style.display="block";
      
  }
    }
}
function filterCompleted(){
    const todo =  ul.children
    for (let i=0; i<todo.length;i++){
  var checkbox =todo[i].firstChild
  var form = todo[i]
  
if (checkbox.checked){
      form.style.display="block";
      
  }else {
    form.style.display="none";
      
  }
    }
}
function showAll(){
    const todo =  ul.children
    for (let i=0; i<todo.length;i++){
  var checkbox =todo[i].firstChild
  var form = todo[i]
  form.style.display="block"


}
}

filter.addEventListener("click", filterStatus)

function filterStatus(e){
    const todo =  ul.children
    for (let i=0; i<todo.length;i++){
        var checkbox =todo[i].firstChild  
        var form = todo[i]
    }
    target = e.target
    if (target.id == "active-button"){
        filterTasks()
    } else if(target.id == "completed"){
        filterCompleted()
    } else {
        showAll()
    }
    
       
}


//toggling dark and light mode
const toggleButtons = document.querySelectorAll('.color-mode_btn')
toggleButtons.forEach(btn =>{
    btn.addEventListener("click",toggleColor)
})

function toggleColor(e){
    if(e.currentTarget.classList.contains("light--hidden")){
        document.documentElement.setAttribute("color-scheme", "light")
        

        
    } else{
        document.documentElement.setAttribute("color-scheme","dark")
}
    

}













































