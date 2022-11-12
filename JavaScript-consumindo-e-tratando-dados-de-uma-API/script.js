async function buscaEndereco (cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json();

    //console.log(consultaCEP)
    if(consultaCEPConvertida.erro){
        throw Error('CEP não existente!');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    bairro.value = consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente Novamente!</p>`
        console.log(erro)
    }
}


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); //focusout = quando digita no campo e clica fora chama o focusout que faz o buscaendereco

/*let ceps = ['01001000', '58070315']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))*/






/* var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')//then = entao // Uma promise sempre vai retorna um objeto do tipo response
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro){
            throw Error('Esse cep não existe')
        } else
        console.log(r)})
    .catch(erro => console.log(erro)) //pegar o erro
    .finally(mensagem => console.log('Processamento concluido!'));


console.log(consultaCEP) */





/*console.log("Mandando oi pro amigo!")

function mandaMensagem () {
    console.log("Tudo Bem?");
    console.log("Vou te mandar uma solicitação");
    console.log("Solicitação recebida!");
}

//mandaMensagem();
setTimeout(mandaMensagem, 5000); //MANDA PARA O TASK QUEUE E ESPERA 5 SEGUNDS

console.log("Xau xau!")*/


/*

//IIFF Se eu não quiser que ngm chame ou se tenho o mesmo nome variavel na javascript
(function (){
    const getPerson = () => ({name:"Henry", eye: "black"});

    console.log(getPerson());
}());

(() => {
    const getPerson = () => ({name:"Henry", eye: "black"});

    console.log(getPerson());
})();

//This
(() => {
    function Person(){
        
        this.year = 0;

        setInterval(() => {
            this.year = this.year + 1
            console.log('Qual o this?', this)
            console.log('Qual é a idade?', this.year)
        }, 1000 )
    }
    
    const p1 = new Person()
  
})();

*/