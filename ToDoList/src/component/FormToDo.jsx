// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

// eslint-disable-next-line react/prop-types
const FormToDo = ({addTodo}) => {
  /**O componente está recebendo como parâmetro a função addTodo gerada no App.jsx */
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

    /*Função para submeter o form*/

    const handleSubmit = (e) =>{
      e.preventDefault();
      //Se value ou categoria estiverem vazios ou indefinidos retorna
      if(!value || !category)
        return;
      
      //add Todo
      // limpar os campos primeiro atribui valor aos campos e através do useState abaixo ele vai limpar
      addTodo(value, category);
      setValue("");
      setCategory("");
      console.log(value, category)

    }

  return (
    <div className="form-group">
      <h2>Criar Tarefas</h2>
      <form onSubmit={handleSubmit} >
        {/*dentro do input e do select vai ter o onChange que vai capturar as mudanças de estado para poder adicionar a lista, através do e.target.value */}
        <input placeholder='Digite o Título' value={value} onChange={(e) =>{
          setValue(e.target.value)}}/>


        <select value={category} onChange={(e) =>{ setCategory(e.target.value)}}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type='submit'>Criar Tarefa</button>
      </form>

    </div>
  )
}

export default FormToDo