function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  let labelqtderesultados = document.getElementById("qtde-resultados");

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    labelqtderesultados.innerHTML = ``;
    section.innerHTML = "<p>Você precisa digitar o nome de um atleta ou esporte</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let elenco = "";
  let generos = "";
  let diretor = "";
  let anoLancamento = "";
  let qtderesultados = 0;

  // Itera sobre cada dado da lista de dados
  for (let dado of filmesJurassicPark) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.sinopse.toLowerCase();
    diretor = dado.diretor.toLowerCase();
    elenco = dado.elenco;
    generos = dado.genero;
    anoLancamento = dado.anoLancamento.toString().toLowerCase();

    if (titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      elenco.some(ator => ator.toLowerCase().includes(campoPesquisa)) ||
      generos.some(genero => genero.toLowerCase().includes(campoPesquisa)) ||
      anoLancamento.includes(campoPesquisa) ||
      diretor.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
            <div class="item-resultado">
            <div class="capa">
            <img src="${dado.linkCapa}" alt="${dado.titulo}" width="200" height="100%">
            </div>
            <div class="informacoes">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.sinopse}</p>
            <h4>Ano de Lançamento: ${dado.anoLancamento}</h4> 
            <h4>Diretor: ${dado.diretor}</h4>
            <h4>Elenco: ${dado.elenco}</h4>
            <h4>Gênero: ${dado.genero}</h4>
            <h4>Bilheteria: ${dado.bilheteria.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}</h4>
            <br>                   
            <a href=${dado.linkTrailer} target="_blank">Assista ao Trailer</a>
            <br>  
            <a href=${dado.linkWikipedia}   ="_blank">Mais informações</a>
            </div>
            </div>
            `;
      qtderesultados++;
    }
  };

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
  labelqtderesultados.innerHTML = `${qtderesultados} Resultados encontrados`;

  // Seleciona todos os elementos com a classe item-resultado
  const itensResultado = document.querySelectorAll('.item-resultado');

  // Função para ativar a animação de um elemento
  function ativarItem(item, index) {
    setTimeout(() => {
      item.classList.add('active');
    }, index * 200); // Aumenta o delay em 1 segundo para cada item
  };

  // Aplica a função ativarItem a cada elemento com um delay
  itensResultado.forEach(ativarItem);
}