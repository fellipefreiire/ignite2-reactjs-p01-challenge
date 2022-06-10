import clipboard from '../../assets/clipboard.svg'

import styles from './TodoEmptyList.module.css';

export const TodoEmptyList: React.FC = (): JSX.Element => {
  return (
    <div className={styles.todoEmptyList}>
      <img src={clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}