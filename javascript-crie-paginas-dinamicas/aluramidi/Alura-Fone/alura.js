const teclas = document.querySelectorAll('input[type="button"]'); // Cria uma constante que irá receber todos os inputs com o tipo (type) "button". Dessa forma, teremos uma lista composta por todos os botões do nosso teclado numérico.

const telefone = document.querySelector('input[type="tel"]'); // Cria uma outra constante, mas, dessa vez, abriga apenas o espaço que conterá os números postos pelo usuário através dos cliques.

for (let c = 0; c < teclas.length; c++){ // Início da estrutura de repetição
  const valores = teclas[c].value; // Cria uma constante que irá receber, à cada repetição, o atributo presente entre as aspas do "value" de cada elemento "button" lá dentro do HTML.
  teclas[c].addEventListener("click", () => { // Apenas uma outra forma de adicionar algo parecido com "teclas[c].onclick = function () {}", então não se assuste. Sinta-se livre para utilizar o que foi ensinado até então pela instrutora Vanessa Me Tonini.
    telefone.value += valores; // Aqui, pegamos o "value" já presente no espaço para o número de telefone e concatenamos/juntamos o valor do botão clicado pelo usuário com o que já terá presente naquele espaço. Nesse caso, é como se estivéssemos modificando o "value" dentro do input de type/tipo "tel" à cada clique que damos em algum dos botões. Para testar como um value se comporta em um espaço para texto, tente acrescer um "value='Olá, Mundo!'" no HTML do input e talvez isso lhe ajude a compreender melhor o que estamos fazendo com o seu value. Aquele sinal "+=" é apenas um atalho para "telefone.value = telefone.value + valores". Já que ambos os valores são strings, e não números, eles irão ser juntados um ao outro ao invés de serem somados.
  })
}