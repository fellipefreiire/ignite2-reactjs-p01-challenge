import { v4 as uuidv4 } from 'uuid'

export const staticTodos = [
  {
    id: uuidv4(),
    isChecked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: uuidv4(),
    isChecked: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
]