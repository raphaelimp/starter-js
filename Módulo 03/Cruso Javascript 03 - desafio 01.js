var listaItens = document.querySelector('#app ul');
var listaAddCampo = document.querySelector('#app input');
var listaAddBotao = document.querySelector('#app button');

var todosLista = JSON.parse(localStorage.getItem('Lista_todos')) || [];

function renderTodo(){
	listaItens.innerHTML = '';
	for(todo of todosLista) {
		var listaElement = document.createElement('li');
		var listaTexto = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		var linkText = document.createTextNode(' Excluir');

		var pos = todosLista.indexOf(todo);
		listaElement.setAttribute('onClick', 'removeTodo('+pos+')')

		linkElement.appendChild(linkText);
		linkElement.setAttribute('href', '#')

		listaElement.appendChild(listaTexto);
		listaElement.appendChild(linkElement);

		listaItens.appendChild(listaElement);
	};
};

function addTodo(){
	var inputElement = listaAddCampo.value;

	todosLista.push(inputElement);
	inputElement = '';
	renderTodo();
	saveToStorage();
};

listaAddBotao.onclick = addTodo;

function removeTodo(pos){
	todosLista.splice(pos, 1);
	renderTodo();
	saveToStorage();
};

function saveToStorage(){
	localStorage.setItem('Lista_todos', JSON.stringify(todosLista));
}


renderTodo()