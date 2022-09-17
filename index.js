
/*onclick add task button */
document.getElementById("Add_Tasks").addEventListener("keypress",function(event){
    if(event.key =="Enter"){
        event.preventDefault();
        document.getElementById("Add_Tasks_button").click();
    }
})
document.getElementById("Add_Tasks_button").addEventListener("click", tasks);
function tasks(){
    let addTask = document.getElementById("Add_Tasks");
    let task = addTask.value;
    task.id="task";
/*checkbox */    
    let x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.id="checkbox";
/*creating edit button */
    let editTaskbutton = document.createElement('button');
    editTaskbutton.id = "editButton";
    editTaskbutton.appendChild(document.createTextNode("Edit"));
/*creating delete button */
    let delTaskbutton = document.createElement('button');
    delTaskbutton.id = "delButton";
    delTaskbutton.appendChild(document.createTextNode("×"));
/*creating list item */
    let taskList = document.getElementById("taskList")
    let taskItem = document.createElement("li");
/*appending tasks with  buttons*/
    if(task.length!=0){
        taskItem.append(x,task,editTaskbutton,delTaskbutton);
        taskList.append(taskItem);
        addTask.value="";
    }
/*deleting task*/
    delTaskbutton.addEventListener("click", () => {
        if(confirm("deleting task")){
            taskItem.remove(x,task,editTaskbutton,delTaskbutton);
        }
    })
/*updating task*/
    editTaskbutton.addEventListener("click", ()=>{
       task= prompt("update your task")
       taskItem.textContent="";
       taskItem.append(x,task,editTaskbutton,delTaskbutton);
    })
/*checkbox*/
        x.addEventListener("change", (e) => {
        if (e.target.checked) {
            x.disabled = "true";
            taskItem.removeChild(editTaskbutton);
            taskItem.removeChild(delTaskbutton);
            let p = document.createElement('p');
            let text = document.createTextNode(taskItem.textContent);
            p.append(x,text);
            taskList.replaceChild(p,taskItem);
        }});
}
