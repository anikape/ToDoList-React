import React from "react";

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite a sua pesquisa" />
      
    
    </div>
  )
}

export default Search;

//no input da busca ele vai pegar o valor e depois vai mudar o estado pegando o novo value; A função de pesquisar vai estar no App.js junto com a função map