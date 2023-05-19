import { useState } from 'react'
import './App.css'

import Todo from './component/Todo'
import FormToDo from './component/FormToDo'
import Search from './component/Search'
import Filter from './component/Filter'



function App() {

const  [todos, setTodos] = useState([
  // {
  //   id:1,
  //   text: "Criar Funcionalidade X no Sistema",
  //   category: "Trabalho",
  //   isCompleted: false,
  // },
  // {
  //   id:2,
  //   text: "Estudar React",
  //   category: "Estudo",
  //   isCompleted: false,
  // },
  // {
  //   id:3,
  //   text: "Ir para academia",
  //   category: "Pessoal",
  //   isCompleted: false,
  // }   
  
])

//função para adicionar itens ao ToDo

const addTodo = (text, category)=>{
  //o novo todo cria um array que recebe por spred todos todos e o novo todo

    const newTodo = [...todos,{
      id:Math.floor(Math.random() * 10000), /*gerando o id aleatoriamente */
      text,
      category,
      isCompleted: false,
    },]

      //atualizando a lista....o todo recebe o novo todo
    setTodos(newTodo)
}

const removeTodo = (id)=>{
  const newTodos = [...todos];
  //aqui vou filtrar para ver qual o todo q nao tem o id lá do array que a função solicitada. os que não tem, permanecem, o que tem será removido(null)

  const filteredTodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
      );
    //em seguida atualiza o estado
    setTodos(filteredTodos);  

}

const [search, setSearch]= useState ("")

//função completar tarefas

const completarTodo = (id)=>{
  const newTodos = [...todos]
  //vamos fazer um map e verificar se o id desse todo a ser completado é igual ao id do array, sendo igual inverte o isCompleted que ja inicia como false

  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  //atualizando o estado

  setTodos(newTodos)

}

const [filter, setFilter] = useState("All");
const [sort, setSort] = useState("Asc")

  return (
  <div className='app'>
      <h1>Lista de Tarefas</h1>
     
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      
    

    <div className='todo-list'>

      {/**Função do filtro do componente Filter se o filtro for All, trago tudo. Se for completed trago os completos. senão os incompletos. No sort e o elemento a for maior que o b, ordenação ascedente */}



        {todos.filter((todo)=> filter  === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          
          <>
            <Todo key={todo.id}  todo={todo} removeTodo={removeTodo} completarTodo={completarTodo}/>
           
          </>
           /*todo={todo} isso é a props para poder renderizar na tela */
                    
        ))}
    </div>
     
    <FormToDo addTodo={addTodo} />

  </div>

  )
    
    
       
  

      }
export default App
