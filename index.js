// Referencias al DOM
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const list = document.getElementById('todo-list');
const counter = document.getElementById('counter');

// Función para actualizar el contador
function actualizarContador() {
  const n = list.children.length;
  counter.textContent = n === 1 ? '1 producto' : '${n} productos';
}

// Crear un item con botón eliminar
function crearItem(texto) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Eliminar';
  delBtn.className = 'btn-small';

  delBtn.addEventListener('click', () => {
    li.remove();
    actualizarContador();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  return li;
}

// Agregar un producto
function agregarElemento() {
  const texto = input.value.trim();
  if (!texto) return;

  const item = crearItem(texto);
  list.appendChild(item);

  input.value = '';
  input.focus();
  actualizarContador();
}

// Eventos
addBtn.addEventListener('click', agregarElemento);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarElemento();
});
clearBtn.addEventListener('click', () => {
  list.innerHTML = '';
  actualizarContador();
});

actualizarContador();