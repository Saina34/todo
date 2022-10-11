import "./src/css/style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <form id="form">
      <input id="text-input" type="text"/>
    <button type="submit" onclick="">Add Todos</button>  
      </form>
    </div>
    <div>
      <ul id="todo-list">
        
      </ul>
    </div>
  </div>
`;

const setupForm = (element) => {
  element.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("text-input");
    addTodos(input.value, (todos) => {
      input.value = "";
      const list = document.getElementById("todo-list");
      renderList(list, todos);
    });
  });
};

const renderList = (list, todos) => {
  let listItemsHtml = ``;
  todos.forEach((listItem) => {
    listItemsHtml += `<li>${listItem.todo}</li>`;
  });

  list.innerHTML = listItemsHtml;
};

const todos = [];

console.log(todos);

const addTodos = (todo, callback) => {
  todos.push({
    todo: todo,
    isDone: false,
  });

  console.log(todos);

  callback(todos);
};

setupForm(document.querySelector("#form"));
