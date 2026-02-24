import { NavLink } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <img src="./icon.svg" alt="icon" />
                <h1>Строительный магазин</h1>
            </div>
            <div className={styles.center}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/service">Услуги</NavLink>
                <NavLink to="/projects">Проекты</NavLink>
                <NavLink to="/reviews">Отзывы</NavLink>
            </div>
            <div className={styles.right}>
                <img src="./vk.svg" alt="vk" />
                <img className={styles.telicon} src="./tel.svg" alt="tel" />
                <p>+7 (999) 999-99-99</p>
            </div>
        </div>
    )
}
export default Header;