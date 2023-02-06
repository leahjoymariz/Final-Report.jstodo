let todo=[];
function addTask(){
    let task = document.getElementById("txtToDo").value;
    todo.push(task);
    displayTask(task);
    console.log(todo.lenght);
}
function displayTask(newTask){
    let task = `<li>${newTask}</li>`;
    const ul = document.getElementById("taskList");
    ul.innerHTML+=task;

};

let extra=[];
function addNotes(){
    let notes = document.getElementById("txtNotes").value;
    extra.push(notes);
    displayNotes(notes);
    console.log(notes.lenght);
    
}
function displayNotes(newNotes){
    let notes = `<li>${newNotes}</li>`;
    const ul = document.getElementById("notesList");
    ul.innerHtml+=notes;
}