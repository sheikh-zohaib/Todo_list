import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy } from "./firebase.js";

var todoInp = document.getElementById("todoInp");
var list = document.getElementById("list");
var addBtn = document.getElementById("addBtn");

var editId = null;
var todosRef = collection(db, "todos");

function addTodo() {
var value = todoInp.value;

if (value == "") {
return;
}

if (editId) {
updateDoc(doc(db, "todos", editId), {
text: value
});
editId = null;
addBtn.innerHTML = "add";
} else {
addDoc(todosRef, {
text: value,
createdAt: Date.now()
});
}
todoInp.value = "";
}

function deleteAll() {
getDocs(todosRef).then(function (snap) {
snap.forEach(function (d) {
deleteDoc(doc(db, "todos", d.id));
});
});
}

function deleteTodo(id) {
deleteDoc(doc(db, "todos", id));
}

function editTodo(id, text) {
editId = id;
todoInp.value = text;
addBtn.innerHTML = "Update";
}

function tickTodo(box) {
var span = box.parentElement.querySelector("span");
if (box.checked) {
span.style.textDecoration = "line-through";
span.style.color = "green";
} else {
span.style.textDecoration = "none";
span.style.color = "black";
}
}

window.addTodo = addTodo;
window.deleteAll = deleteAll;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
window.tickTodo = tickTodo;

onSnapshot(query(todosRef, orderBy("createdAt", "desc")), function (snap) {
list.innerHTML = "";

snap.forEach(function (d) {
var data = d.data();
list.innerHTML += `
<li>
<input type="checkbox" onclick="tickTodo(this)">
<span>${data.text}</span>
<button class="delBtn" onclick="deleteTodo('${d.id}')">del</button>
<button class="editBtn" onclick="editTodo('${d.id}', '${data.text}')">edit</button>
</li>
`;
});
});