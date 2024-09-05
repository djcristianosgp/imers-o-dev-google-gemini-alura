function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let labelqtderesultados = document.getElementById("qtde-resultados");
    let termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let qtderesultados=0;

    // Itera sobre cada dado da lista de dados
    for (let dado of filmesJurassicPark) {
        if (dado.titulo.toLowerCase().includes(termoPesquisa)){
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
            <a href=${dado.linkWikipedia} target="_blank">Mais informações</a>
            </div>
            </div>
            `;
            qtderesultados++;
        }
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    labelqtderesultados.innerHTML = `${qtderesultados} Encontrados`;
}