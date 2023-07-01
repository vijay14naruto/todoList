
const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");


inputbox.onkeyup = () => {
    let UserEnterValue = inputbox.value;//Store  entered value
    if (UserEnterValue.trim() != 0) {
        add.style.display = "block"; //add button 
    }
    else {
        add.style.display = "none";//add button hide
    }
}

var item = [];
// Onclick Event to add task in array
add.onclick = () => {
    item.push(inputbox.value)//Item Add In Array
    showcase(); // showcase call to add li tag in html etc.
}

// Showcase function to display  the added task
function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class=" del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todolist.innerHTML = ListTag; //adding new li tag inside ul tag
    inputbox.value = ""; //once task added the input field blank
    add.style.display = "none";//Add button hide
    pendingTasks.textContent = item.length;//For toal left task counting
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    item.splice(index, 1);//removeing element from array
    showcase();
}
// delete all tasks function is used for delete all task from your list
clearall.onclick = () => {
    item = []; //empty the array
    showcase();
}

document.querySelector('.clearcomtask').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    var temp = [] // cretae  new arr for store completed task
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1);
            j++;
            i--;//Array.length is -1 because 1 element splice than i-- use for back
        }
    }
    showcase();
}

// Complete all task for completer all task
document.querySelector('.complete').onclick = () => {
    checked(true);
}
//Uncomplete all task for uncompleter all task
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}
//Checked funtion 
function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); 
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}
