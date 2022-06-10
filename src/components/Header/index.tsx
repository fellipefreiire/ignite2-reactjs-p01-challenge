import todoLogo from '../../assets/logo.svg'

import styles from './Header.module.css'

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Todo" />
    </header>
  )
}