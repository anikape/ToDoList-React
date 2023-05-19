import React from 'react'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className='filter'>
      <h2>Filtrar</h2>

     < div className='filter-options'>
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
              <option value="All">Todos</option>
              <option value="Completed">Completos</option>
              <option value="Incomplete">Incompletos</option>
          </select>
        </div>
        <div className='btn'>
            <p>Ordenar</p>
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>

        </div>
      </div>
 
    </div>
  )
}

export default Filter


//componente para filtrar as tarefas
// no setFilter ele vai verificar o value e voltar o retorno pelo e.target.value