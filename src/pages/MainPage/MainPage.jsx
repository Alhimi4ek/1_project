import HomeTemplate from './Components/homeTemplate'
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <h1 className={styles.title}>Строительство коттеджей</h1>
      <div className={styles.wrapper}>
        <HomeTemplate name={'Из Газобетона'} img={'./home2.svg'}/>
        <HomeTemplate name={'Из Кирпича'} img={'./home1.svg'}/>
        <HomeTemplate name={'Из Кирпича'} img={'./home2.svg'}/>
        <HomeTemplate name={'Из Бетона'} img={'./home1.svg'}/>
      </div>
    </div>
  )
}

  export default MainPage