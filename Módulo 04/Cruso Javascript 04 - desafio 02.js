var inputBtn = document.getElementById('inputButton');
var inputField = document.getElementById('inputName');

inputBtn.onclick = function(){
	listSpace.innerHTML = 'Carregando';
	if (inputField.value === ''){
		alert('O campo não pode estar vazio')
	} else {
		mPromise()
			.then(function(resposta){
				criarLista(resposta)
			})
			.catch(function(erro){
					listSpace.innerHTML = erro
			})

	}
};

var mPromise = function(){

	return new Promise(function(resolve, reject){
		var nome = inputField.value;
		var gitNome = 'https://api.github.com/users/' + nome + '/repos';

		var req = new XMLHttpRequest();

		req.open('GET', gitNome);
		req.send(null);

		req.onreadystatechange = function(){
			if(req.readyState === 4){
				if(req.status === 200) {
					listSpace.innerHTML = '';
					resolve(JSON.parse(req.responseText));
				} else {
					reject('Erro na requisição')
				}
			}
		};

	});

};

var listSpace = document.querySelector('body #listSpace');

function criarLista(repoLista){
	for(repoItem of repoLista){	
		var repoItemText = document.createTextNode(repoItem.name);

		var listItem = document.createElement('li');
		var listItemLink = document.createElement('a');

		listItem.appendChild(listItemLink);
		listItemLink.setAttribute('href', repoItem.clone_url);
		listItemLink.setAttribute('target', '_blank')

		listItemLink.appendChild(repoItemText);
		listSpace.appendChild(listItem);
	};
};



