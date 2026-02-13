import styles from "./../MainPage.module.css"

const HomeTemplate = ({name, img}) => {
    return (
        <div className={styles.homeTemplate}> 
            <img src={img} alt="home2" />
            <p>{name}</p>
            <button>Подробнее</button>
        </div>
    )
}

export default HomeTemplate;