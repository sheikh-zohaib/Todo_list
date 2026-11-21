import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy } from "./firebase.mjs";

var input = document.getElementById("todoInput");
var mainBtn = document.getElementById("mainBtn");
var list = document.getElementById("list");
var inbox = document.getElementById("inbox");

var editId = null;
var todosRef = collection(db, "todos");

mainBtn.onclick = function () {
  var value = input.value.trim();
  if (value == "") {
    return;
  }

  if (editId) {
    updateDoc(doc(db, "todos", editId), {
      text: value
    });
    editId = null;
    mainBtn.innerText = "Add";
  } else {
    addDoc(todosRef, {
      text: value,
      createdAt: Date.now()
    });
  }

  input.value = "";
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

function copyTodo(text) {
  navigator.clipboard.writeText(text);
}

function editTodo(id, text) {
  editId = id;
  input.value = text;
  mainBtn.innerText = "Update";
  input.focus();
}

onSnapshot(query(todosRef, orderBy("createdAt", "desc")), function (snap) {
  list.innerHTML = "";
  inbox.innerText = snap.size + " Tasks";

  snap.forEach(function (d) {
    var data = d.data();

    list.innerHTML += `
      <li>
        <span>${data.text}</span>
        <div class="btn-row">
          <button class="btn orange small" onclick="editTodo('${d.id}', '${data.text}')">Edit</button>
          <button class="btn blue small" onclick="copyTodo('${data.text}')">Copy</button>
          <button class="btn red small" onclick="deleteTodo('${d.id}')">Delete</button>
        </div>
      </li>
    `;
  });
});