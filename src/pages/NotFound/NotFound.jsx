import styles from "./NotFound.module.css"
import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className={styles.div}>
        <img src="./404.svg" alt="404" className={styles.img}/>      
        <h1>Страница не найдена</h1>
        <Link to="/" className={styles.constructionBtn}>Вернуться на главную</Link>
    </div>
  )
}   
export default NotFound