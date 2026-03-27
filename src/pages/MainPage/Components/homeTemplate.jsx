import { useNavigate } from "react-router-dom"
import styles from "./../MainPage.module.css"

const HomeTemplate = ({name, img, id}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.homeTemplate}> 
            <img src={img} alt="home2" />
            <p>{name}</p>
            <button onClick={() => navigate(`/home/${id}`)}>Подробнее</button>
        </div>
    )
}

export default HomeTemplate;