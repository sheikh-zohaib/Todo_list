import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");

async function getTodos() {
  list.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((docItem) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${docItem.data().text}</span>
      <button onclick="deleteTodo('${docItem.id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

async function addTodo() {
  if (input.value === "") return;
  await addDoc(collection(db, "todos"), {
    text: input.value
  });
  input.value = "";
  getTodos();
}

window.deleteTodo = async function(id) {
  await deleteDoc(doc(db, "todos", id));
  getTodos();
}

addBtn.addEventListener("click", addTodo);
getTodos();
