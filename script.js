const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("add");

function inputLength(){
	return inputBox.value.length;
}
function createTask(){
	let li = document.createElement("li");
		li.appendChild(document.createTextNode(inputBox.value));
		listContainer.appendChild(li);
		inputBox.value = "";
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
}
function addTaskAfterClick(){
	if(inputLength() > 0){
		createTask();
	}
	saveData();
}

function addTaskAfterKeydown(){
	if(inputLength() > 0 && event.keyCode === 13){
		createTask();
	}
	saveData();
}
//cheked, unchecked and remove Task
listContainer.addEventListener("click", (e) => {
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();

	}else if (e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);

button.addEventListener("click", addTaskAfterClick);
inputBox.addEventListener("keydown", addTaskAfterKeydown);

//Save Tasks
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();