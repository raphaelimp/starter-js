var idade = prompt('Digite sua idade: ')
const maiorQ = "É maior de idade";
const menorQ = 'É menor de idade';


function checarIdade(idade){
	return new Promise(function(resolve, reject){
		if(idade >= 18) {
			setTimeout(function(){
				resolve(maiorQ);
			}, 2000);
		} else {
			setTimeout(function(){
				reject(menorQ);
			}, 2000)
		}
	})	
};

checarIdade(idade)
	.then(function(resposta){
		console.log(resposta)
	})
	.catch(function(erro){
		console.log(erro)
	})