import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.up}>
                <img src="./icon.svg" alt="icon" />
                <h1>Строительный магазин</h1>
            </div>
            <div className={styles.down}>
                <p>Опыт работы более 15 лет</p>
                <p>Строительство домов под ключ на территории Пермского края.</p>
            </div>
        </div>
    )
}
export default Footer;