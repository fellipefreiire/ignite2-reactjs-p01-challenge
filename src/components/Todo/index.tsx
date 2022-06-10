import { TodoItem } from '../TodoItem'
import { PlusCircle } from 'phosphor-react'

import styles from './Todo.module.css'
import { TodoEmptyList } from '../TodoEmptyList'
import { useState } from 'react'
import { staticTodos } from '../../static/todos'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  content: string
  isChecked: boolean
}

export const Todo: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(staticTodos)
  const [newTodoContent, setNewTodoContent] = useState('')

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoContent,
      isChecked: false
    }

    setTodos([...todos, newTodo])
    setNewTodoContent('')
  }

  const deleteTodo = (todoToDeleteId: string) => {
    const todosWithoutDeletedOne = todos.filter(todo => todo.id !== todoToDeleteId)

    setTodos(todosWithoutDeletedOne)
  }

  const handleToggleTodoChecked = (todoId: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        const updatedTodo = {
          ...todo,
          isChecked: !todo.isChecked
        }

        return updatedTodo
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const calculateConcludedTodos = (): string => {
    const concludedTodos = todos.filter(todo => todo.isChecked)
    if (todos.length === 0) {
      return '0'
    }
    return `${concludedTodos.length} de ${todos.length}`
  }

  return (
    <div className={styles.todoWrapper}>
      <div className={styles.addBox}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTodoContent}
          onChange={e => setNewTodoContent(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          Criar <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.todo}>
        <header>
          <div className={styles.createdTasks}>
            <strong>Tarefas Criadas</strong>
            <span>{todos.length}</span>
          </div>
          <div className={styles.concludedTasks}>
            <strong>Concluídas</strong>
            <span>{calculateConcludedTodos()}</span>
          </div>
        </header>

        {todos.length === 0 && (
          <TodoEmptyList />
        )}
      </div>

      {todos.length > 0 && (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isChecked={todo.isChecked}
            onDelete={deleteTodo}
            onToggle={handleToggleTodoChecked}
          />
        ))
      )}
    </div>
  )
}