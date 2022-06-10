import { Trash } from "phosphor-react";

import styles from './TodoItem.module.css'

export interface ITodoItemProps {
  id: string
  content: string
  isChecked: boolean
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export const TodoItem: React.FC<ITodoItemProps> = ({ id, content, isChecked, onDelete, onToggle }): JSX.Element => {
  return (
    <div className={styles.todoItem}>
      <label className={styles.checkbox}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={isChecked}
          onClick={() => onToggle(id)
          }
        />
      </label>
      <label htmlFor={id}>
        <span
          className={isChecked ? styles.contentChecked : styles.content}
        >
          {content}
        </span>
      </label>
      <button onClick={() => onDelete(id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}