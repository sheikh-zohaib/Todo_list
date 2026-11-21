import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy } from "./firebase.mjs";

var input = document.getElementById("todoInput");
var mainBtn = document.getElementById("mainBtn");
var list = document.getElementById("list");
var inbox = document.getElementById("inbox");

var editId = null;
var todosRef = collection(db, "todos");

mainBtn.onclick = async function () {
  var value = input.value.trim();
  if (value == "") {
    return;
  }

  try {
    if (editId) {
      await updateDoc(doc(db, "todos", editId), {
        text: value
      });
      editId = null;
      mainBtn.innerText = "add";
    } else {
      await addDoc(todosRef, {
        text: value,
        createdAt: Date.now()
      });
    }
    input.value = "";
  } catch (e) {
    alert("Error: " + e.message);
  }
};

document.getElementById("deleteAllBtn").onclick = async function () {
  var snap = await getDocs(todosRef);
  snap.forEach(function (d) {
    deleteDoc(doc(db, "todos", d.id));
  });
};

function deleteTodo(id) {
  deleteDoc(doc(db, "todos", id));
}

function editTodo(id, text) {
  editId = id;
  input.value = text;
  mainBtn.innerText = "Update";
  input.focus();
}

window.deleteTodo = deleteTodo;
window.editTodo = editTodo;

onSnapshot(query(todosRef, orderBy("createdAt", "desc")), function (snap) {
  list.innerHTML = "";
  inbox.innerText = snap.size + " Tasks";

  snap.forEach(function (d) {
    var data = d.data();

    list.innerHTML += `
      <li class="task-item">
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${data.text}</span>
        <button class="delete-btn" onclick="deleteTodo('${d.id}')">del</button>
        <button class="edit-btn" onclick="editTodo('${d.id}', '${data.text}')">edit</button>
      </li>
    `;
  });
});