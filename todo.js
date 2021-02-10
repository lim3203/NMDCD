const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
    toDoList =  document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';

    const toDos = [];

    function saveToDos(){
        localStorage.setItem(TODOS_LS,toDos);
    }

    function paintToDo(text){
        const li = document.createElement("li");
        const delBTn = document.createElement("button");
        delBTn.innerHTML = "X";
        const span = document.createElement("span");
        const newId = toDos.length + 1;
        span.innerText = text;
        li.appendChild(delBTn);
        li.appendChild(span);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
        };
        toDos.push(toDoObj);
        saveToDos()

    }

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = " ";
    }

    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){

        }
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init()